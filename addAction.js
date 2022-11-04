const add = () => {
    const form = document.forms["toDoForm"];
    
    const task = form["task-name"].value;
    const taskType = form["task-type"].value;
    const localDateTime = form["created-on"].value;

    const hour = form["hour"].value;
    const minute = form["minute"].value;
    const second = form["second"].value;

    const timer = `${hour}h:${minute}mn:${second}s`;

    const localStorageData = Object.keys(localStorage).filter((val) => val.includes("TODO"));
    const localStorageLength = localStorageData.map((value) => {
        return Number(value.split('-')[1]);
    });

    const nextToDo = localStorageLength.length ? Math.max(...localStorageLength) + 1 : 1;

    if(task && taskType && localDateTime && timer){
        const data = {
            task_name: task,
            task_type: taskType,
            task_datetime: localDateTime,
            timer: timer
        }
        localStorage.setItem(`TODO-${nextToDo}`,JSON.stringify(data));
    }else{
        alert("Some input is missing information !")
    }
    window.location.reload();
}