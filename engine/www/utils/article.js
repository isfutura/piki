// elements

let title = document.querySelector('#title');
let articleBody = document.querySelector('#articleBody');

const articleTitle = window.location.href.match(/\/(\w+)\/[^\/]*$/)[1];

title.textContent = articleTitle;

(async () => {
  let res = await fetch('/engine/get', {
    method: 'POST',
    body: JSON.stringify({ name: articleTitle }),
    headers: {
      'content-type': 'application/json',
    },
  });

  if (res.ok) {
    let data = await res.json();

    console.log(data.content);

    articleBody.textContent = data.content;
  }
})();
