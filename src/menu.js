

import menuArray from './recipes.json';

function menuCard(menuArray) {
    let cardRow = document.createElement("div");
    cardRow.classList.add("row", "row-cols-1", "row-cols-md-3", "mt-5", "gap-3", "gap-md-0", "position-absolute", "mx-auto");
    menuArray.forEach(obj => {
      const card = renderCard(obj);
      cardRow.appendChild(card);
    })
  
 return cardRow;
}

function renderCard(obj) {
  let card = document.createElement("div");
  card.classList.add("col");
  card.innerHTML = `
  <div class="card h-100 bg-dark bg-opacity-50 text-light" style="max-width:350px">
  <img src="${obj.link}" class="card-img-top" alt="${obj.name}">
  <div class="card-body">
    <h5 class="card-title">${obj.name}</h5>
    <p class="card-text">${obj.description}</p>
  </div>
</div>
  `
  return card;
}

function initializeContainer() {
    let container = document.createElement("div");
    container.classList.add("container", "removable");
    return container;
}



export default function loadMenu() {
  console.log(typeof(menuArray));
    let container = initializeContainer();
    container.append(menuCard(menuArray));
    return container;
};