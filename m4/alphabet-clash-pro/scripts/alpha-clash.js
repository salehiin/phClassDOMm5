

// function play(){
    // 1 hide home screen
    // const homeSection = document.getElementById('home-screen');
    // homeSection.classList.add('hidden')
    // console.log(homeSection.classList);

     // 2 show playground
    // const playSection = document.getElementById('play-ground');
    // playSection.classList.remove('hidden')
// }


function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    console.log('Player press:', playerPressed);

    // stop the game if pressed 'Esc'
    if(playerPressed === 'Escape'){
        gameOver();
    }

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(currentAlphabetElement.innerText);
    console.log(playerPressed, expectedAlphabet);

    // check if key pressed matched or not
    if(playerPressed === expectedAlphabet){
        console.log('point');
        // console.log('Correct', expectedAlphabet);

        const currentScore = getTextElementValueById('current-score');
        // console.log(currentScore);
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);





        // ---------------------------------------------------
        // update score
        // 1. get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText)
        // console.log(currentScore);
        


        // // 2. increase the score by
        const newScore = currentScore + 1;

        // // 3. show the update score
        // currentScoreElement.innerText = newScore;

        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('missed, life lost')

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0){
            gameOver();
        }










        // -------------------------------------------------------------------
        // 1. get the current life
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife =parseInt(currentLifeText);


        // // 2. reduce the life
        // const newLife = currentLife - 1;
    

        // // 3. updated life
        // currentLifeElement.innerText =newLife;
    }
}


// capture keyboard key press
document.addEventListener('keyup', handleKeyboardKeyUpEvent)


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
    // hide everything show only the playground
    hideElementById('home-screen')
    hideElementById('final-score');
    showElementById('play-ground')

    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);


    continueGame()
} 

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    // update final scrore
    // 1. get the game score
    const gameScore = getTextElementValueById('current-score');
    console.log(gameScore);
    setTextElementValueById('game-score', gameScore);

    // clear the last selected alphabet highlighted
    const currentAlphabet = getElementTextById('current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet); 


}

// function playAgain(){
//     hideElementById('final-score')
//     showElementById('play-ground')
  
// } 
