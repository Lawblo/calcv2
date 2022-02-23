let store_value;
let store_operator;

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
const op_buttons = document.querySelectorAll('.operator-btn');
const clear_btn = document.querySelector('#clear-btn');

function update_display (change_to) {
  display.textContent = change_to;
}

function get_display() {
  return display.textContent;
}

function num_press(num) {
  if (get_display() === '0' || store_operator !== '') {
    update_display(num);
    store_operator = '';
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

function clear_event() {
  clear_btn.addEventListener('click', () => update_display('0'));
  store_operator = '';
  store_value = '';
}

function op_press(operator) {
  store_operator = operator;
  store_value = get_display();

}

function op_events() {
  for (i = 0; i < op_buttons.length; i++) {
    op_buttons[i].addEventListener('click', (e) => op_press(e.target.innerText));
  }
}


function add_events() {
  num_events();
  op_events();
  clear_event();
}




add_events()