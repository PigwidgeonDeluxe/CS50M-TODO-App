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

  const userInput = prompt('New to-do list item:');

  // check if user input is empty
  if (userInput.trim() == ''){
    alert('User input cannot be empty!');
    newTodo();
    return;
  }
  
  // create new list element
  const todoItem = document.createElement('li');
  todoItem.classList.add(classNames.TODO_ITEM);

  // create a checkbox for the list element
  const todoCheckbox = document.createElement('INPUT');
  todoCheckbox.type = 'checkbox';
  todoCheckbox.class = classNames.TODO_CHECKBOX;

  // create span for list element
  const todoText = document.createElement('span');
  todoText.classL = classNames.TODO_TEXT;
  todoText.textContent = userInput;

  // create delete button
  const todoDelete = document.createElement('button');
  todoDelete.innerHTML = 'Delete';
  todoDelete.class = classNames.TODO_DELETE;
  
  // add checkbox, span, and button to list item, and append list item to list 
  todoItem.appendChild(todoCheckbox);
  todoItem.appendChild(todoText);
  todoItem.appendChild(todoDelete);
  list.appendChild(todoItem);

  // update item count and unchecked count
  var liList = list.getElementsByTagName('li');
  itemCountSpan.textContent = liList.length;
  uncheckedCountSpan.textContent = document.querySelectorAll('input[type="checkbox"]:not(:checked)').length;

  // update unchecked count whenever a checkbox is changed
  todoCheckbox.addEventListener('change', () => {
    uncheckedCountSpan.textContent = document.querySelectorAll('input[type="checkbox"]:not(:checked)').length;
  })

  // delete item from list and update item counts
  todoDelete.addEventListener('click', () => {
    list.removeChild(todoItem);

    liList = list.getElementsByTagName('li');
    itemCountSpan.textContent = liList.length;
    uncheckedCountSpan.textContent = document.querySelectorAll('input[type="checkbox"]:not(:checked)').length;
  })
  
}
