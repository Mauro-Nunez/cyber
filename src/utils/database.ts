import { Pool, QueryResult, QueryResultRow, PoolClient, QueryConfig } from 'pg';
import pool from '../../database/config';
import { ConfirmDialogProvider } from './contexts/ConfirmDialogContext';

export class DatabaseError extends Error {
  constructor(message: string, public code?: string) {
    super(message);
    this.name = 'DatabaseError';
  }
}

export async function query<T extends QueryResultRow = any>(
  text: string,
  params?: any[]
): Promise<QueryResult<T>> {
  try {
    const start = Date.now();
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log('Executed query', { text, duration, rows: res.rowCount });
    return res;
  } catch (error) {
    console.error('Database query error:', error);
    throw new DatabaseError(
      error instanceof Error ? error.message : 'Unknown database error',
      error instanceof Error ? (error as any).code : undefined
    );
  }
}

interface ExtendedPoolClient extends PoolClient {
  lastQuery?: any[];
}

export async function getClient(): Promise<ExtendedPoolClient> {
  const client = await pool.connect() as ExtendedPoolClient;
  const query = client.query;
  const release = client.release;

  // Set a timeout of 5 seconds, after which we will log this client's last query
  const timeout = setTimeout(() => {
    console.error('A client has been checked out for more than 5 seconds!');
    console.error(`The last executed query on this client was: ${client.lastQuery}`);
  }, 5000);

  // Monkey patch the query method to keep track of the last query executed
  client.query = (...args: any[]) => {
    client.lastQuery = args;
    return query.apply(client, args);
  };

  client.release = () => {
    clearTimeout(timeout);
    client.query = query;
    client.release = release;
    return release.apply(client);
  };

  return client;
}

export async function transaction<T>(
  callback: (client: ExtendedPoolClient) => Promise<T>
): Promise<T> {
  const client = await getClient();
  try {
    await client.query('BEGIN');
    const result = await callback(client);
    await client.query('COMMIT');
    return result;
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
}

// Helper function to build WHERE clauses
export function buildWhereClause(
  conditions: Record<string, any>,
  startIndex: number = 1
): { text: string; values: any[] } {
  const clauses: string[] = [];
  const values: any[] = [];
  let paramIndex = startIndex;

  for (const [key, value] of Object.entries(conditions)) {
    if (value !== undefined && value !== null) {
      if (Array.isArray(value)) {
        clauses.push(`${key} = ANY($${paramIndex})`);
        values.push(value);
      } else {
        clauses.push(`${key} = $${paramIndex}`);
        values.push(value);
      }
      paramIndex++;
    }
  }

  return {
    text: clauses.length > 0 ? `WHERE ${clauses.join(' AND ')}` : '',
    values,
  };
}

// Helper function to build ORDER BY clauses
export function buildOrderByClause(
  orderBy: Record<string, 'ASC' | 'DESC'> = {}
): string {
  const clauses = Object.entries(orderBy).map(
    ([key, direction]) => `${key} ${direction}`
  );
  return clauses.length > 0 ? `ORDER BY ${clauses.join(', ')}` : '';
}

// Helper function to build pagination
export function buildPaginationClause(
  page: number = 1,
  limit: number = 10
): { text: string; values: number[] } {
  const offset = (page - 1) * limit;
  return {
    text: 'LIMIT $1 OFFSET $2',
    values: [limit, offset],
  };
}

// Helper function to build INSERT statements
export function buildInsertStatement(
  table: string,
  data: Record<string, any>
): { text: string; values: any[] } {
  const columns = Object.keys(data);
  const values = Object.values(data);
  const placeholders = values.map((_, index) => `$${index + 1}`);

  return {
    text: `
      INSERT INTO ${table} (${columns.join(', ')})
      VALUES (${placeholders.join(', ')})
      RETURNING *
    `,
    values,
  };
}

// Helper function to build UPDATE statements
export function buildUpdateStatement(
  table: string,
  data: Record<string, any>,
  conditions: Record<string, any>
): { text: string; values: any[] } {
  const setClause = Object.keys(data)
    .map((key, index) => `${key} = $${index + 1}`)
    .join(', ');
  const { text: whereClause, values: whereValues } = buildWhereClause(
    conditions,
    Object.keys(data).length + 1
  );

  return {
    text: `
      UPDATE ${table}
      SET ${setClause}
      ${whereClause}
      RETURNING *
    `,
    values: [...Object.values(data), ...whereValues],
  };
}

// Helper function to build DELETE statements
export function buildDeleteStatement(
  table: string,
  conditions: Record<string, any>
): { text: string; values: any[] } {
  const { text: whereClause, values } = buildWhereClause(conditions);

  return {
    text: `
      DELETE FROM ${table}
      ${whereClause}
      RETURNING *
    `,
    values,
  };
}

function App() {
  return (
    <ConfirmDialogProvider>
      {/* Your app components */}
    </ConfirmDialogProvider>
  );
} 