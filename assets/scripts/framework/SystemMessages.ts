class SystemMessages {
    private messages:object[] = [];

    public AddMessage(id:string, value:string):void {
        const obj = {

        };
        obj[id] = value;

        this.messages.push(obj);
    }

    public GetMessages() {
        return this.messages;
    }

    public DisplayMessages(messages:object[]) {
        messages.forEach((message:any)=> {
            const messageHolder:HTMLElement = document.querySelector("#" + message.id);

            if(messageHolder !== null) 
                messageHolder.innerHTML = message.value;
        });
    }
}

export default SystemMessages;