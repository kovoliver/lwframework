import VHTMLElement from "./VHTMLElement.js";

class VLinkElement extends VHTMLElement {
    /**
     * crossorigin
     * href
     * hreflang
     * media
     * referrerpolicy
     * rel
     * sizes
     * title
     * type
     */
    
    public crossorigin:string;
    public href:string;
    public hreflang:string;
    public media:string;
    public referrerpolicy:string;
    public rel:string;
    public sizes:string;
    public title:string;
    public type:string;

    constructor() {
        super("link");
    }

    public ToString():string {
        let html = ``;

        let attributes = ``;

        if(this.id !== undefined)
            this.attributes.push({attrName:"id", attrValue:this.id});
        if(this.crossorigin !== undefined)
            this.attributes.push({attrName:"crossorigin", attrValue:this.crossorigin});
        if(this.href !== undefined)
            this.attributes.push({attrName:"href", attrValue:this.href});
        if(this.hreflang !== undefined)
            this.attributes.push({attrName:"hreflang", attrValue:this.hreflang});
        if(this.media !== undefined)
            this.attributes.push({attrName:"media", attrValue:this.media});
        if(this.referrerpolicy !== undefined)
            this.attributes.push({attrName:"referrerpolicy", attrValue:this.referrerpolicy});
        if(this.rel.length !== undefined)
            this.attributes.push({attrName:"rel", attrValue:this.rel});
        if(this.sizes.length !== undefined)
            this.attributes.push({attrName:"sizes", attrValue:this.sizes});
        if(this.title.length !== undefined)
            this.attributes.push({attrName:"title", attrValue:this.title});
        if(this.type.length !== undefined)
            this.attributes.push({attrName:"type", attrValue:this.type});

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

export default VLinkElement;