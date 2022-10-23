import config from './configurator.js';

import express from 'express';

const router = express.Router();

// sets static routes for homepage and theme

router.use('/engine/theme', express.static('theme'));
router.use('/', express.static('engine/www/home'));

// sets util routes

router.use('/engine/utils', express.static('engine/www/utils'));

// sets static route for article prefix definable in config.json

router.use(`/${config.options.prefix}/*`, express.static('engine/www/article'));

export default router;
