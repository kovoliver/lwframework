function clearInputs(formID) {
    let inputs = document.querySelectorAll(`#${formID} input`);
    let textareas = document.querySelectorAll(`#${formID} textarea`);

    inputs.forEach((item:HTMLInputElement)=>{
        if(item.type == "text" || item.type == "password" 
        || item.type == "number" || item.type == "email" 
        || item.type == "phone" || item.type == "file")
            item.value = "";
    });

    textareas.forEach((item:HTMLInputElement)=>{
        item.value = "";
    });
}

export default clearInputs;