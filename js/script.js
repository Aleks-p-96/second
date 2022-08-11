'use strict'

const input = document.getElementById('input-task');
// console.log(input);
const addButton = document.getElementById("add-task-btn");
// console.log(addButton);
const taskList = document.getElementById('tasks');
// console.log(tasks);

// console.log(input);


addButton.addEventListener('click', function(event) {
    if (input.value != '') {
    const result = document.createElement(`li`);
    result.setAttribute('class','task-element');
    result.innerHTML = (`<input type = checkbox <span>${input.value}</span><button>X</button>`);
    tasks.append(result);
    // console.log(result);
}});

tasks.addEventListener('click', function(event) {
    if (event.target.closest('button')) {
        let target = event.target.closest('button');
        let parentElement = target.parentElement;
        // console.log(parentElement);
        parentElement.remove();
    }
    if (event.target.closest('input')) {
        let target = event.target.closest('input');
        let parentElement = target.parentElement;
        parentElement.classList.toggle('completed');
    }
} )