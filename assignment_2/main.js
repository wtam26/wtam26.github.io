const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

/* Willie 1st edit - currently testing to see how to append image into thumbBar */

/* Willie 2nd edit - too ineffective to declare new variables each time, but keeping it here for testing purposes for 'Looping through images' until thumbnail bar can be populated
const newImage2 = document.createElement('img');
newImage2.setAttribute('src', 'images/pic2.jpg');
thumbBar.appendChild(newImage2); */

/*Willie 3rd edit - went back to read ELMS assignment and currently using a loop as suggested*/
for (let i = 1; i < 6; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic' + i + '.jpg');
    thumbBar.appendChild(newImage);

    /*Willie 4th edition - figuring out onClick handler
    Failed editions - reference for partner to not try these attempts
    
    newImage.onClick = function() { 
        displayedImage.src = newImage.src
    }
   newImage.onClick = function() {
       var tempSrc = newImage.getAttribute("src");
       displayedImage.src = tempSrc;
   }
   */
}


/* Wiring up the Darken/Lighten button */

/*Willie 5th edit - decided to work on Darken/Lighten for now
Originally had changed displayedImage but reread Elms Assignment and fixed it to change Overlay instead*/

btn.onclick = function() {
    var btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        //overlay.style.backgroundColor = rgba(0,0,0,0.5);
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        //overlay.style.backgroundColor = rgba(0,0,0,0);
    }

    
}


