const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */



/* Willie 1st edition - currently testing to see how to append image into thumbBar */

/*Willie 3rd edition - went back to read ELMS assignment and currently using a loop*/
for (let i = 1; i < 6; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic' + i + '.jpg');
    thumbBar.appendChild(newImage);
}


/* Willie 2nd edition - too ineffective, but keeping it here for testing purposes for 'Looping through images' until thumbnail bar can be populated
const newImage2 = document.createElement('img');
newImage2.setAttribute('src', 'images/pic2.jpg');
thumbBar.appendChild(newImage2); */





/* Wiring up the Darken/Lighten button */


