var fill = document.querySelector('.fill');
var lists = document.querySelectorAll('.list');

// Fill listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop through list boxes and add listeners
for (var list of lists) {
  list.addEventListener('dragover', dragOver);
  list.addEventListener('dragenter', dragEnter);
  list.addEventListener('dragleave', dragLeave);
  list.addEventListener('drop', dragDrop);
}

// Drag Functions
function dragStart() {
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
  console.log('start');
}

function dragEnd() {
  this.className = 'fill';
  console.log('end');
}

function dragOver(e) {
  e.preventDefault();
  console.log('over');
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
  console.log('enter');
}

function dragLeave() {
  this.className = 'list';
  console.log('leave');
}

function dragDrop() {
  this.className = 'list';
  this.append(fill);
  console.log('drop');
}