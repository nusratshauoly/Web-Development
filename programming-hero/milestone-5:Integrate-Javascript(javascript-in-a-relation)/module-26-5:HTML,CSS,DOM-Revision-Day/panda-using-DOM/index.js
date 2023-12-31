// 2. যতগুলা ইলিমেন্টে h2 ট্যাগ আছে সেগুলাকে সিলেক্ট করে তার লেখাগুলার কালার lightblue করেদিতে পারো কিনা।  
const h2Color = document.getElementsByTagName('h2');
for (let i = 0; i < h2Color.length; i++){
    h2Color[i].style.color = "blue";
}

//////////////////

//  3. ওই ওয়েবসাইট এ backpack আইডি দিয়ে একটা সেকশন আছে। সেই সেকশনের ব্যাকগ্রাউন্ড কালার tomato করে দিতে পারো কিনা। 
const backPack = document.getElementById('backpack');
backPack.style.backgroundColor = "tomato";


/////////////////

//  4. card ক্লাস যতগুলা জায়গায় ইউজ করা হয়েছে সবগুলা কার্ড এর বর্ডার রেডিয়াস ৩০px করে দিতে পারো কিনা 
const cardClass = document.getElementsByClassName('card');
for (let j = 0; j < cardClass.length; j++){
    cardClass[j].style.borderRadius = "30px";
}
// cardClass.style.borderRadius = "30px";

//////////////////
// 5: কোন একটা ফাংশন লিখো। সেটার ভিতরে কনসোল লগ হবে। এবং সেই ফাংশন টা ক্লিক হ্যান্ডলার হিসেবে কোন একটা বাটনে যোগ করো 
const submitButton = document.getElementById('submit-button').addEventListener('click', function () {
    console.log('button submitted');
})

//////////////////////////
// 6: এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা buy now বাটনে চাপ দিলে card টা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। একটু চিন্তা করে করার চেষ্টা করো। 

// Get references to all "Buy Now" buttons by their class
var buyButtons = document.querySelectorAll(".panda-btn-buy-now");

// Function to remove a card
function removeCard(card) {
  // Check if the card exists
  if (card) {
    // Remove the card from its parent container
    card.parentElement.parentElement.parentElement.remove();
  }
}

// Loop through each "Buy Now" button and add a click event listener
for (let i = 0; i < buyButtons.length; i++) {
  buyButtons[i].addEventListener("click", function(event) {
    let card = event.target; // Get the parent of the clicked button (the card)
    removeCard(card);
  });
}

///////////////////////

// 7. একদম নিচে একটা LET'S STAY IN TOUCH নামে একটা জিনিস আছে। সেখানে তুমি submit বাটনটা disable করে ফেলবে। তারপর কেউ যদি উপরে input ফিল্ডে যদি একজাক্টলি email শব্দটা লিখে। তাহলে বাটন একটিভ হবে। আর যদি অন্য কিছু লিখে তাহলে বাটনটা একটিভ হবে না। 
const connectInput = document.getElementById("exampleInputEmail1").addEventListener('keyup', function (event) {
    const text = event.target.value;

    const submitButton = document.getElementById('submit-button');
    if (text === "email") {
        submitButton.removeAttribute("disabled");
    }
    else {
        submitButton.setAttribute("disabled", true);
    }
})


//////////////////////////////

// 8.  (অপশনাল) একটা মজার চ্যালেঞ্জ। কোন একটা ইমেজ এর উপরে mouseenter করলে সেই ইমেজটা চেইঞ্জ হয়ে যাবে। একটু গুগলে সার্চ দিয়ে দেখো। জিনিসটা কিভাবে করা যেতে পারে। 

// // for shoe - 1: using addEventListener
// let shoe1Change = document.getElementById('shoe-1');
//     shoe1Change.addEventListener('mouseenter', function () {
//   shoe1Change.src = "./images/milkshake-on-pink.jpeg";
// });

// shoe1Change.addEventListener("mouseleave", function () {
//   shoe1Change.src = "images/shoes/shoe-1.png";
// })


// for shoe - 1

 function shoe1Image() {
 document.getElementById("shoe-1").src = "./images/milkshake-on-pink.jpeg";
 }

 function shoe1OldImage() {
 document.getElementById("shoe-1").src = "images/shoes/shoe-1.png";
 }
 

// for shoe - 2

 function shoe2Image() {
 document.getElementById("shoe-2").src = "./images/milkshake-on-pink.jpeg";
 }

 function shoe2OldImage() {
 document.getElementById("shoe-2").src = "images/shoes/shoe-2.png";
 }
 
// for shoe - 3

 function shoe3Image() {
 document.getElementById("shoe-3").src = "./images/milkshake-on-pink.jpeg";
};

 function shoe3OldImage() {
 document.getElementById("shoe-3").src = "images/shoes/shoe-3.png";
};

// for bag - 1
function bag1Image() {
 document.getElementById("bag-1").src = "./images/milkshake-on-pink.jpeg";
};

 function bag1OldImage() {
 document.getElementById("bag-1").src = "images/bags/bag-1.png";
};


// for bag - 2
function bag2Image() {
 document.getElementById("bag-2").src = "./images/milkshake-on-pink.jpeg";
};

 function bag2OldImage() {
 document.getElementById("bag-2").src = "images/bags/bag-2.png";
};


//  for bag - 3
function bag3Image() {
 document.getElementById("bag-3").src = "./images/milkshake-on-pink.jpeg";
};

 function bag3OldImage() {
 document.getElementById("bag-3").src = "images/bags/bag-3.png";
};

//////////////////////////////////////

// 9. (অপশনাল) নিচের যে LET'S STAY IN TOUCH আছে সেখানে কোন খালি জায়গায় ডাবল ক্লিক করলে ঐটার পিছনের কালার চেইঞ্জ হয়ে যাবে। 
    

// Get a reference to the section element with the ID "subscribe"
let subscribeSection = document.getElementById("subscribe");

// Add a dblclick event listener to the section
subscribeSection.addEventListener("dblclick", function() {
  // Generate a random color (e.g., using hexadecimal values)
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  // Set the background color of the section
  subscribeSection.style.backgroundColor = randomColor;
});

