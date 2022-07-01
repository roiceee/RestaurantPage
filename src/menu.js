import porkAdobo from './images/pork-adobo.jpg';
import chickenAdobo from './images/chicken-adobo.jfif';
import fishAdobo from './images/fish-adobo.jfif';
function menuCard() {
    let cardRow = document.createElement("div");
    cardRow.classList.add("row", "row-cols-1", "row-cols-md-3", "mt-5", "gap-3", "gap-md-0", "position-absolute", "mx-auto");
    cardRow.innerHTML = `
    <div class="col">
    <div class="card h-100 bg-dark bg-opacity-50 text-light" style="max-width:350px">
      <img src="${porkAdobo}" class="card-img-top" alt="Pork Adobo">
      <div class="card-body">
        <h5 class="card-title">Pork Adobo</h5>
        <p class="card-text">Best Pork Adobo in town!</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 bg-dark bg-opacity-50 text-light" style="max-width:350px">
      <img src="${chickenAdobo}" class="card-img-top" alt="Chicken Adobo">
      <div class="card-body">
        <h5 class="card-title">Chicken Adobo</h5>
        <p class="card-text">Best Chicken Adobo in Town!</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 bg-dark bg-opacity-50 text-light" style="max-width:350px">
      <img src="${fishAdobo}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Fish Adobo</h5>
        <p class="card-text">Best Fish Adobo in Town!</p>
      </div>
    </div>
  </div>
    `
 return cardRow;
}

function initializeContainer() {
    let container = document.createElement("div");
    container.classList.add("container", "removable");
    return container;
}


export default function loadMenu() {
    let container = initializeContainer();
    container.append(menuCard());
    return container;
};