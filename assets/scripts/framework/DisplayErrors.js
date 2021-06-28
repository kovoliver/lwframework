import MessageBox from "./MessageBox.js";
function ErrorDisplayer(item) {
    //ez egy array lesz
    var errors = "";
    var message = "";
    return errors;
}
function DisplayErrors(errorMessages, OKBtn, rejectBtn) {
    if (rejectBtn === void 0) { rejectBtn = null; }
    var errors = document.createElement("div");
    var messages = "";
    errorMessages.forEach(function (message) {
        messages += "<h4>" + message + "</h4>";
    });
    errors.innerHTML += messages;
    if (messages.length == 0) {
        MessageBox.Hide();
        return true;
    }
    else {
        MessageBox.Show(errors, OKBtn, rejectBtn);
    }
    return false;
}
export default DisplayErrors;
