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
    <h1>BTC Web Apps</h1>
    <input type="search" name="search" id="search" placeholder="search..." list="tags" />
    <!-- <input type="text" list="tags" placeholder="tags" id="tag"/> -->
    <datalist name="tags" id="tags" multiple=false>
${tagsOptions}
    </datalist>
  </header>
  <main>
${cards}
  </main>
  `;

const search = () => {
  const searchText = (
    document.querySelector<HTMLInputElement>('#search')!.value || ''
  ).toLowerCase();
  // const tag = document.querySelector<HTMLInputElement>('#tag')!.value;
  console.log('searchText :>> ', searchText);
  // console.log('tag :>> ', tag);
  document.querySelectorAll('article').forEach((pwa) => {
    // console.log(
    //   'pwa.dataset.tags?.includes(tag) :>> ',
    //   pwa.dataset.tags?.includes(tag)
    // );
    console.log(
      'pwa.dataset.text?.includes(searchText) :>> ',
      pwa.dataset.text?.includes(searchText)
    );
    const notFound =
      !(
        // pwa.dataset.tags?.includes(tag) ||
        pwa.dataset.text?.includes(searchText)
      );
    console.log('notFound :>> ', notFound);
    pwa.classList.toggle('hidden', notFound);
  });
};
document.querySelector<HTMLInputElement>('#search')!.oninput = search;
// document.querySelector<HTMLInputElement>('#tag')!.oninput = search;
