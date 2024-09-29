// 25.1 - DOM Events 

// 25.2
// console.log('This is separate JS file')

// option 1 : Directly set on the HTML element - won't use
// <button onclick="console.log(65)">Another Button</button> 


//  option 2 : add onclick function - declare a function - will use some frequent times - Rating **
// <button onclick="makeRed()">Make Red</button>
function makeRed(){ 
    document.body.style.backgroundColor = 'red';
}


//  option 3 : add onclick function on the HTML element - should check again - have an Element & an ID - will use few times - Rating *1/2
const makeBlueButton = document.getElementById('make-blue');
            // console.log(makeBlueButton); 
            makeBlueButton.onclick = makeBlue();  // shouldn't call function - 06:50 - important 

            function makeBlue(){
                document.body.style.backgroundColor = 'black';
            }
            
//  option 3(write differently) :  add onclick function - should check again - have an Element & an ID - function use directly to onclick - use sometimes - Rating *           
const makePurpleButton = document.getElementById('make-purple')
            // console.log(makePurpleButton)
            makePurpleButton.onclick = function makePurple(){  // use of function name optional
                document.body.style.backgroundColor = 'purple'
            };  // shouldn't call function - 06:50 - important 


// 25.3

// option 4 : use EventListener
const makePinkButton = document.getElementById('make-pink');
            // console.log(makePinkButton);
            makePinkButton.addEventListener('click', makePink);

            function makePink(){
                document.body.style.backgroundColor = 'pink';
            }


//  option 4(write differently) : 
const makeGreenButton = document.getElementById('make-green');
            // console.log(makeGreenButton);
            makeGreenButton.addEventListener('click', function makeGreen(){  // use of function name optional
                document.body.style.backgroundColor = 'green';
            }) 


//  option 4(write differently) : use frequently - Rating ***
// document.getElementById('make-goldenrod', function makeGoldenrod(){})
document.getElementById('make-goldenrod').addEventListener('click', function makeGoldenrod(){   // use of function name optional
    document.body.style.backgroundColor = 'goldenrod';
})       // use of function name optional



// 25.4
// Option 1
function handleOnClick(){
    // console.log('button clicked')
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'handled by function attached on onclick attribute';
}

// Option 2
// document.getElementById('event-listener').addEventListener('click', function(){  // annonymous/callback function
//     const handlerStatus = document.getElementById('handler-status');
//     handlerStatus.innerText = 'Text updated by add Event listener button';
// })

// Option 2: recap
// document.getElementById('btn-update').addEventListener('click', function(){  // annonymous/callback function
//     console.log('update button clicked');
//     const handlerStatus = document.getElementById('handler-status');
//     handlerStatus.innerText = 'Text updated by add Event listener button';
// })