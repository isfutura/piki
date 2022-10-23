import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

const result = md.render(
  '# Name of page\n\nwooo\n[website](https://finn.limo)\n\n[[wooo]]'
);

console.log(result);
