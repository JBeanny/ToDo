const clearStorage = () => {
    const keys = Object.keys(localStorage);
    keys.forEach((value) => {
        if(value.includes("TODO")) localStorage.removeItem(value);
    })
    window.location.reload();
}
