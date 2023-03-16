'use strict';

// This the modal...
const modal = document.querySelector('.modal');
// Thsi one is the overlay you can say pop-up screen..
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// for selecting multiple sector we use querySelectorAll.
const btnOpenModal = document.querySelectorAll('.show-modal');


const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

const openModal = function () {
  // remove 'remove' the class in the attribute
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}


for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal)
}

btnCloseModal.addEventListener('click', closeModal)


overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
})