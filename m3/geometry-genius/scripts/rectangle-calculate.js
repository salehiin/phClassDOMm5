function calculateRectangleArea(){
    // console.log('inside function');

    // get rectangle base value
    const rectangleBaseInput = document.getElementById('rectangle-base');
    const rectangleBaseText = rectangleBaseInput.value;
    const base = parseFloat(rectangleBaseText)  // string convert to number
        console.log(typeof base, base)


    // get rectangle height
    const length = parseFloat(document.getElementById('rectangle-length').value);
    console.log(typeof length, length)
    // return(base * height)
    // console.log(base * height)

    // calculate rectangle area
    // const result = base * height;
    // console.log(result);
    // OR
    const area = base * length;
    console.log(area);

    // display rectangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}