let position = 1; // The starting position of the grid
const gridSize = 100; // The total number of the grid cells

function createGrid() {
  for (let i = 1; i <= gridSize; i++) {
    var div = document.createElement('div');
    div.id = 'n' + i;
    div.innerText = i;
    document.getElementById('target').appendChild(div);
  }
}

function move() {
  setTimeout(() => {
    if (position > gridSize) return alert("The End");
    toggle(position);
    toggle(position - 1);
    position += 1;
    move();
  }, 50);
}

function toggle(position) {
  if (position < 1) return alert("Let's GO!");
  const name = 'n' + position;
  const element = document.getElementById(name);
  element.classList.toggle('on');

}
//don't change this line
if (typeof module !== 'undefined') {
  module.exports = { createGrid, move, toggle };
}