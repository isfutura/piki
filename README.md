# piki

Tiny wiki engine written in JavaScript.

## installation

You must have Node installed to be able to run piki.

- To start, clone the repository by running `git clone https://github.com/isfu/piki`.
- Next, `cd` into the `piki` directory and run `npm install`.
- Configure your wiki's settings in the `config.json` file.
- To start the wiki, run `npm start` or `node engine/index.js`.

## configuration

The only files that the wiki admin should modify are the files in the `theme` folder, the database files, and `config.json`.

### themes

There are two `.css` files in the `themes` folder, `style.css` and `theme.css`. Both are required for the site to run correctly. They can be modified or replaced by the wiki admin.

### database

The database file is definable in `config.json` and will generate when the app is ran for the first time. It is a sqlite3 database with on table, `articles`.

### `config.json`

The `config.json` file located in the base folder is the main way of configuring your wiki. Here are its options:

- `prefix`: Like the `/wiki/` of Wikipedia. Default: `w`.
- `database`: Sets the location of the sqlite3 database file. Default: `articles/articles.db`.
- `empty`: Sets the markdown for articles with no entry in the database. Default: `This article does not exist! Try [[piki]].`
- `homepage`: Wiki page that the app will redirect to from `/`. Default: `piki`.

## pikitext

Pikitext is a special flavor of markdown with wiki links built in. Everything is normal markdown as according to [markdown-it](https://github.com/markdown-it/markdown-it). Everything in between double brackets (e.g. `[[example]]`) will link to another page on the wiki.

_Have fun writing your wiki!_
