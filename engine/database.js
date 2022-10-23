import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

let db;

open({
  filename: 'articles/articles.db',
  driver: sqlite3.Database,
}).then(d => {
  d.run('CREATE TABLE IF NOT EXISTS articles(name, content)');
  db = d;
});

export default {
  getArticle: async name => {
    return await db.get('SELECT content FROM articles WHERE name = ?', name);
  },
};
