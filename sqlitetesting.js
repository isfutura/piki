import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

(async () => {
  const db = await open({
    filename: 'articles_test.db',
    driver: sqlite3.Database,
  });
  await db.exec(
    'INSERT INTO articles VALUES ("sample_four", "heyyyy this is cool")'
  );
})();
