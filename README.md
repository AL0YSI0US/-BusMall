# LAB - 11

## bus-mall ![cs](https://img.shields.io/github/license/AL0YSI0US/bus-mall) ![open-pr](https://img.shields.io/github/issues-pr-raw/AL0YSI0US/bus-mall) ![closed-pr](https://img.shields.io/github/issues-pr-closed/AL0YSI0US/bus-mall) [![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org) 

**Hello wanderer**, <img src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" width="30px">

### Codefellows Guidance for bus-mall repository

+ Create a constructor function that creates an object associated with each product,
+ Create an algorithm that will randomly generate three unique product images from the images directory and display them side-by-side-by-side in the browser window.
+ Ensure that no two same photos are presented at the same time.
+ For each of the three images, increment its property of times it has been shown by one.
+ Attach an event listener to the section of the HTML page where the images are going to be displayed.
+ Once the users "click" a product, generate three new products for the user to pick from.
+ User should be able to cast 25 votes.

### Designer: [aloe-wish-iss]

[![banner](https://github.com/AL0YSI0US/about-me/raw/main/img/bannerNameArt.JPG?raw=true)](https://github.com/AL0YSI0US/about-me/blob/main/img/bannerNameArt.JPG?raw=true)

## C O L L A B O R A T I O N

* **In Collaboration With Audrey**/ **TA Ron**/**Shelby / Lorenzo** | pop method / while loop logic

## R E F L E C T I O N S

I appreciated playing around with the pop capabilities and liked having the .includes as an option for my code. I would like to come back and add a counter which will advise visitor of how many remaining votes they have. I plan to make it append to the empty list item in the unordered list.

The JavaScript was set up in a way that I could come back and add more theoretical Mall entities like a Taxi Mall or a Submarine Mall.

![access](https://github.com/AL0YSI0US/about-me/blob/main/img/8grid.png?raw=true)

## Accessibility Data for Website: al0ysi0us.github.io/cookie-stand

+ February 15, 2021 WCAG 2.1 AA Level Web Accessibility Audit | Verdict : **Compliant**
+ February 15, 2021 WAVE Web Accessibility Evaluation | Verdict : **Compliant**

## L I N K S  &  R E S O U R C E S

[Bus Mall Tutorial](https://codefellows.github.io/code-201-guide/curriculum/class-11/lab/) *class guide*

[CSS reset](https://meyerweb.com/eric/tools/css/reset/) *Meyers Reset*

#### [Getting a random integer between two values | Math.random Method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values "Permalink to Getting a random integer between two values")

```javascript
function getRandomInt(min, max) {
  return Math.floor(Math.random() * all; //The maximum is exclusive and the minimum is inclusive
}

```

#### [String.prototype.includes | .includes Method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)

````javascript
const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// expected output: "The word "fox" is in the sentence"
```
````

#### [Array.prototype.pop() | .pop Method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

````javascript
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]
```
````

#### [Google Fonts | Orbitron](https://fonts.google.com/specimen/Orbitron?preview.text_type=custom)

![Orbitron](img/orbitron.jpg)



<!--

![Profile views](https://gpvc.arturio.dev/AL0YSI0US)

-->

#### Creative Commons License
