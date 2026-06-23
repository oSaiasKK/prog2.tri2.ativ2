import { Database } from "bun:sqlite";

const db = new Database("database.sqlite");

db.run(`
  CREATE TABLE IF NOT EXISTS items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL
  )
`);

const querySelectItems = db.query("SELECT * FROM items");
const querySelectItemById = db.query("SELECT * FROM items WHERE id = ?");
const queryInsertItem = db.query("INSERT INTO items (title) VALUES (?)");
const queryDeleteItem = db.query("DELETE FROM items WHERE id = ?");
const queryUpdateItem = db.query("UPDATE items SET title = ? WHERE id = ?");

export type Item = {
  id: number;
  title: string;
};

export class TodoList {

  addItem(title: string) {
    const result = queryInsertItem.run(title);
    return querySelectItemById.get(result.lastInsertRowid) as Item;
  }

  getItems(): Item[] {
    return querySelectItems.all() as Item[];
  }

  deleteItem(id: number) {
    const result = queryDeleteItem.run(id);
    return result.changes > 0;
  }

  updateItem(id: number, title: string) {
    const result = queryUpdateItem.run(title, id);
    return result.changes > 0;
  }
}