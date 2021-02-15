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
let votingArena = document.querySelector('section');
let viewResultsButton = document.querySelector('div');

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

// Constructor Function what's your junction.
function renderProduct() {

  let productIndexArray = [];
  while (productIndexArray.length < 3) {
    let randomNumber = getRandomIndex();
    while (!productIndexArray.includes(randomNumber)){
      productIndexArray.push(randomNumber);
    }
  }

// [.includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) *Developer.mozilla*

  let firstProductIndex = productIndexArray.pop();
  let secondProductIndex = productIndexArray.pop();
  let thirdProductIndex = productIndexArray.pop();

  // pop() is an inbuilt function in Python that removes and returns last value from the list or the given index value. Parameter : index (optional) - The value at index is popped out and removed. If the index is not given, then the last element is popped out and removed.

  // https://www.geeksforgeeks.org/python-list-pop/#:~:text=pop()%20is%20an%20inbuilt,or%20the%20given%20index%20value.&text=Parameter%20%3A,is%20popped%20out%20and%20removed

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
  let andTheWinnersAre = document.querySelector('ul');
  for (let i = 0; i < allProducts.length; i++){
    let li = document.createElement('li');
    li.textContent = `${allProducts[i].name} had ${allProducts[i].votes} votes and was seen ${allProducts[i].views} times.`;
    andTheWinnersAre.appendChild(li);
  }
}

function handleClick(event) {
  if (event.target === votingArena) {
    alert('Please click on an image.');
  }
  totalVotes++;
  let prodctClicked = event.target.title;

  for (let i = 0; i < allProducts.length; i++) {
    if (prodctClicked === allProducts[i].name) {
      allProducts[i].votes++;
    }
  }

  renderProduct();
  if (totalVotes === votesAuthorized) {
    votingArena.removeEventListener('click', handleClick);
  }
}

function handleButton(event) {
  if (totalVotes === votesAuthorized) {
    renderResults();
  }
}

renderProduct();
votingArena.addEventListener('click', handleClick);
viewResultsButton.addEventListener('click' ,handleButton);

// const sentence = 'The quick brown fox jumps over the lazy dog.';
// const word = 'fox';

// console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// expected output: "The word "fox" is in the sentence"
