// usage: starting the app
// not meant to be edited by the wiki admin, see README.md

import app from './app.js';

app.listen(80, () => {
  console.log(`listening on http://localhost:80`);
});
