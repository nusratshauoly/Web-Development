'use strict';

const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const btnsOpenModal = document.querySelectorAll('.open-modal');
const btnsCloseModal = document.querySelector('.close-modal');

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
btnsCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
