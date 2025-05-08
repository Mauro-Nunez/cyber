import { query, transaction, buildInsertStatement, buildUpdateStatement } from '../utils/database';
import { NavigationMenu, NavigationItem } from '../types/database';

export class NavigationRepository {
  static async createMenu(menu: Partial<NavigationMenu>): Promise<NavigationMenu> {
    const { text, values } = buildInsertStatement('navigation_menus', menu);
    const result = await query<NavigationMenu>(text, values);
    return result.rows[0];
  }

  static async updateMenu(id: string, menu: Partial<NavigationMenu>): Promise<NavigationMenu> {
    const { text, values } = buildUpdateStatement(
      'navigation_menus',
      menu,
      { id }
    );
    const result = await query<NavigationMenu>(text, values);
    return result.rows[0];
  }

  static async deleteMenu(id: string): Promise<void> {
    return await transaction(async (client) => {
      // First delete all menu items
      await client.query('DELETE FROM navigation_items WHERE menu_id = $1', [id]);
      // Then delete the menu
      await client.query('DELETE FROM navigation_menus WHERE id = $1', [id]);
    });
  }

  static async getMenu(id: string): Promise<NavigationMenu | null> {
    const result = await query<NavigationMenu>(
      'SELECT * FROM navigation_menus WHERE id = $1',
      [id]
    );
    return result.rows[0] || null;
  }

  static async getAllMenus(): Promise<NavigationMenu[]> {
    const result = await query<NavigationMenu>(
      'SELECT * FROM navigation_menus ORDER BY name ASC'
    );
    return result.rows;
  }

  static async createItem(item: Partial<NavigationItem>): Promise<NavigationItem> {
    const { text, values } = buildInsertStatement('navigation_items', item);
    const result = await query<NavigationItem>(text, values);
    return result.rows[0];
  }

  static async updateItem(id: string, item: Partial<NavigationItem>): Promise<NavigationItem> {
    const { text, values } = buildUpdateStatement(
      'navigation_items',
      item,
      { id }
    );
    const result = await query<NavigationItem>(text, values);
    return result.rows[0];
  }

  static async deleteItem(id: string): Promise<void> {
    return await transaction(async (client) => {
      // Get the item to be deleted
      const itemResult = await client.query<NavigationItem>(
        'SELECT * FROM navigation_items WHERE id = $1',
        [id]
      );
      const item = itemResult.rows[0];

      // Delete the item
      await client.query('DELETE FROM navigation_items WHERE id = $1', [id]);

      // Update order_index for remaining items
      await client.query(
        `UPDATE navigation_items 
         SET order_index = order_index - 1
         WHERE menu_id = $1 AND parent_id = $2 AND order_index > $3`,
        [item.menu_id, item.parent_id, item.order_index]
      );
    });
  }

  static async getMenuItems(menuId: string): Promise<NavigationItem[]> {
    const result = await query<NavigationItem>(
      `WITH RECURSIVE menu_tree AS (
        SELECT * FROM navigation_items WHERE menu_id = $1 AND parent_id IS NULL
        UNION ALL
        SELECT ni.* FROM navigation_items ni
        INNER JOIN menu_tree mt ON ni.parent_id = mt.id
      )
      SELECT * FROM menu_tree ORDER BY parent_id NULLS FIRST, order_index ASC`,
      [menuId]
    );
    return result.rows;
  }

  static async reorderItems(menuId: string, itemIds: string[]): Promise<void> {
    return await transaction(async (client) => {
      for (let i = 0; i < itemIds.length; i++) {
        await client.query(
          'UPDATE navigation_items SET order_index = $1 WHERE id = $2 AND menu_id = $3',
          [i, itemIds[i], menuId]
        );
      }
    });
  }

  static async moveItem(itemId: string, newParentId: string | null, newOrderIndex: number): Promise<void> {
    return await transaction(async (client) => {
      // Get the item to be moved
      const itemResult = await client.query<NavigationItem>(
        'SELECT * FROM navigation_items WHERE id = $1',
        [itemId]
      );
      const item = itemResult.rows[0];

      // Update order_index for items in the old parent
      await client.query(
        `UPDATE navigation_items 
         SET order_index = order_index - 1
         WHERE menu_id = $1 AND parent_id = $2 AND order_index > $3`,
        [item.menu_id, item.parent_id, item.order_index]
      );

      // Update order_index for items in the new parent
      await client.query(
        `UPDATE navigation_items 
         SET order_index = order_index + 1
         WHERE menu_id = $1 AND parent_id = $2 AND order_index >= $3`,
        [item.menu_id, newParentId, newOrderIndex]
      );

      // Move the item
      await client.query(
        'UPDATE navigation_items SET parent_id = $1, order_index = $2 WHERE id = $3',
        [newParentId, newOrderIndex, itemId]
      );
    });
  }

  static async duplicateItem(itemId: string): Promise<NavigationItem> {
    return await transaction(async (client) => {
      // Get the original item
      const itemResult = await client.query<NavigationItem>(
        'SELECT * FROM navigation_items WHERE id = $1',
        [itemId]
      );
      const originalItem = itemResult.rows[0];

      // Create a new item with the same properties
      const newItemResult = await client.query<NavigationItem>(
        `INSERT INTO navigation_items (
          menu_id, parent_id, label, url, order_index
        ) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [
          originalItem.menu_id,
          originalItem.parent_id,
          `${originalItem.label} (copy)`,
          originalItem.url,
          originalItem.order_index + 1
        ]
      );
      return newItemResult.rows[0];
    });
  }
} 