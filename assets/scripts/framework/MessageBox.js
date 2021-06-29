var MessageBox = /** @class */ (function () {
    function MessageBox() {
    }
    MessageBox.Show = function (message, OKBtn, RejectBtn) {
        if (OKBtn === void 0) { OKBtn = null; }
        if (RejectBtn === void 0) { RejectBtn = null; }
        var messageHolder = document.querySelector("#message-holder");
        var buttonHolder = document.querySelector("#button-holder");
        var messageBox = document.querySelector("#message-box");
        messageHolder.innerHTML = "";
        buttonHolder.innerHTML = "";
        messageHolder.appendChild(message);
        if (OKBtn !== null)
            buttonHolder.appendChild(OKBtn);
        if (RejectBtn !== null)
            buttonHolder.appendChild(RejectBtn);
        messageBox.style.display = "block";
        messageBox.style.top = (window.innerHeight - 320) / 2 + "px";
        messageBox.style.left = (window.innerWidth - 280) / 2 + "px";
    };
    MessageBox.Hide = function () {
        var messageBox = document.querySelector("#message-box");
        var counter = 1;
        if (messageBox.style.display != "block")
            return;
        var interval = setInterval(function () {
            counter -= 0.05;
            messageBox.setAttribute("style", "display:block;margin:auto;opacity:" + counter + ";");
            if (counter <= 0) {
                messageBox.setAttribute("style", "display:none;");
                clearInterval(interval);
            }
        }, 15);
    };
    MessageBox.Progress = function (percentage) {
        MessageBox.progressBar.setAttribute("value", percentage.toString());
        var progressbarHolder = document.querySelector("#progressbar-holder");
        progressbarHolder.style.display = "block";
        if (percentage == 100) {
            MessageBox.progressBar.setAttribute("value", "0");
            progressbarHolder.style.display = "none";
            //document.querySelector("#loading").style.display = "block";
        }
    };
    MessageBox.progressBar = document.querySelector("#progressBar");
    return MessageBox;
}());
export default MessageBox;
