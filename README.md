# LAB - 11 [![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)

## bus-mall ![cs](https://img.shields.io/github/license/AL0YSI0US/bus-mall) ![open-pr](https://img.shields.io/github/issues-pr-raw/AL0YSI0US/bus-mall) ![closed-pr](https://img.shields.io/github/issues-pr-closed/AL0YSI0US/bus-mall)

**Hello wanderer**, <img src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" width="30px">

And welcome to My Codefellows Bus-Mall Lab!

## Codefellows Guidance for bus-mall repository

1. Create a constructor function that creates an object associated with each product,
2. Create an algorithm that will randomly generate three unique product images from the images directory and display them side-by-side-by-side in the browser window.
3. Ensure that no two same photos are presented at the same time.
4. For each of the three images, increment its property of times it has been shown by one.
5. Attach an event listener to the section of the HTML page where the images are going to be displayed.
6. Once the users "click" a product, generate three new products for the user to pick from.
7. User should be able to cast 25 votes. [**Lab 11 Requirements**]

---

8. Update your algorithm to randomly generate three unique product images from the images directory.
9. Update your algorithm so that new products are generated, confirm that these products are not duplicates from the immediate previous set.
10. Using ChartJS (imported from CDN), display the vote totals and the number of times a product was viewed in a bar chart format. (hint: don’t forget about the `<canvas>` tags)
11. Place the bar chart in the section located beneath your three product images.
12. The bar charts should only appear *after* all voting data has been collected. [**Lab 12 Requirements**]

### ✨ Stretch Goals

*"Try some additional charting types based off of some of the other data you collected and display them in addition to the required bar chart"*

### 🎨 Designer: [aloe-wish-iss]

[![banner](https://github.com/AL0YSI0US/about-me/raw/main/img/bannerNameArt.JPG?raw=true)](https://github.com/AL0YSI0US/about-me/blob/main/img/bannerNameArt.JPG?raw=true)

## C O L L A B O R A T I O N

**In Collaboration With Audrey**/ **TA Ron**/**Shelby / Lorenzo** | pop method / while loop logic

## R E F L E C T I O N S

This lab was a rollecoaster for me! It helped me develop a new strategy for lerning:

**Semper gumby** = How can I remain **Always flexible**?

The main thing I am realizing is that developing tact in my code is very important. Tact in relationship to what is the standard for design and functionality and the intersections that will allowme to be creative.

The biggest hurdle I have had is with my naming conventions. Bus mall really drove this home with DOM rendering and labeling sections or containers etc. Mess those up and you may just have those fuddles follow you into the css. I have had moments where I though data was not populating only to find out that I never set any styling parameters to show my said data.

My ongoing strategy is to ease up on how I want to name things because sometimes what i want to call something poorly reflects what that something does.

Another sttrategy = ***This stuffs all hard = ask questions but even better dont be afraid to say you dont know what questions to ask. Just reach for some support.***

### L I N K S  &  R E S O U R C E S

[Bus Mall Tutorial](https://codefellows.github.io/code-201-guide/curriculum/class-11/lab/) *class guide*

[CSS reset](https://meyerweb.com/eric/tools/css/reset/) *Meyers Reset*

[Google Fonts | Orbitron](https://fonts.google.com/specimen/Orbitron?preview.text_type=custom)

#### Head over to jsdelivr for the charts script tag! 👇🏾[select 👉🏾 github](https://www.jsdelivr.com/?docs=gh)

````javascript
 <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js"></script>
```
````

#### [Getting a random integer between two values | Math.random Method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values "Permalink to Getting a random integer between two values")

```javascript
               > This example returns a random integer between 
                 the specified values. The value is no lower than 
                 min (or the next integer greater than min if min 
                 is not an integer), and is less than (but not equal to) max.

function getRandomInt(min, max) {
  return Math.floor(Math.random() * all; //The maximum is exclusive and the minimum is inclusive
}

```

#### [String.prototype.includes | .includes Method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)

````javascript
                > his method lets you determine whether 
                  or not a string includes another string.

                       $ this method is case sensitive $

const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// expected output: "The word "fox" is in the sentence"
````

#### [Array.prototype.pop() | .pop Method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

````javascript
               > The pop method removes the last element from an array
                 and returns that value to the caller.

const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]
````

#### [Array.prototype.shift() | .shift Method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)

````javascript
                > The following code displays the myFish array before 
                  and after removing its first element. 
                  It also displays the removed element:

var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

console.log('myFish before:', JSON.stringify(myFish));
// myFish before: ['angel', 'clown', 'mandarin', 'surgeon']

var shifted = myFish.shift();

console.log('myFish after:', myFish);
// myFish after: ['clown', 'mandarin', 'surgeon']

console.log('Removed this element:', shifted);
// Removed this element: angel
```

````

<<<<<<< HEAD
![access](https://github.com/AL0YSI0US/about-me/blob/main/img/8grid.png?raw=true)

## Accessibility Data for Website: al0ysi0us.github.io/cookie-stand

+ February 15, 2021 WCAG 2.1 AA Level Web Accessibility Audit | Verdict : **Compliant**
+ February 15, 2021 WAVE Web Accessibility Evaluation | Verdict : **Compliant**

This work by <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/AL0YSI0US/" property="cc:attributionName" rel="cc:attributionURL">AL0YSI0US</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>. <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />
=========================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================

This work by <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/AL0YSI0US/" property="cc:attributionName" rel="cc:attributionURL">AL0YSI0US</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>. <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />

This license lets others distribute, remix, adapt, and build upon your work, even commercially, as long as they credit you for the original creation. This is the most accommodating of licenses offered. Recommended for maximum dissemination and use of licensed materials.

<!--

![Profile views](https://gpvc.arturio.dev/AL0YSI0US)

-->
