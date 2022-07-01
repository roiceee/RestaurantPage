import './css/styles.css';
import './bootstrap.min.js';
import './css/override.css';
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

function buildNavBar() {
 let container = document.createElement('div');
 container.classList.add("container-fluid", "text-light", "gx-0", "sticky-top");
 container.innerHTML = `
 <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
  <div class="container px-3 px-md-0">
    <a class="navbar-brand" href="#">DamnResto</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      <div class="hover"> 
        <li class="nav-item">
          <p class="nav-link active my-0" aria-current="page" href="#" id="home">Home</p>
        </li>
        </div>
        <div class="hover"> 
        <li class="nav-item">
          <p class="nav-link active my-0" aria-current="page" href="#" id="menu">Menu</p>
        </li>
        </div>
        <div class="hover"> 
        <li class="nav-item">
          <p class="nav-link active my-0" aria-current="page" href="#" id="contact">Contact</p>
        </li>
        </div>
      </ul>
    </div>
  </div>
</nav>
 `
 return container;
}

const mainDivController = (() => {
    let container = document.getElementById("content");
    container.classList.add("position-relative");
    
    return {
        container
    }
})();

function appendToContainer() {
    return new Promise ((resolve, reject) => {
        mainDivController.container.append(buildNavBar());
        mainDivController.container.append(loadHome());
        resolve();
    })
    }

function clearPage() {
    const element = document.querySelector(".removable");
    element.remove();
}


async function events() {
   await appendToContainer();
    const homeController = document.getElementById("home");
    const menuController = document.getElementById("menu");
    const contactController = document.getElementById("contact");
   homeController.addEventListener('click', () => {clearPage(); mainDivController.container.append(loadHome())})
   menuController.addEventListener('click', () => {clearPage(); mainDivController.container.append(loadMenu())})
   contactController.addEventListener('click', () => {clearPage(); mainDivController.container.append(loadContact())})
}


events();