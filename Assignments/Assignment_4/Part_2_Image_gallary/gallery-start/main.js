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
for(i = 1; i <= imageFiles.length; i++){
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/pic${i}.jpg`);
  newImage.setAttribute('alt', altTexts[i]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', clickEvent => {
    displayedImage.src = clickEvent.target.src;
    displayedImage.alt = clickEvent.target.alt;
  });
}


/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
});
