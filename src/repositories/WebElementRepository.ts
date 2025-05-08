import { query, transaction, buildInsertStatement, buildUpdateStatement } from '../utils/database';
import { WebElement, ElementContent, ElementAttribute, ElementStyle } from '../types/database';

export class WebElementRepository {
  static async create(element: Partial<WebElement>): Promise<WebElement> {
    const { text, values } = buildInsertStatement('web_elements', element);
    const result = await query<WebElement>(text, values);
    return result.rows[0];
  }

  static async findById(id: string): Promise<WebElement | null> {
    const result = await query<WebElement>(
      'SELECT * FROM web_elements WHERE id = $1',
      [id]
    );
    return result.rows[0] || null;
  }

  static async findByType(type: string): Promise<WebElement[]> {
    const result = await query<WebElement>(
      'SELECT * FROM web_elements WHERE type = $1',
      [type]
    );
    return result.rows;
  }

  static async findByLocation(location: string): Promise<WebElement[]> {
    const result = await query<WebElement>(
      'SELECT * FROM web_elements WHERE location = $1',
      [location]
    );
    return result.rows;
  }

  static async update(id: string, element: Partial<WebElement>): Promise<WebElement> {
    const { text, values } = buildUpdateStatement(
      'web_elements',
      element,
      { id }
    );
    const result = await query<WebElement>(text, values);
    return result.rows[0];
  }

  static async delete(id: string): Promise<void> {
    await query('DELETE FROM web_elements WHERE id = $1', [id]);
  }

  static async getContent(elementId: string): Promise<ElementContent[]> {
    const result = await query<ElementContent>(
      'SELECT * FROM element_contents WHERE element_id = $1 ORDER BY version DESC',
      [elementId]
    );
    return result.rows;
  }

  static async addContent(content: Partial<ElementContent>): Promise<ElementContent> {
    const { text, values } = buildInsertStatement('element_contents', content);
    const result = await query<ElementContent>(text, values);
    return result.rows[0];
  }

  static async getAttributes(elementId: string): Promise<ElementAttribute[]> {
    const result = await query<ElementAttribute>(
      'SELECT * FROM element_attributes WHERE element_id = $1',
      [elementId]
    );
    return result.rows;
  }

  static async setAttribute(
    elementId: string,
    key: string,
    value: string
  ): Promise<ElementAttribute> {
    const { text, values } = buildInsertStatement('element_attributes', {
      element_id: elementId,
      key,
      value,
    });
    const result = await query<ElementAttribute>(text, values);
    return result.rows[0];
  }

  static async getStyles(elementId: string): Promise<ElementStyle[]> {
    const result = await query<ElementStyle>(
      'SELECT * FROM element_styles WHERE element_id = $1',
      [elementId]
    );
    return result.rows;
  }

  static async addStyle(
    elementId: string,
    styleClass: string
  ): Promise<ElementStyle> {
    const { text, values } = buildInsertStatement('element_styles', {
      element_id: elementId,
      style_class: styleClass,
    });
    const result = await query<ElementStyle>(text, values);
    return result.rows[0];
  }

  static async removeStyle(elementId: string, styleClass: string): Promise<void> {
    await query(
      'DELETE FROM element_styles WHERE element_id = $1 AND style_class = $2',
      [elementId, styleClass]
    );
  }

  static async publish(id: string): Promise<WebElement> {
    return await transaction(async (client) => {
      const element = await client.query<WebElement>(
        'UPDATE web_elements SET is_published = true WHERE id = $1 RETURNING *',
        [id]
      );
      return element.rows[0];
    });
  }

  static async unpublish(id: string): Promise<WebElement> {
    return await transaction(async (client) => {
      const element = await client.query<WebElement>(
        'UPDATE web_elements SET is_published = false WHERE id = $1 RETURNING *',
        [id]
      );
      return element.rows[0];
    });
  }

  static async findPublished(): Promise<WebElement[]> {
    const result = await query<WebElement>(
      'SELECT * FROM web_elements WHERE is_published = true'
    );
    return result.rows;
  }

  static async findUnpublished(): Promise<WebElement[]> {
    const result = await query<WebElement>(
      'SELECT * FROM web_elements WHERE is_published = false'
    );
    return result.rows;
  }
} 