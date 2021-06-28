class MessageBox {
    private static progressBar:HTMLElement = document.querySelector("#progressBar");
    public static Show(message:HTMLElement,
        OKBtn:HTMLElement = null, RejectBtn:HTMLElement = null) {

        let messageHolder:any = document.querySelector("#message-holder");
        let buttonHolder:any = document.querySelector("#button-holder");
        let messageBox:any = document.querySelector("#message-box");
        messageHolder.innerHTML = "";
        buttonHolder.innerHTML = "";
        messageHolder.appendChild(message);
        if(OKBtn !== null)
            buttonHolder.appendChild(OKBtn);
        if(RejectBtn !== null)
            buttonHolder.appendChild(RejectBtn);
        
        messageBox.style.display = "block";
        messageBox.style.top = (window.innerHeight-320)/2 + "px";
        messageBox.style.left = (window.innerWidth-280)/2 + "px";
    }

    public static Hide() {
        let messageBox:any = document.querySelector("#message-box");
        let counter = 1;

        if(messageBox.style.display != "block")
            return;

        let interval = setInterval(()=> {
            counter -= 0.05;
            messageBox.setAttribute("style", `display:block;margin:auto;opacity:${counter};`);
            
            if(counter <= 0) {
                messageBox.setAttribute("style", `display:none;`);
                clearInterval(interval);
            }
        }, 15);
    }

    public static Progress(percentage:number) {
        MessageBox.progressBar.setAttribute("value", percentage.toString());
        let progressbarHolder:HTMLElement = document.querySelector("#progressbar-holder");

        progressbarHolder.style.display = "block";
        if(percentage == 100) {
            MessageBox.progressBar.setAttribute("value", "0");
            progressbarHolder.style.display = "none";
            //document.querySelector("#loading").style.display = "block";
        }
    }
}

export default MessageBox;