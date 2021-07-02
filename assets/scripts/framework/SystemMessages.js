var SystemMessages = /** @class */ (function () {
    function SystemMessages() {
        this.messages = [];
    }
    SystemMessages.prototype.AddMessage = function (id, value) {
        var obj = {};
        obj[id] = value;
        this.messages.push(obj);
    };
    SystemMessages.prototype.GetMessages = function () {
        return this.messages;
    };
    SystemMessages.prototype.DisplayMessages = function (messages) {
        messages.forEach(function (message) {
            var messageHolder = document.querySelector("#" + message.id);
            if (messageHolder !== null)
                messageHolder.innerHTML = message.value;
        });
    };
    return SystemMessages;
}());
export default SystemMessages;
