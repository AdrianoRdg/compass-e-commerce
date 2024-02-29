"use strict";
const img01 = "src/assets/images/bestsellers/woman-in-pastel-colors.svg";
const img02 = "src/assets/images/bestsellers/woman-in-brown.svg";
const img03 = "src/assets/images/bestsellers/woman-in-pink.svg";
const img04 = "src/assets/images/bestsellers/man-in-white.svg";
const img05 = "src/assets/images/bestsellers/man-in-grey.svg";
const img06 = "src/assets/images/bestsellers/woman-in-yellow.svg";
const img07 = "src/assets/images/bestsellers/man-in-a-sweatshirt.svg";
const img08 = "src/assets/images/bestsellers/man-in-a-black-tshirt.svg";
const bestsellersContent = [
    {
        image: img01,
    },
    {
        image: img02,
    },
    {
        image: img03,
    },
    {
        image: img04,
    },
    {
        image: img05,
    },
    {
        image: img01,
    },
    {
        image: img06,
    },
    {
        image: img07,
    },
    {
        image: img08,
    },
    {
        image: img03,
    },
];
class Card {
    constructor(imageSrc, titleContent, linkText, price1, price2) {
        this.card = document.createElement("div");
        this.card.classList.add("bestsellers-card");
        this.image = document.createElement("img");
        this.image.src = imageSrc;
        this.cardContent = document.createElement("div");
        this.cardContent.classList.add("card-content");
        const title = document.createElement("h5");
        title.textContent = titleContent;
        const link = document.createElement("a");
        link.textContent = linkText;
        const pricesContent = document.createElement("div");
        pricesContent.classList.add("prices");
        const highPrice = document.createElement("h5");
        highPrice.textContent = price1;
        const lowPrice = document.createElement("h5");
        lowPrice.textContent = price2;
        pricesContent.appendChild(highPrice);
        pricesContent.appendChild(lowPrice);
        this.cardContent.appendChild(title);
        this.cardContent.appendChild(link);
        this.cardContent.appendChild(pricesContent);
        this.card.appendChild(this.image);
        this.card.appendChild(this.cardContent);
    }
    getElement() {
        return this.card;
    }
}
const bestsellersContainer = document.getElementsByClassName("bestsellers-container");
bestsellersContent.forEach((content) => {
    const bestsellersCard = new Card(content.image, "Graphic Design", "English Department", "$16.48", "$6.48");
    bestsellersContainer[0].appendChild(bestsellersCard.getElement());
});
