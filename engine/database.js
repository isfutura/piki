import config from './configurator.js';

import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

let db;

open({
  filename: config.options.database,
  driver: sqlite3.Database,
}).then(d => {
  d.run('CREATE TABLE IF NOT EXISTS articles(name, content)');
  db = d;
});

export default {
  getArticle: async name => {
    const res = await db.get(
      'SELECT content FROM articles WHERE name = ?',
      name
    );

    if (res == undefined) return config.options.empty;
    else return res.content;
  },
  updateArticle: async (name, content) => {
    db.run('INSERT OR REPLACE INTO articles VALUES (?, ?)', [name, content]);
  },
};
