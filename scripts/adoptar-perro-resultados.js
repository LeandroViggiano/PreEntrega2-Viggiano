function Card(image, name, location, description) {
    this.image = image;
    this.name = name;
    this.location = location;
    this.description = description;
}

let cards = [
    new Card("../assets/toby.jpeg", "Toby", "Mendoza-Capital", "Toby es un perro al que le gusta jugar, jugar y jugar y escribir mucho texto para llenar el recuadro porque sí"),
    // ... puedes agregar más tarjetas aquí ...
];

let newCard = new Card("../assets/toby.jpeg", "Nombre del nuevo perro", "Nueva ubicación", "Descripción del nuevo perro");
cards.push(newCard);

window.onload = function() {
    let container = document.querySelector('main div');

    for (let card of cards) {
        let cardElement = document.createElement('div');
        cardElement.className = 'card';

        let imageElement = document.createElement('img');
        imageElement.src = card.image;
        imageElement.alt = 'Perro en adopción';
        cardElement.appendChild(imageElement);

        let cardContentElement = document.createElement('div');
        cardContentElement.className = 'card-content';
        cardElement.appendChild(cardContentElement);

        let nameElement = document.createElement('h3');
        nameElement.textContent = card.name;
        cardContentElement.appendChild(nameElement);

        let locationElement = document.createElement('p');
        locationElement.textContent = 'Ubicación: ' + card.location;
        cardContentElement.appendChild(locationElement);

        let descriptionElement = document.createElement('p');
        descriptionElement.textContent = card.description;
        cardContentElement.appendChild(descriptionElement);

        container.appendChild(cardElement);
    }
};