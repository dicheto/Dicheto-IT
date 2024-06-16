    const items = [
  { name: "Wikipedia", link: "https://www.wikipedia.org/" },
  { name: "YouTube", link: "https://www.youtube.com/" },
  { name: "Google", link: "https://www.google.co.uk/" },
];

const input = document.querySelector('input');
const list = document.querySelector('ul.results');

function handleInput() {
  const searchTerm = input.value.toLowerCase();

  const filteredItems = items.filter(item => item.name.toLowerCase().includes(searchTerm));

  list.innerHTML = '';
  filteredItems.forEach(item => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');

    link.textContent = item.name;
    link.href = item.link;

    listItem.appendChild(link);
    list.appendChild(listItem);
  });
}

input.addEventListener('input', handleInput);
    $("#header").load("/components/header.html");