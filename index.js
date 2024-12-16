// Todo-list

const form = document.querySelector(".todo-form");
const list = document.querySelector(".todo-list");
let todoArray = [];
let counter = 1;

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const {
    todo: { value: todoText },
  } = event.target;
  console.log(todoText);
  if (todoText) {
    todoArray.push({ text: todoText, id: counter++ });
  }
  updateView(todoArray);
});

function updateView(todoArray) {
  const liArray = todoArray.map((todoObj) => {
    const li = document.createElement("li");
    li.append(todoObj.text);
    li.dataset.id = todoObj.id;
    const button = document.createElement("button");
    button.textContent = "X";
    button.addEventListener("click", deleteButtonHandler);
    li.append(button);
    return li;
  });
  list.replaceChildren(...liArray);
}

function deleteButtonHandler(event) {
  const parentLi = event.target.parentElement;

  todoArray = todoArray.filter(
    (elem) => elem.id !== Number(parentLi.dataset.id)
  );
  console.log(todoArray);
  updateView(todoArray);
}
