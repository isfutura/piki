import config from './configurator.js';

import { Router } from 'express';

const router = Router();

// sends homepage data

router.get('/engine/homepage', (req, res) => {
  const combined = {
    homepage: config.homepage,
    prefix: config.options.prefix,
  };
  res.json(combined);
});

export default router;
