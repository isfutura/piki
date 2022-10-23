// elements

let title = document.querySelector('#title');
let description = document.querySelector('#description');
let quicklinks = document.querySelector('#quicklinks');

// fetch and display homepage data from config.json

(async () => {
  let res = await fetch('/engine/homepage');

  if (res.ok) {
    let data = await res.json();

    console.log(data);

    document.title = data.homepage.title;
    title.textContent = data.homepage.title;

    description.textContent = data.homepage.content;

    data.homepage.quicklinks.forEach(i => {
      let li = document.createElement('li');
      let a = document.createElement('a');

      a.href = `/${data.prefix}/${i}`;
      a.textContent = i;

      li.appendChild(a);

      quicklinks.appendChild(li);
    });
  } else {
    title.textContent = 'something has gone terribly wrong';
  }
})();
