console.log('First File');

const allLi = document.getElementsByTagName('li');
console.log(allLi);

const allTitles = document.getElementsByClassName('section-title');
console.log(allTitles);

const secondSection = document.getElementById('second-section');
console.log(secondSection);
secondSection.style.color = 'violet';
secondSection.style.backgroundColor = 'indigo';

// document.querySelectorAll - provide NodeList
// document.querySelector - provide first matching
