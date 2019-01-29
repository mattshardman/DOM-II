// Your code goes here

const body = document.querySelector('body');
const header = document.querySelector('.nav2');

const sunBtn = document.querySelector('#sun-btn');
const closeBtn = document.querySelector('#close_btn');

const overlay = document.querySelector('.overlay');


function rand(input) {
  return Math.floor(Math.random() * (input + 1));
}

// change background to random colour on 'b' key press
document.addEventListener('keydown', (e) => {
  if (e.which === 66) {
    body.style.background = `rgb(${rand(255)}, ${rand(255)}, ${rand(255)})`;
    return null;
  }

  if (e.which === 82) {
    body.style.background = 'red';
    return null;
  }

  if (e.which === 87) {
    body.style.background = '#fff';
    return null;
  }
});

// add drop down menu
document.addEventListener('scroll', (e) => {
  if (window.scrollY > 300) {
    header.style.position = 'fixed';
    header.style.transform = 'translateY(0%)';
    return null;
  }

  if (window.scrollY < 300) {
    header.style.transform = 'translateY(-100%)';
    return null;
  }
});

// add overlay element
sunBtn.addEventListener('dblclick', () => {
  overlay.style.display = 'flex';
  overlay.querySelector('h1').textContent = "You've won a prize.";
});

closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});

// add event listeners for drag and drop to each image to allow images to be swapped
(function dragDrop() {
  const images = document.querySelectorAll('img');

  let draggedItem = '';
  let draggedItemSrc = '';

  images.forEach((image) => {
    image.addEventListener('dragstart', (e) => {
      draggedItem = e.target.id;
      draggedItemSrc = e.target.src;
      e.target.style.opacity = 0;
    });

    image.addEventListener('dragend', (e) => {
      draggedItem = '';
      draggedItemSrc = '';
      e.target.style.opacity = 1;
    });

    image.addEventListener('dragover', (e) => {
      e.preventDefault();
    });

    image.addEventListener('drop', (e) => {
      const replace = document.querySelector(`#${draggedItem}`);
      replace.setAttribute('src', e.target.src);
      e.target.setAttribute('src', draggedItemSrc);
    });
  });
}());

// copy
const textElements = document.querySelectorAll('p');

textElements.forEach((text) => {
  text.addEventListener('copy', (e) => {
    overlay.style.display = 'flex';
    overlay.querySelector('h1').textContent = `You copied this text from this paragraph: ${e.target.textContent}`;
  });
});
