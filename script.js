const btnAdd = document.querySelector(".todo__create__button");
const txtTodo = document.querySelector(".todo__input");
const todoContainer = document.querySelector(".todo__container");

const todoValues = [];
let todoElements = [];

btnAdd.addEventListener("click", () => {
  const value = txtTodo.value;

  //validate input data
  if (value === "") {
    return;
  }
  todoValues.push(value);
  txtTodo.value = "";

  // iterate todoValues array and create new array of element with todo values and assign it to todoElements array
  todoElements = todoValues.map((value) => {
    return `<div class="todo__item">
          <div class="todo__item__left">
            <input type="checkbox" id="completed" name="completed""/>
            <span>${value}</span>
          </div>
          <div class="todo__item__right">
            <svg
              class="todo__delete__button"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="red"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-trash"
            >
              <path d="M3 6h18" />
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            </svg>
          </div>
        </div>`;
  });

  // create string from todoElemets list by using join method
  todoContainer.innerHTML = todoElements.join(" ");
});
