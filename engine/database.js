// usage: retrieving and modifying wiki articles in the database
// not meant to be edited by the wiki admin, see README.md

import config from './configurator.js';

import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// opens the table or creates a new one if it doesn't exist

let db;

open({
  filename: config.options.database,
  driver: sqlite3.Database,
}).then(d => {
  d.run('CREATE TABLE IF NOT EXISTS articles(name, content, unique(name))');
  db = d;
});

export default {
  // retrieves an article from the database

  getArticle: async name => {
    const res = await db.get(
      'SELECT content FROM articles WHERE name = ?',
      name
    );

    if (res == undefined) return config.options.empty;
    else return res.content;
  },

  // creates or modifies a wiki article

  updateArticle: async (name, content) => {
    db.run('INSERT OR REPLACE INTO articles VALUES (?, ?)', [name, content]);
  },
};
