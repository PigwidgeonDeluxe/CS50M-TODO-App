const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  const userInput = prompt('New to-do list item:', 'i.e. boil some eggs');

  // create new list element
  const todoItem = document.createElement('li');
  todoItem.classList.add(classNames.TODO_ITEM);

  // create a checkbox for the list element
  const todoCheckbox = document.createElement('INPUT');
  todoCheckbox.type = 'checkbox';
  todoCheckbox.id = 'listCheckbox';
  todoCheckbox.classList.add(classNames.TODO_CHECKBOX);

  // create span for list element
  const todoText = document.createElement('span');
  todoText.classList.add(classNames.TODO_TEXT);
  todoText.textContent = userInput;
  
  // add checkbox and span to list item and append list item to list 
  todoItem.appendChild(todoCheckbox);
  todoItem.appendChild(todoText);
  list.appendChild(todoItem);

  // update item count and unchecked count
  var liList = list.getElementsByTagName('li');
  itemCountSpan.textContent = liList.length;
  uncheckedCountSpan.textContent = document.querySelectorAll('input[type="checkbox"]:not(:checked)').length;
  // update unchecked count whenever a checkbox is changed
  todoCheckbox.addEventListener('change', () => {
    uncheckedCountSpan.textContent = document.querySelectorAll('input[type="checkbox"]:not(:checked)').length;
  })
  
}
