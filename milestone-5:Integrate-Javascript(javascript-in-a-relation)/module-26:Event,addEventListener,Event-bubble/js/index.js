console.log('this is separate JS file');

////////////////////// option 2 ////////////////////////

// ----------------------------------------------------------Module: 26-2: Add onclick handler directly or via javascript ----------------------------------------------

//1. option-1: directly set on the HTML element

// <h1 onclick="console.log('i am clicked')">DOM er ajke special events</h1>  (html file)


// 2. option 2: (add onclick function on the html element)
//   <button onclick="makeRed()">Make Red</button>(html file)
// <!-- 2.1 : for option 2 js inline style -->
    // <!-- we can write these option 2 function in external js file -->
        function makeRed(){
            document.body.style.backgroundColor = "red";
        }
    /////////////// option 3 ////////////////////////////

// 3. option 3: element thakbe and id thakbe , id diye capture kore niye ashbo and onclick diye function er name boshaye dibo
//  <button id="make-blue">Make Blue</button> (html file)
// 3.1: for option 3 js inline style 
        const makeBlueButton = document.getElementById('make-blue');

        makeBlueButton.onclick = makeBlue; //onclick e makeBlue function er name ta khali likhbo call korbo na. (jodi (html) er onclick kori tokhon function call korbo like (makeBlue()), but inline js er vitor onclick e function call korbo na just (makeBlue) )

        function makeBlue(){
            document.body.style.backgroundColor = 'blue';
            }
            //console.log(makeBlueButton); 

/////// option 3.5 (we will use this some time) /////////////////////////////////////    

// 3.5. option 3.5 another : onclick k variable hishebe declare kore oitate function boshano 
// <button id="make-purple">Make Purple</button> (html file)
// 3.5.1: for option 3.5 js inline diye
        const purpleButton = document.getElementById('make-purple');
        purpleButton.onclick = function makePurple(){
            document.body.style.backgroundColor = 'purple';
        }
        //console.log(purpleButton);




// ----------------------------------------------------------Module: 26-3: Different ways to use addEventListener on a button --------------------------------------------------

// ------------------------------------------------------                      option 4:                       ------------------------------------------------------
    //  <button id="make-pink">make Pink</button>
    const pinkButton = document.getElementById('make-pink');
    // directly (onclick) na diye (addEventListener) er moddhe 2 ta option dibo(1. button e ki korbo like (click) and 2. function name)
    pinkButton.addEventListener('click', makePink);

    function makePink(){
        document.body.style.backgroundColor = 'pink';
    }
    // console.log(pinkButton);


     // ------------------------------------------------------           option 4.5 : another rule                  ------------------------------------------------------
    //  <button id="make-green">make Green</button>
    const greenButton = document.getElementById('make-green');

    // directly (onclick) na diye (addEventListener) er moddhe 2 ta option dibo(1. button e ki korbo like (click) and 2. whole function likhbo 2nd option e)
    greenButton.addEventListener('click', function makeGreen(){
        document.body.style.backgroundColor = 'green';
    });
    // console.log(pinkButton);


     // ------------------------------------------------------         option 4 : final (mostly etai use korbo)  (important)               ------------------------------------------------------
    //  <button id="make-goldenrod">make goldenrod</button>

     /*  document.getElementById('make-goldenrod').addEventListener('click', function(){
        document.body.style.backgroundColor = 'goldenrod';
    });
    */
     //ekhane first document.getElementById('id-name').addEventListener('ki action nibo', shudhu function likhbo(bracket for parameter){second bracket for body and give the style of body})
    document.getElementById('make-goldenrod').addEventListener('click', function(){
        document.body.style.backgroundColor = 'goldenrod';
    });

  
      