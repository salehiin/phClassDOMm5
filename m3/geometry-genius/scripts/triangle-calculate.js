/**
 * 
 * 
 */ 


function calculateTriangleArea(){
    // console.log('inside function');

    // get triangle base value
    const triangleBaseInput = document.getElementById('triangle-base');     // find this element using id
    const triangleBaseText = triangleBaseInput.value;                       // find the value of above element
    const base = parseFloat(triangleBaseText)                               // string convert to number
        console.log(typeof base, base)


    // get triangle height
    const height = parseFloat(document.getElementById('triangle-height').value); // 3 in 1
    console.log(typeof height, height)
    // return(base * height)
    // console.log(base * height)

    // calculate triangle area
    // const result = base * height;
    // console.log(result);
    // OR
    const area = 0.5 * base * height;
    console.log(area);

    // display triangle area
    const triangleAreaSpan = document.getElementById('triangle-area'); // find the element where to show
    triangleAreaSpan.innerText = area;                                 // show the data
}




