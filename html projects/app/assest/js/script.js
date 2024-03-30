let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let tasks = document.querySelector("#tasks");
let add = document.getElementById("add");
let task=document.querySelector(".task")


form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});


















let formValidation = () => {
  if (textInput.value === "") {
    console.log("failure");
    msg.innerHTML = "Task cannot be blank";
  } else {
    console.log("success");
    msg.innerHTML = "";
    acceptData();
    add.setAttribute("data-bs-dismiss", "modal");
    add.click();

    (() => {
      add.setAttribute("data-bs-dismiss", "");
    })();
  }
};


let data;








let acceptData = () => {
  data.push({
    text: textInput.value,
    date: dateInput.value,
    description: textarea.value,
  });



  console.log(data);
  createTasks();
resetForm();
};





let createTasks = () => {

  
  localStorage.setItem("data", JSON.stringify(data));
  let newHTML='';

for(let i=0;i<data.length;i++){
  let {text,date,description}=data[i]
   newHTML += `
    <div  class="task"  draggable="true">
          <span class="fw-bold">${text}</span>
          <span class="small text-secondary">${date}</span>
          <p>${description}</p>
  
          <span class="options">
            <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
            <i onClick ="deleteTask(this);createTasks()" class="fas fa-trash-alt"></i>
          </span>
        </div>
    `
  }
  tasks.innerHTML=newHTML;


  resetForm();
};








let deleteTask = (e) => {
  e.parentElement.parentElement.remove();
  data.splice(e.parentElement.parentElement.id, 1);
  localStorage.setItem("data", JSON.stringify(data));
  console.log(data);
  
};

let editTask = (e) => {
  let selectedTask = e.parentElement.parentElement;

  textInput.value = selectedTask.children[0].innerHTML;
  dateInput.value = selectedTask.children[1].innerHTML;
  textarea.value = selectedTask.children[2].innerHTML;

  deleteTask(e);
};

let resetForm = () => {
  textInput.value = "";
  dateInput.value = "";
  textarea.value = "";
};

let todoall= localStorage.getItem('data')

if (todoall !== undefined){
  data=JSON.parse(todoall)
}else{

data=[
  

];



}
createTasks();
