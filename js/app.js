'use strict';

// Global Variables
let totalClicks = 0;
// By default, the user should be presented with 25 rounds of voting before ending the session.
let clicksAllowed = 25;
// for storing things
let allProducts = [];
// the element i need to make //where t will all go
let myContainer = document.querySelector('section');

// grab the pics and put em in a row all nice like
let imageOne = document.querySelector('section img:first-child');
let imageTwo = document.querySelector('section img:nth-child(2)');
let imageThree = document.querySelector('section img:nth-child(3)');
let myButton = document.querySelector('div');

// Constructor Function what's your junction.
function Product(name, fileExtension = 'jpg') {
  this.name = name;                            // it will be assigned as image one title (change product in lab) what does that even mean?
  this.src = `img/${name}.${fileExtension}`;
  this.views = 0;
  this.votes = 0;
  allProducts.push(this);
}

// create new instances of the Bus-Mall products
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

function renderProduct(){
  let productIndexArray = [];
  while (productIndexArray.length < 3) {
    let randomNumber = getRandomIndex();
    while (!productIndexArray.includes(randomNumber)) {
      productIndexArray.push(randomNumber);
    }
  }

  let firstProductIndex = productIndexArray.pop();
  let secondProductIndex = productIndexArray.pop(lock-and-drop-it);                      
  let thirdProductIndex = productIndexArray.pop();

  // pop() is an inbuilt function in Python that removes and returns last value from the list or the given index value. Parameter : index (optional) - The value at index is popped out and removed. If the index is not given, then the last element is popped out and removed.

  // https://www.geeksforgeeks.org/python-list-pop/#:~:text=pop()%20is%20an%20inbuilt,or%20the%20given%20index%20value.&text=Parameter%20%3A,is%20popped%20out%20and%20removed.

  imageOne.src = allProducts[firstProductIndex].src; 
  imageOne.title = allProducts[firstProductIndex].name;
  allProducts[firstProductIndex].views++;

  imageTwo.src = allProducts[secondProductIndex].src;
  imageTwo.title = allProducts[secondProductIndex].name;
  allProducts[secondProductIndex].views++;

  imageThree.src = allProducts[thirdProductIndex].src;
  imageThree.title = allProducts[thirdProductIndex].name;
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

function handleClick(event){
  totalClicks++;
  let chosenProduct = event.target.title;

  for (let i = 0; i < allProducts.length; i++){
    if(chosenProduct === allProducts[i].name) {
      allProducts[i].votes++;
  }
}
console.log(sleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeep!)
// still need to handle the event stuff// dont forget button and rendering before assuming its broken >.< 

// Add a button with the text View Results, which when clicked displays the list of all the products followed by the votes received, and number of times seen for each. Example: banana had 3 votes, and was seen 5 times.

// NOTE: Displayed product names should match the file name for the product. Example: the product represented with dog-duck.jpg should be displayed to the user as exactly “dog-duck” when the results are shown.


// As a user, I would like to view a report of results after all rounds of voting have concluded so that I can evaluate which products were the most popular.

// - Create a property attached to the constructor function itself that keeps track of all the products that are currently being considered.
// - After voting rounds have been completed, remove the event listeners on the product.
// - Add a button with the text `View Results`, which when clicked displays the list of all the products followed by the votes received, and number of times seen for each. Example: `banana had 3 votes, and was seen 5 times.`

  // - > NOTE: Displayed product names should match the file name for the product. Example: the product represented with `dog-duck.jpg` should be displayed to the user as exactly "dog-duck" when the results are shown.>




renderProduct();
// Attach an event listener to the section of the HTML page where the images are going to be displayed.
myContainer.addEventListener('click', handleClick);





// -----------------CRUD BELOW IS DEMO CODE FROM GOATS---------------------------
// SOME of it makes some sense some of it also makes none........................ ASK A CLASSMATE OR TA ABOUT LINE141

// function handleClick(event){
//   if (event.target === section){
//     alert('Please click an image and FOLLOW INSTRUCTIONS');
//     break;
//   }
//   totalClicks++;
//   let goatClicked = event.target.title;

//   for(let i = 0; i< allGoats.length; i++)
//     if(goatClicked === allGoats[i].name) {
//       allGoats[i].clicks++; 
//     }
//   }  

//   renderGoats();
//   if (totalClicks === clicksAllowed) {
//     // REMOVE EVENT LISTENER
//     myContainer.removeEventListener('click', handleClick);
//     renderResults();
//   }

// }

// function handleButtonClick(event){
//   console.log('I was clicked');
//   if(totalClicks === clicksAllowed){
//     renderResults();
//   }
// }

// renderGoats();


// myContainer.addEventListener('click', handleClick);
// myButton.addEventListener('click', handleButtonClick); 