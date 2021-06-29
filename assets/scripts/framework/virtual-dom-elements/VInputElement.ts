import VHTMLElement from "./VHTMLElement.js";

class VInputElement extends VHTMLElement {
    public type:string;
    public min:number;
    public max:number;
    public disabled:boolean;
    public required:boolean;
    public minLength:number;
    public maxLength:number;
    public placeholder:string;
    public name:string;

    constructor() {
        super("input");
    }

    public ToString():string {
        let html = ``;

        let attributes = ``;

        if(this.id !== undefined)
            this.attributes.push({attrName:"id", attrValue:this.id});
        if(this.type !== undefined)
            this.attributes.push({attrName:"type", attrValue:this.type});
        if(this.min !== undefined)
            this.attributes.push({attrName:"min", attrValue:this.min});
        if(this.max !== undefined)
            this.attributes.push({attrName:"max", attrValue:this.max});
        if(this.minLength !== undefined)
            this.attributes.push({attrName:"minlength", attrValue:this.minLength});
        if(this.maxLength !== undefined)
            this.attributes.push({attrName:"maxlength", attrValue:this.maxLength});
        if(this.placeholder !== undefined)
            this.attributes.push({attrName:"placeholder", attrValue:this.placeholder});
        if(this.name !== undefined)
            this.attributes.push({attrName:"name", attrValue:this.name});

        this.attributes.forEach((object:any)=> {
            attributes += `${object.attrName}="${object.attrValue}" `;
        });

        if(this.disabled !== undefined)
            attributes += `disabled `;
        if(this.required !== undefined)
            attributes += `required `;

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

export default VInputElement;