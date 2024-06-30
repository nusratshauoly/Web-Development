
//  ----- rhombus calculation ----------
function calculateRhombusArea() {
    const diagonals1 = getInputValue('rhombus-diagonals-1');

    const diagonals2 = getInputValue('rhombus-diagonals-2');

    // rectangle area
    const area = 0.5 * diagonals1 * diagonals2;

    // show rectangle area
    const areaSpan = document.getElementById('rhombus-area');
    areaSpan.innerText = area;   
}

// -------- pentagon calculation ---------
function calculatePentagonArea() {
    const pentagon = getInputValue('pentagon-penta');

    const angles = getInputValue('pentagon-angles');

    // rectangle area
    const area = 0.5 * pentagon * angles;

    // show rectangle area
    const areaSpan = document.getElementById('pentagon-area');
    areaSpan.innerText = area;   
}


// ---------------- ellipse calculation ----------
function calculateEllipseArea() {
    const majorAxis = getInputValue('ellipse-major-axis');

    const minorAxis = getInputValue('ellipse-minor-axis');

    // rectangle area
    const area = 3.14 * majorAxis * minorAxis;

    // show rectangle area
    const areaSpan = document.getElementById('ellipse-area');
    areaSpan.innerText = area;   
}