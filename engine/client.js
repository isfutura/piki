// usage: sending static files for the client side of the wiki
// not meant to be edited by the wiki admin, see README.md

import config from './configurator.js';

import express from 'express';
const router = express.Router();

// sets static route for theme

router.use('/engine/theme', express.static('theme'));

// redirects to wiki homepage

router.get('/', (req, res) => {
  res.redirect(`/${config.options.prefix}/${config.options.homepage}`);
});

// sets utility routes

router.use('/engine/utils', express.static('engine/www/utils'));

// sets static route for article prefix definable in config.json

router.use(`/${config.options.prefix}/*`, express.static('engine/www/article'));

export default router;
