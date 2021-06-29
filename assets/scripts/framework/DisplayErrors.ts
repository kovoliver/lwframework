import MessageBox from "./MessageBox.js";

function ErrorDisplayer(item:any) {
    //ez egy array lesz
    let errors = "";
    let message = "";
    return errors;
}

function DisplayErrors(errorMessages:string[], OKBtn:HTMLElement, 
    rejectBtn:any = null) {
    let errors = document.createElement("div");
    let messages = "";
    
    errorMessages.forEach((message)=> {
        messages += `<h4>${message}</h4>`;
    });

    errors.innerHTML += messages

    if(messages.length == 0) {
        MessageBox.Hide();
        return true;
    } else {
        MessageBox.Show(errors, OKBtn, rejectBtn);
    }
    
    return false;
}

export default DisplayErrors;