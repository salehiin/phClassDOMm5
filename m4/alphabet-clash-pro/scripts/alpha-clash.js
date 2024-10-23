

// function play(){
    // 1 hide home screen
    // const homeSection = document.getElementById('home-screen');
    // homeSection.classList.add('hidden')
    // console.log(homeSection.classList);

     // 2 show playground
    // const playSection = document.getElementById('play-ground');
    // playSection.classList.remove('hidden')
// }

function continueGame(){
    // step -1 generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('Random Alphabet', alphabet);

    // Display random Alphabet
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set backgroud color
    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen')
    showElementById('play-ground')
    continueGame()
} 

