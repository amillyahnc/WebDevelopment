// Challenge 2:  Create the function for the Average program.  Refer to the resource link in the HTML for assistance.
Function average(){
    let g1 = parseFloat(document.getElementById("g1").value);
    let g2 = parseFloat(document.getElementById("g2").value);
    let g3 = parseFloat(document.getElementById("g3").value);
    let output1 =parseFloat(document.getElementById("output_average"));
    
    let avg = (g1 + g2 +g3)/3;
}

// Challenge 4:  Create the function for the Slope program.  Refer to the resource link in the HTML for assistance.
Function Slope(){
let x1 = parseFloat(document.getElementById("x1").value);
    let y1 = parseFloat(document.getElementById("x2").value);
    let x2 = parseFloat(document.getElementById("y1").value);
    let y2 = parseFloat(document.getElementById("y2").value);
    let output2 =parseFloat(document.getElementById("output_average"));
    
    let avg = (x1  - y1 )/(x2 - y);
}

// Challenge 6:  Create the function for the BMI program.  Refer to the resource link in the HTML for assistance.
Function BMI(){
let weight = parseFloat(document.getElementById("weight").value);
let height = parseFloat(document.getElementById("height").value);
let output3 =parseFloat(document.getElementById("output_average"));
    
    let avg = weight/height;
}