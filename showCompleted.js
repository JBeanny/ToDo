const cancelCompleted = () => {
    document.querySelector(".completed-task-ul").innerHTML = "";
    document.querySelector(".completed-task-container").style.display = "none";
}

const showCompleted = () => {
    const container = document.querySelector(".completed-task-container");
    container.style.display = "flex";
    const completedTask = JSON.parse(localStorage.getItem("Completed")).filter((val) => val);
    const itemLi = [];
    completedTask.map((val,index) => {
        itemLi.push(document.createElement("li"));

        const spanElement1 = document.createElement('span');
        spanElement1.appendChild(document.createTextNode(`${index+1}. Task Name: ${val.task_name}`));   
        itemLi[index].appendChild(spanElement1);

        const spanElement2 = document.createElement('span');
        spanElement2.appendChild(document.createTextNode(`Created On: ${val.task_datetime}`));
        itemLi[index].appendChild(spanElement2);

        document.querySelector('.completed-task-ul').appendChild(itemLi[index]);
    })
}