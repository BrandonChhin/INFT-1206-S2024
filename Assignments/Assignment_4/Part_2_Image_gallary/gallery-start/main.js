const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFiles = ["images/pic1.jpg", "images/pic2.jpg", "images/pic3.jpg", "images/pic4.jpg", "images/pic5.jpg"];
/* Declaring the alternative text for each image file */

/* Looping through images */
for(let i = 0; i < imageFiles.length; i++){
  const newImage = document.createElement('img');
  newImage.setAttribute('src', xxx);
  newImage.setAttribute('alt', xxx);
  thumbBar.appendChild(newImage);
}


/* Wiring up the Darken/Lighten button */
