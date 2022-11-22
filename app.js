'use strict'

let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
let image3 = document.querySelector('section img:nth-child(3)');

let resultsButton = document.getElementById('results');

let index1 = 0;
let index2 = 0;
let index3 = 0
let clicks = 0;


function Product(name, src) {
    this.name = name;
    this.src = src;
    this.clicks = 0;
    this.views = 0;
}

let product1 = new Product('R2D2 Wheelie', './images/bag.jpg');
let product2 = new Product('Banana Slicer', './images/banana.jpg');
let product3 = new Product('Bathroom Tablet Stand', './images/bathroom.jpg');
let product4 = new Product('Open-Toed Rainboots', './images/boots.jpg');
let product5 = new Product('Utensil Pen', './images/pen.jpg');
let product6 = new Product('Breakfast Station', './images/breakfast.jpg');
let product7 = new Product('Meatball Bubblegum', './images/bubblegum.jpg');
let product8 = new Product('Puffy Chair', './images/chair.jpg');
let product9 = new Product('Cthulhu Toy', './images/cthulhu.jpg');
let product10 = new Product('Duck Mouth', './images/dog-duck.jpg');
let product11 = new Product('Dragon Meat', './images/dragon.jpg');
let product12 = new Product('Pet Sweep', './images/pet-sweep.jpg');
let product13 = new Product('Pizza Scissors', './images/scissors.jpg');
let product14 = new Product('Shark Sleeping Bag', './images/shark.jpg');
let product15 = new Product('Tauntaun', './images/tauntaun.jpg');
let product16 = new Product('Unicorn Meat', './images/unicorn.jpg');
let product17 = new Product('Self-Watering Can', './images/water-can.jpg');
let product18 = new Product('Egg Wine Glass', './images/wine-glass.jpg');
let product19 = new Product('Sweep Onesie', './images/sweep.png');

let products = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12, product13,
    product14, product15, product16, product17, product18, product19];

function getRandomIndex() {
    return Math.floor(Math.random() * products.length)
}

function renderProducts() {
    index1 = getRandomIndex();
    index2 = getRandomIndex();
    index3 = getRandomIndex();

    while (index1 === index2 === index3) {
        index2 = getRandomIndex();
        index3 = getRandomIndex();
    }

    let firstProduct = products[index1];
    let secondProduct = products[index2];
    let thirdProduct = products[index3];

    image1.src = firstProduct.src;
    image1.alt = firstProduct.name;
    image1.title = firstProduct.name;
    image1.id = index1;
    firstProduct.views++;

    image2.src = secondProduct.src;
    image2.alt = secondProduct.name;
    image2.title = secondProduct.name;
    image2.id = index2;
    secondProduct.views++;


    image3.src = thirdProduct.src;
    image3.alt = thirdProduct.name;
    image3.title = thirdProduct.name;
    image3.id = index3;
    thirdProduct.views++;

}

function handleProductClick(event) {
    clicks++;

    if (products[index1].name === event.target.alt) {
        products[index1].clicks++
    }
    if (products[index2].name === event.target.alt) {
        products[index2].clicks++
    }
    if (products[index3].name === event.target.alt) {
        products[index3].clicks++
    }

    products[event.target.id].clicks++;

    if (clicks > 25) {
        image1.removeEventListener('click', handleProductClick);
        image2.removeEventListener('click', handleProductClick);
        image3.removeEventListener('click', handleProductClick);
    }
    console.log(products);
    renderProducts();
}

function viewResults(event) {
    let productUl = document.querySelector('ul');
    for (let i = 0; i < products.length; i++) {
        let productLi = document.createElement('li');
        productLi.innerText = `${products[i].name} had ${products[i].clicks} votes, and was seen ${products[i].views} times.`;
        productUl.appendChild(productLi);
    }
    resultsButton.removeEventListener('clicks', viewResults);

}

image1.addEventListener('click', handleProductClick);
image2.addEventListener('click', handleProductClick);
image3.addEventListener('click', handleProductClick);
resultsButton.addEventListener('click', viewResults);
renderProducts();