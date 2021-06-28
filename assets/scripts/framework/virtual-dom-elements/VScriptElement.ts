import VHTMLElement from "./VHTMLElement.js";

class VScriptElement extends VHTMLElement {
    /**
     * async 
     * charset
     * defer
     * src
     * type
     */
    public async:boolean;
    public charset:string;
    public defer:boolean;
    public src:string;
    public type:string;

    /**
     *
     */
    constructor() {
        super("script");
    }

    public ToString():string {
        let html = ``;

        let attributes = ``;

        if(this.id !== undefined)
            this.attributes.push({attrName:"id", attrValue:this.id});
        if(this.async !== undefined)
            this.attributes.push({attrName:"async", attrValue:this.async});
        if(this.src !== undefined)
            this.attributes.push({attrName:"src", attrValue:this.src});
        if(this.type !== undefined)
            this.attributes.push({attrName:"type", attrValue:this.type});

        this.attributes.forEach((object:any)=> {
            attributes += `${object.attrName}="${object.attrValue}" `;
        });

        if(this.defer !== undefined)
            attributes += "defer";

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

export default VScriptElement;