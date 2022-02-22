let store_value;

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a*b;
}

function divide(a, b) {
  if (b === 0) return false;
  return a / b;
}

function operate(operator, a, b) {
  return operator(a, b);
}

const display = document.querySelector('#display p');
const num_buttons = document.querySelectorAll('.num-btn');
const eq_btn = document.querySelector('#eql-btn');
const clear_btn = document.querySelector('#clear-btn');
const add_btn = document.querySelector('#add-btn');
const sub_btn = document.querySelector('#subtract-btn');
const mult_btn = document.querySelector('#mult-btn');
const div_btn = document.querySelector('#divide-btn');

function update_display (change_to) {
  display.textContent = change_to;
}

function get_display() {
  return display.textContent;
}

function num_press(num) {
  if (get_display() === '0') {
    update_display(num);
  } else if (get_display().length > 10) {
    return;
  } else {
    update_display(get_display() + num)
  }
}

function num_events() {
  for (i = 0; i < num_buttons.length; i++) {
    num_buttons[i].addEventListener('click', (e) => num_press(e.target.innerText));
  }
}

function op_events() {
  clear_btn.addEventListener('click', () => update_display('0'));
}


function add_events() {
  num_events();
  op_events();
}




add_events()