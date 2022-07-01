function introCard() {
    let card = document.createElement("div");
    card.classList.add("card", "bg-black", "bg-opacity-50", "position-absolute", "top-50", "start-50", "translate-middle");
    card.style.width = "80%";
    card.innerHTML = `
    <div class="card-body text-light">
    <h2>CONTACT US! 9898762423</h2>
    </div>
    `
    return card;
}

function cardHolder() {
    let container = document.createElement("div");
    container.style.height = "80vh"
    container.style.width = "90vw"
    container.classList.add("removable");
    return container;
}



export default function loadContact() {
    let container = cardHolder();
    container.append(introCard());
   return container;
};