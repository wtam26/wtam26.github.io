const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

/* Willie 1st edition - currently testing to see how to append image into thumbBar */
const newImage = document.createElement('img');
newImage.setAttribute('src', 'images/pic1.jpg');
thumbBar.appendChild(newImage);



/* Wiring up the Darken/Lighten button */


