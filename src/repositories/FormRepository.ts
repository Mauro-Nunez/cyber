import { query, transaction, buildInsertStatement, buildUpdateStatement } from '../utils/database';
import { FormField, FormFieldOption } from '../types/database';

export class FormRepository {
  static async createField(field: Partial<FormField>): Promise<FormField> {
    const { text, values } = buildInsertStatement('form_fields', field);
    const result = await query<FormField>(text, values);
    return result.rows[0];
  }

  static async updateField(id: string, field: Partial<FormField>): Promise<FormField> {
    const { text, values } = buildUpdateStatement(
      'form_fields',
      field,
      { id }
    );
    const result = await query<FormField>(text, values);
    return result.rows[0];
  }

  static async deleteField(id: string): Promise<void> {
    await query('DELETE FROM form_fields WHERE id = $1', [id]);
  }

  static async getFields(elementId: string): Promise<FormField[]> {
    const result = await query<FormField>(
      'SELECT * FROM form_fields WHERE element_id = $1 ORDER BY order_index ASC',
      [elementId]
    );
    return result.rows;
  }

  static async reorderFields(elementId: string, fieldIds: string[]): Promise<void> {
    return await transaction(async (client) => {
      for (let i = 0; i < fieldIds.length; i++) {
        await client.query(
          'UPDATE form_fields SET order_index = $1 WHERE id = $2 AND element_id = $3',
          [i, fieldIds[i], elementId]
        );
      }
    });
  }

  static async addOption(option: Partial<FormFieldOption>): Promise<FormFieldOption> {
    const { text, values } = buildInsertStatement('form_field_options', option);
    const result = await query<FormFieldOption>(text, values);
    return result.rows[0];
  }

  static async updateOption(id: string, option: Partial<FormFieldOption>): Promise<FormFieldOption> {
    const { text, values } = buildUpdateStatement(
      'form_field_options',
      option,
      { id }
    );
    const result = await query<FormFieldOption>(text, values);
    return result.rows[0];
  }

  static async deleteOption(id: string): Promise<void> {
    await query('DELETE FROM form_field_options WHERE id = $1', [id]);
  }

  static async getOptions(fieldId: string): Promise<FormFieldOption[]> {
    const result = await query<FormFieldOption>(
      'SELECT * FROM form_field_options WHERE field_id = $1 ORDER BY order_index ASC',
      [fieldId]
    );
    return result.rows;
  }

  static async reorderOptions(fieldId: string, optionIds: string[]): Promise<void> {
    return await transaction(async (client) => {
      for (let i = 0; i < optionIds.length; i++) {
        await client.query(
          'UPDATE form_field_options SET order_index = $1 WHERE id = $2 AND field_id = $3',
          [i, optionIds[i], fieldId]
        );
      }
    });
  }

  static async getFormWithFields(elementId: string): Promise<{
    fields: FormField[];
    options: Record<string, FormFieldOption[]>;
  }> {
    const fields = await this.getFields(elementId);
    const options: Record<string, FormFieldOption[]> = {};

    for (const field of fields) {
      options[field.id] = await this.getOptions(field.id);
    }

    return { fields, options };
  }

  static async duplicateField(fieldId: string): Promise<FormField> {
    return await transaction(async (client) => {
      // Get the original field
      const fieldResult = await client.query<FormField>(
        'SELECT * FROM form_fields WHERE id = $1',
        [fieldId]
      );
      const originalField = fieldResult.rows[0];

      // Create a new field with the same properties
      const newFieldResult = await client.query<FormField>(
        `INSERT INTO form_fields (
          element_id, field_type, label, placeholder, is_required, order_index
        ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
        [
          originalField.element_id,
          originalField.field_type,
          `${originalField.label} (copy)`,
          originalField.placeholder,
          originalField.is_required,
          originalField.order_index + 1
        ]
      );
      const newField = newFieldResult.rows[0];

      // Copy all options
      const optionsResult = await client.query<FormFieldOption>(
        'SELECT * FROM form_field_options WHERE field_id = $1',
        [fieldId]
      );
      const options = optionsResult.rows;

      for (const option of options) {
        await client.query(
          `INSERT INTO form_field_options (
            field_id, option_value, order_index
          ) VALUES ($1, $2, $3)`,
          [newField.id, option.option_value, option.order_index]
        );
      }

      return newField;
    });
  }
} 