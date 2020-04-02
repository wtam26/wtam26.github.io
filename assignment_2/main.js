const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

/* Willie 1st edition - currently testing to see how to append image into thumbBar */
const newImage = document.createElement('img');
newImage.setAttribute('src', 'images/pic1.jpg');
thumbBar.appendChild(newImage);

/* Willie 2nd edition - too ineffective, but keeping it here for testing purposes for Looping through images*/
const newImage2 = document.createElement('img');
newImage2.setAttribute('src', 'images/pic2.jpg');
thumbBar.appendChild(newImage2);




/* Wiring up the Darken/Lighten button */


