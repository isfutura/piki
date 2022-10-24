// usage: gets `config.json` and converts it into a javascript object
// not meant to be edited by the wiki admin, see README.md

import { readFileSync } from 'fs';

const config = JSON.parse(readFileSync('config.json', 'utf-8'));

export default config;
