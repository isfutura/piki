import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

(async () => {
  const db = await open({
    filename: 'articles/articles.db',
    driver: sqlite3.Database,
  });
  await db.exec('INSERT INTO articles VALUES ("sample", "# sample\ncool")');
  await db.exec('INSERT INTO articles VALUES ("sample2", "# sample2\ncooler")');
})();
