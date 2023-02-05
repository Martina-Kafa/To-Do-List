let addButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

//dodajemo eventlistener na button da se svakim klikom kreira novi p element. Dodajemo mu class iz style.css-a.
addButton.addEventListener("click", () => {
  let task = document.createElement("p");
  task.classList.add("task-styling");

  //task je jednak textu unutar inputa
  task.innerText = inputField.value;
  toDoContainer.appendChild(task);

  //da bi input polje bilo prazno:
  inputField.value = "";

  //event listener da klikom na task isti bude prekrižen
  task.addEventListener("click", () => {
    task.style.textDecoration = "line-through";
  });

  //eventlistener da double klikom se task obriše
  task.addEventListener("dblclick", () => {
    toDoContainer.removeChild(task);
  });
});
