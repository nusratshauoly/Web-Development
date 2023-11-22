'use strict';

// 1: select the class
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// * 1.1: same class er onekgulo element thakle (querySelectorAll) use korbo.
const btnsOpenModal = document.querySelectorAll('.show-modal');
//console.log(btnsOpenModal);

// 3.3 (here - (2.3,2.4,2.5,2.6)) :
const openModal = function () {
  //console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// 3.2(here - 3 & 3.1):  * here we can not write the same code for (btnCloseModal) & (overlay) that's why we need to write a common function for them and keep the code in there to close the bacground content/modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// 2: here 3 ta button tai er length ber korte hobe er jonno for loop use kora hoise
// 2.1: if we create one line condition then we don't have to create {} after for loop
for (let i = 0; i < btnsOpenModal.length; i++)
  //2.2 (2.3,2.4,2.5,2.6)up: to attach a (click) event we have to add (event handler) function to the element.(event handler) & (event listener) are pretty much same thing that's why it's called event listener and put the (openModal) function from (3.3).
  btnsOpenModal[i].addEventListener('click', openModal);
// {
// //   2.3
// console.log('button clicked');
// //2.4: we take the (modal) selected element and on there we can read the class list property
// //2.5: when we write (.classList) and inside we don't have to give (.) in className) its only required for (querySelector/querySelectorAll).
// //2.6: to show the hidden content by clicking the buttons so that the (hidden) will remove and background content appear
// modal.classList.remove('hidden');
// overlay.classList.remove('hidden');
//   });

// //3.2(see in the up):(3 & 3.1) * here we can not write the same code for (btnCloseModal) & (overlay) that's why we need to write a common function for them and keep the code in there to close the bacground content/modal

// // 3: when to click the (cross) button in background content
//  btnCloseModal.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// // 3.1: when we click outside of the content it also close/hidden the content
// overlay.addEventListener('click', function () {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// });

// 3.3: put the (closeModal) function name here to (close) when click the (X) button
btnCloseModal.addEventListener('click', closeModal);
// 3.4: put the (closeModal) function name here to (close) when click the overlay/outside of the modal content.
overlay.addEventListener('click', closeModal);

// 4. Handling an "ESC" keypress event
// 4.1: adding (addEventListener) on the (esc) key
// * whenever a key will down then a event will happen , that's why (e => event) will give in the parameter, as the event occurs, Javascript will call this function with the event object as an argument. this works cause we do not call this function here or selves we only define it here.(like we say, hey JS call function when a key down (event) happen and when you do so please (pass in the event object as an argument))
document.addEventListener('keydown', function (e) {
  //console.log('A key was pressed');
  // 4.2: to press a key(.key) and and event happens (to know after key down to print the key)
  console.log(e.key);
  // 4.3: if the press key is escape(esc), and if the modal does not contain the hidden class then execute disfunction to close the modal.
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    // 4.4: we want to close the modal if the content  doesnot contain hidden class (.hidden) then close the modal
    //   4.5: we can put (4.3 && 4.4) in (&& condition)
    // if (!modal.classList.contains('hidden')) {
    // 4.6: calling the function from (3.2)
    closeModal();
    // }
  }
});

// ------------------- full code ---------------

('use strict');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
