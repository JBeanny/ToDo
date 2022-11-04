export function doTask(list,index){
    localStorage.removeItem(index);
    localStorage.setItem(`Ongoing Task`,JSON.stringify(list));
    window.location.reload();
}

