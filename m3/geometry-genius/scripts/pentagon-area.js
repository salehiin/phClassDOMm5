

function calculatePentagonArea(){
    const perimeter = getInputValueById('pentagon-perimeter')
    const apotthem = getInputValueById('pentagon-apothem')

    const area = .5 * perimeter * apotthem;
    setInnerTextById('pentagon-area', area);
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value; 
}

 // get triangle base value
//  const triangleBaseInput = document.getElementById('triangle-base');     // find this element using id
//  const triangleBaseText = triangleBaseInput.value;                       // find the value of above element
//  const base = parseFloat(triangleBaseText)                               // string convert to number
    //  console.log(typeof base, base)


function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area; 
}    

    // display triangle area
    // const triangleAreaSpan = document.getElementById('triangle-area'); // find the element where to show
    // triangleAreaSpan.innerText = area;   
