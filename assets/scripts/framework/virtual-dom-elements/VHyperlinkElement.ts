import VHTMLElement from "./VHTMLElement.js";

class VHyperlinkElement extends VHTMLElement {
    public href:string;
    public target:string;

    constructor() {
        super("a");
    }

    public ToString():string {
        let html = ``;

        let attributes = ``;

        if(this.id !== undefined)
            this.attributes.push({attrName:"id", attrValue:this.id});
        if(this.href !== undefined)
            this.attributes.push({attrName:"href", attrValue:this.href});
        if(this.target !== undefined)
            this.attributes.push({attrName:"target", attrValue:this.target});

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

        html += `</${this.tagName}>`;

        return html;
    }
}

export default VHyperlinkElement;