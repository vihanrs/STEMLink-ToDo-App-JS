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

  const todo = { data: value, status: "pending" };

  todoValues.push(todo);
  txtTodo.value = "";

  generateToDOList();
});

// function for create todo elements
const generateToDOList = () => {
  // iterate todoValues array and create new array of element with todo values and assign it to todoElements array
  todoElements = todoValues.map((todo, index) => {
    return `<div class="todo__item">
        <div class="todo__item__left">
          <input type="checkbox" id="completed" name="completed" ${
            todo.status === "done" ? "checked" : ""
          }  onClick="completeTask(this, ${index})"/>
          <span style= "${
            todo.status === "done"
              ? "text-decoration:line-through; color:red;"
              : ""
          }">${todo.data}</span>
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
            onClick="deleteTask(${index})"
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
};

// function for mark as done
const completeTask = (element, index) => {
  if (element.checked) {
    element.nextElementSibling.style =
      "text-decoration:line-through; color:red";
    todoValues[index].status = "done";
  } else {
    element.nextElementSibling.style = "";
    todoValues[index].status = "pending";
  }
};

// function for delete taks
const deleteTask = (index) => {
  todoValues.splice(index, 1);
  generateToDOList();
};
