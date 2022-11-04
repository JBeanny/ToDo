// const doTask = require('./doTask');
import {doTask} from './doTask.js';

const customButton = ({style,index,list}) => {
    const button = document.createElement("button");
    button.classList.add(style);
    button.value = `${index}`
    button.addEventListener('click',() => doTask(list,index))

    return button;
}

const getOngoingTask = () => {
    const ongoing_task = JSON.parse(localStorage.getItem("Ongoing Task"));
    return ongoing_task ? ongoing_task.task_name : "No task"
}

const fetchData = () => {
    const tasks = Object.keys(localStorage);
    const toDoTasks = tasks.filter((value) => {
        return value.includes("TODO")
    })
    const length = toDoTasks.length;

    toDoTasks.forEach((value) => {
        const task = JSON.parse(localStorage.getItem(value));
    
            const liNode = document.createElement("li");
            liNode.classList.add("task-li");

            //create button
            const doBtn = customButton({style: "do-btn",index: value,list: task});
    
            //set localStorage data into variable
            const task_name = document.createTextNode(`Task: ${task.task_name}`);
            const task_datetime = document.createTextNode(`Created On: ${task.task_datetime}`);
            const task_type = document.createTextNode(`Type: ${task.task_type}`);
            const timer = document.createTextNode(`Timer: ${task.timer}`);

            const data = [
                task_name,
                task_datetime,
                task_type,
                timer
            ]

            const spans = [];
            const taskLength = Object.entries(task).length;
            for(let i=0;i<taskLength;i++){
                spans.push(document.createElement("span"));
                spans[i].classList.add("li-text");
                spans[i].appendChild(data[i])
                liNode.appendChild(spans[i]);
            }
            liNode.appendChild(doBtn);
    
            document.querySelector(".task-ul").appendChild(liNode);
        })
    document.querySelector(".ongoing").innerHTML = `${getOngoingTask()} is ongoing`;
}


fetchData();