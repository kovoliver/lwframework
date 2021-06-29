import VHTMLElement from "./VHTMLElement.js";

class VImgElement extends VHTMLElement {
    public src:string;
    public title:string;
    public alt:string;

    constructor() {
        super("img");
    }

    public ToString():string {
        let html = ``;

        let attributes = ``;

        if(this.id !== undefined)
            this.attributes.push({attrName:"id", attrValue:this.id});
        if(this.src !== undefined)
            this.attributes.push({attrName:"src", attrValue:this.src});
        if(this.title !== undefined)
            this.attributes.push({attrName:"title", attrValue:this.title});
        if(this.alt !== undefined)
            this.attributes.push({attrName:"alt", attrValue:this.alt});

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

export default VImgElement;