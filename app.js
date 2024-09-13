let btn = document.getElementById("btnModal");
let divModel = document.getElementById("model");
let main = document.getElementById("main");
let tasks = [];

function showModal() {
  divModel.style.display = "block";
  main.style.opacity = "0.5";
}

function remove() {
  divModel.style.display = "none";
  main.style.opacity = "1";
}

function addTask(task) {
  let list = document.getElementById("list");

  console.log(list);
}

function saveTask() {
  let formElements = document.querySelectorAll(".form [name]");

  let task = {};

  formElements.forEach((el) => {
    task[el.getAttribute("name")] = el.value;
    el.value = "";
  });

  tasks.push(task);
  let list = document.getElementById("list");
  list.innerHTML = "";
  tasks.forEach((myTask, index) => {
    list.innerHTML += `
      <div class="${
        index % 2 == 0 ? "bg-cyan-700" : "bg-red-400"
      } px-[19px] py-[13px] flex flex-col gap-2">
        <h2 class="font-bold text-xl">${myTask["title"]}</h2>
        <p class="">
          ${myTask["subject"]}
        </p>
        <div class="flex flex-row">
          <p>${myTask["deadline"]}</p>
          <p class="ml-auto">${myTask["member"]}</p>
        </div>
      </div>`;
  });
}
