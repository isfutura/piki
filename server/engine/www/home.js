// elements

let pageTitle = document.title;
let title = document.querySelector('#title');
let description = document.querySelector('#description');
let quicklinks = document.querySelector('#quicklinks');

(async () => {
  let res = await fetch('/engine/homepage');

  if (res.ok) {
    let data = await res.json();

    console.log(data);

    pageTitle = data.title;
    title.textContent = data.title;

    description.textContent = data.content;
  } else {
    title.textContent = 'something has gone terribly wrong';
  }
})();
