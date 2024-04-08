import { PostgresJsDatabase, drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const client = postgres("" as string);
export const db: PostgresJsDatabase = drizzle(client);