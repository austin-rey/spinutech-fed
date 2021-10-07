// Shape Containers
let circleContainer = document.getElementById('circle-container');
let squareContainer = document.getElementById('square-container');

let squareClicked = (e) => {
  if (e.target.tagName === 'UL') return;

  e.target.remove();
  addShape(
    e.target.innerText.toLowerCase().replace(/\s/g, ''),
    circleContainer
  );
};

let circleClicked = (e) => {
  if (e.target.tagName === 'UL') return;

  e.target.remove();
  addShape(
    e.target.innerText.toLowerCase().replace(/\s/g, ''),
    squareContainer
  );
};

// Responsible for adding shape elements into the DOM
let addShape = (color, container) => {
  let newShape = document.createElement('li');
  newShape.classList.add(`bg-${color}`);

  let newShapeParagraph = document.createElement('p');
  newShapeParagraph.classList.add('circle-color');
  newShapeParagraph.innerText =
    color.charAt(0).toUpperCase() + color.substr(1).toLowerCase();

  newShape.append(newShapeParagraph);
  container.prepend(newShape);
};

// Adds event listeners to parent containers of circles and squares
circleContainer.addEventListener('click', circleClicked);
squareContainer.addEventListener('click', squareClicked);
