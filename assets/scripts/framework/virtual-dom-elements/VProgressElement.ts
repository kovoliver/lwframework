import VHTMLElement from "./VHTMLElement.js";

class VProgressElement extends VHTMLElement {
    public value:number;
    public max:number;

    /**
     *
     */
    constructor() {
        super("progress");
    }

    public ToString():string {
        let html = ``;

        let attributes = ``;

        if(this.id.length !== undefined)
            this.attributes.push({attrName:"id", attrValue:this.id});
        if(this.value !== undefined)
            this.attributes.push({attrName:"value", attrValue:this.value});
        if(this.max !== undefined)
            this.attributes.push({attrName:"max", attrValue:this.max});

        this.attributes.forEach((object:any)=> {
            attributes += `${object.attrName}="${object.attrValue}" `;
        });

        let classes = "";
        if(this.classList.length != 0)
            classes = `class="${this.classList.join(" ")}"`;

        attributes += classes;
        attributes = attributes.trim();

        html += `<${this.tagName} ${attributes}>`;
        if(this.innerHTML.length > 0)
            html += this.innerHTML;

        if(this.children.length > 0) {
            this.children.forEach((element:any)=> {
                html += element.ToString();
            });
        }

        return html;
    }
}

export default VProgressElement;