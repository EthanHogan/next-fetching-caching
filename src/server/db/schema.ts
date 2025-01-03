// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { type InferInsertModel, type InferSelectModel, sql } from "drizzle-orm";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import {
  index,
  integer,
  pgTableCreator,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
const tablePrefix = "next-fetching-caching";
export const createTable = pgTableCreator((name) => `${tablePrefix}_${name}`);

export const posts = createTable(
  "post",
  {
    id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
    content: varchar("content", { length: 280 }).notNull(),
    sequence: integer("sequence").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date(),
    ),
  },
  (example) => [index(`${tablePrefix}_sequence_idx`).on(example.sequence)],
);

export const postsSelectSchema = createSelectSchema(posts);
export const postsInsertSchema = createInsertSchema(posts);
export type Post = InferSelectModel<typeof posts>;
export type NewPost = InferInsertModel<typeof posts>;
