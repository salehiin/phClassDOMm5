console.log('second file')

// Select the ul using ID
const secondList = document.getElementById('second-list');
// Create and input content(text) to LI
const li = document.createElement('li');
li.innerText = 'My dynamic item'
// Append LI to UL with Content
secondList.appendChild(li);