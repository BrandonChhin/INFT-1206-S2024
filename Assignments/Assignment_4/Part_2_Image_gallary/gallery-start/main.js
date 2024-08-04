const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFiles = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"]
/* Declaring the alternative text for each image file */
const altTexts = {
  'pic1.jpg' : 'Closeup of a human eye',
  'pic2.jpg' : 'Rock surface',
  'pic3.jpg' : 'Purple and white flowers',
  'pic4.jpg' : 'Wall of Pharoah\'s tomb',
  'pic5.jpg' : 'Moth on a leaf',

}

/* Looping through images */
for(i = 0; i < imageFiles.length; i++){
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/pic${i}.jpg`);
  newImage.setAttribute('alt', `pic${i}`);
  thumbBar.appendChild(newImage);
}


/* Wiring up the Darken/Lighten button */
