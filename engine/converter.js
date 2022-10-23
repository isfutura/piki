import MarkdownIt from 'markdown-it';

import config from './configurator.js';

const md = new MarkdownIt();

export default text => {
  // converts wiki links to markdown links
  console.log(text);
  let linked = text.replace(/\[\[(.+?)\]\]/g, i => {
    const e = i.replace('[[', '').replace(']]', '');

    return `[${e.replace('_', ' ')}](/${config.options.prefix}/${e.replace(
      ' ',
      '_'
    )})`;
  });

  // returns html version

  return md.render(linked);
};
