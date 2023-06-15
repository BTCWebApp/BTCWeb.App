import './style.css';
import sites from './sites.json';

const tagsList = new Set<string>();
let tagsOptions = ``;
let cards = ``;
sites.forEach((site) => {
  site.tags.forEach((tag: string) => {
    tagsList.add(tag.toUpperCase());
  });
  cards += /*html*/ `
    <article data-tags="${site.tags
      .join()
      .toLowerCase()}" data-text="${site.name.toLowerCase()} ${
    site.description
  }">
      <img class="logo" src="${site.icon}" alt="Logo for ${site.name}">
      <h2><a href="${site.url}" target="_blank" rel="noopener noreferrer">${
    site.name
  }</a></h2>
      <p>${site.description}</p>
    </article>`;
});
tagsList.forEach((tag: string) => {
  tagsOptions += /*html*/ `      <option value="${tag}">${tag}</option>\n`;
});

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
  <header>
    <h1><a href="https://github.com/BTCWebApp/BTCWeb.App" target="_blank" rel="noopener noreferrer">BTC WEB APP</a></h1>
    <input type="search" name="search" id="search" placeholder="search..." list="tags" />
    <datalist name="tags" id="tags" multiple=false>
${tagsOptions}
    </datalist>
  </header>
  <main>
${cards}
<a href = "https://github.com/BTCWebApp/BTCWeb.App">Help us improve this open source project</a>
  </main>
  
  `;

const search = () => {
  const searchText = (
    document.querySelector<HTMLInputElement>('#search')!.value || ''
  ).toLowerCase();
  document.querySelectorAll('article').forEach((pwa) => {
    const notFound = !pwa.dataset.text?.includes(searchText);
    pwa.classList.toggle('hidden', notFound);
  });
};
document.querySelector<HTMLInputElement>('#search')!.oninput = search;
