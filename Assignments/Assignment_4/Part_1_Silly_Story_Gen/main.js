// Variables and Functions
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


// Raw text strings
const storyText = (`It was 94 fahrenheit outside, so ${xItem} went for a walk. 
  When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. 
  Bob saw the whole thing, but was not surprised — ${xItem} weighs 300 pounds, and it was a hot day.`);

const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];


// Event listener and function
randomize.addEventListener('click', result);

function result() {
  newStory = storyText;
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  if(customName.value !== '') {
    const name = customName.value;

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);

  }

  story.textContent = ;
  story.style.visibility = 'visible';
}

// 4. Inside the first if block - continue here