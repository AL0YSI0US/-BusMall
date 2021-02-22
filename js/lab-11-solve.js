'use strict';
// Global Variables these puppies live on the outskirts
let totalVotes = 0;
// By default, the user should be presented with 25 rounds of voting before ending the session.
let votesAuthorized = 25;
let allProducts = [];

let firstImage = document.querySelector('section img:first-child');
let secondImage = document.querySelector('section img:nth-child(2)');
let thirdImage = document.querySelector('section img:nth-child(3)');
// the element i need to make //where t will all go
let myContainer = document.querySelector('section');
let myButton = document.querySelector('div');

function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.src = `img/${name}.${fileExtension}`;
  this.views = 0;
  this.votes = 0;
  allProducts.push(this);
}


new Product('bag');
new Product('banana');
new Product('bathroom');
new Product('boots');
new Product('breakfast');
new Product('bubblegum');
new Product('chair');
new Product('cthulhu');
new Product('dog-duck');
new Product('dragon');
new Product('pen');
new Product('pet-sweep');
new Product('scissors');
new Product('shark');
new Product('sweep', 'png');
new Product('tauntaun');
new Product('unicorn');
new Product('usb', 'gif');
new Product('water-can');
new Product('wine-glass');

function getRandomIndex() {
  return Math.floor(Math.random() * allProducts.length);
}

function renderBusProduct() {
  let productIndexArray = [];
  while (productIndexArray.length < 3) {
    let randomNumber = getRandomIndex();
    while (!productIndexArray.includes(randomNumber)) {
      productIndexArray.push(randomNumber);
    }
  }

  let firstProductIndex = productIndexArray.pop();
  let secondProductIndex = productIndexArray.pop();
  let thirdProductIndex = productIndexArray.pop();

  firstImage.src = allProducts[firstProductIndex].src;
  firstImage.title = allProducts[firstProductIndex].name;
  allProducts[firstProductIndex].views++;

  secondImage.src = allProducts[secondProductIndex].src;
  secondImage.title = allProducts[secondProductIndex].name;
  allProducts[secondProductIndex].views++;

  thirdImage.src = allProducts[thirdProductIndex].src;
  thirdImage.title = allProducts[thirdProductIndex].name;
  allProducts[thirdProductIndex].views++;
}

function renderResults() {
  let myList = document.querySelector('ul');
  for (let i = 0; i < allProducts.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${allProducts[i].name} had ${allProducts[i].votes} votes and was seen ${allProducts[i].views} times`;
    myList.appendChild(li);
  }
}

function handleClick(event) {
  totalVotes++;
  let productClicked = event.target.title;

  for (let i = 0; i < allProducts.length; i++) {
    if (productClicked === allProducts[i].name) {
      allProducts[i].votes++;
    }
  }
  renderBusProduct();
  if (totalVotes === votesAuthorized) {
    myContainer.removeEventListener('click', handleClick);
  }
}

function handleButtonClick(event) { //eslint-disable-line
  if (totalVotes === votesAuthorized) {
    renderResults();
  }
}

renderBusProduct();

myContainer.addEventListener('click', handleClick);
myButton.addEventListener('click', handleButtonClick);
