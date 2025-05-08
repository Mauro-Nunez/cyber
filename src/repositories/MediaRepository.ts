import { query, transaction, buildInsertStatement, buildUpdateStatement } from '../utils/database';
import { MediaFile, ElementMedia } from '../types/database';

export class MediaRepository {
  static async createFile(file: Partial<MediaFile>): Promise<MediaFile> {
    const { text, values } = buildInsertStatement('media_files', file);
    const result = await query<MediaFile>(text, values);
    return result.rows[0];
  }

  static async updateFile(id: string, file: Partial<MediaFile>): Promise<MediaFile> {
    const { text, values } = buildUpdateStatement(
      'media_files',
      file,
      { id }
    );
    const result = await query<MediaFile>(text, values);
    return result.rows[0];
  }

  static async deleteFile(id: string): Promise<void> {
    return await transaction(async (client) => {
      // First delete all element-media relationships
      await client.query('DELETE FROM element_media WHERE media_id = $1', [id]);
      // Then delete the file
      await client.query('DELETE FROM media_files WHERE id = $1', [id]);
    });
  }

  static async getFile(id: string): Promise<MediaFile | null> {
    const result = await query<MediaFile>(
      'SELECT * FROM media_files WHERE id = $1',
      [id]
    );
    return result.rows[0] || null;
  }

  static async getFilesByType(type: string): Promise<MediaFile[]> {
    const result = await query<MediaFile>(
      'SELECT * FROM media_files WHERE type = $1 ORDER BY created_at DESC',
      [type]
    );
    return result.rows;
  }

  static async searchFiles(searchQuery: string): Promise<MediaFile[]> {
    const result = await query<MediaFile>(
      `SELECT * FROM media_files 
       WHERE filename ILIKE $1 OR alt_text ILIKE $1
       ORDER BY created_at DESC`,
      [`%${searchQuery}%`]
    );
    return result.rows;
  }

  static async linkMediaToElement(elementMedia: Partial<ElementMedia>): Promise<ElementMedia> {
    const { text, values } = buildInsertStatement('element_media', elementMedia);
    const result = await query<ElementMedia>(text, values);
    return result.rows[0];
  }

  static async unlinkMediaFromElement(elementId: string, mediaId: string): Promise<void> {
    await query(
      'DELETE FROM element_media WHERE element_id = $1 AND media_id = $2',
      [elementId, mediaId]
    );
  }

  static async getElementMedia(elementId: string): Promise<MediaFile[]> {
    const result = await query<MediaFile>(
      `SELECT m.* FROM media_files m
       INNER JOIN element_media em ON em.media_id = m.id
       WHERE em.element_id = $1
       ORDER BY em.order_index ASC`,
      [elementId]
    );
    return result.rows;
  }

  static async reorderElementMedia(elementId: string, mediaIds: string[]): Promise<void> {
    return await transaction(async (client) => {
      for (let i = 0; i < mediaIds.length; i++) {
        await client.query(
          'UPDATE element_media SET order_index = $1 WHERE element_id = $2 AND media_id = $3',
          [i, elementId, mediaIds[i]]
        );
      }
    });
  }

  static async getUnusedMedia(): Promise<MediaFile[]> {
    const result = await query<MediaFile>(
      `SELECT m.* FROM media_files m
       LEFT JOIN element_media em ON em.media_id = m.id
       WHERE em.id IS NULL
       ORDER BY m.created_at DESC`
    );
    return result.rows;
  }

  static async getMediaUsage(mediaId: string): Promise<ElementMedia[]> {
    const result = await query<ElementMedia>(
      `SELECT em.*, e.type as element_type
       FROM element_media em
       INNER JOIN web_elements e ON e.id = em.element_id
       WHERE em.media_id = $1
       ORDER BY em.created_at DESC`,
      [mediaId]
    );
    return result.rows;
  }
} 