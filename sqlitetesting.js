import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

(async () => {
  const db = await open({
    filename: 'testdb.db',
    driver: sqlite3.Database,
  });

  const res = await db.get('SELECT col FROM tbl WHERE col = ?', ['test']);
  console.log(res);
})();
