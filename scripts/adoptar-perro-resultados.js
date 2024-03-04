var MiBiblioteca = (function() {
    function Card(image, name, location, description) {
        this.image = image;
        this.name = name;
        this.location = location;
        this.description = description;
    }

    function createCard(image, name, location, description) {
        return new Card(image, name, location, description);
    }

    function addCardToContainer(container, card) {
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

    return {
        createCard: createCard,
        addCardToContainer: addCardToContainer
    };
})();

window.onload = function() {
    let container = document.querySelector('main div');

    fetch('../json/cards-sdoptar-perros-resultados.json')
        .then(response => response.json())
        .then(cards => {
            for (let cardData of cards) {
                let card = MiBiblioteca.createCard(cardData.image, cardData.name, cardData.location, cardData.description);
                MiBiblioteca.addCardToContainer(container, card);
            }
        })
        .catch(error => console.error('Error:', error));
};
