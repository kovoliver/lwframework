function clearInputs(formID) {
    var inputs = document.querySelectorAll("#" + formID + " input");
    var textareas = document.querySelectorAll("#" + formID + " textarea");
    inputs.forEach(function (item) {
        if (item.type == "text" || item.type == "password"
            || item.type == "number" || item.type == "email"
            || item.type == "phone" || item.type == "file")
            item.value = "";
    });
    textareas.forEach(function (item) {
        item.value = "";
    });
}
export default clearInputs;
