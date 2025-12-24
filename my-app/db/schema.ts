import { boolean, pgTable, text, uuid } from 'drizzle-orm/pg-core'

export const skillsTable = pgTable('skills', {
  id: uuid().defaultRandom().primaryKey(),
  title: text().notNull(),
  done: boolean().default(false).notNull(),
})