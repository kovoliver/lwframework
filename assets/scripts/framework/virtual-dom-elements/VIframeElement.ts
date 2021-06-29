import VHTMLElement from "./VHTMLElement.js";

class VIframeElement extends VHTMLElement {
    /**
     * allow
     * allowfullscreen
     * allowpaymentrequest
     * height
     * name
     * referrerpolicy
     * sandbox
     * src
     * srcdoc
     * width
     */

    public allowfullscreen:boolean;
    public allowPaymentRequest:boolean;
    public height:number;
    public width:number;
    public name:string;
    public referrerPolicy:string;
    public sandbox:string;
    public src:string;
    public srcDoc:string;
    
    constructor() {
        super("iframe");
    }

    public ToString():string {
        let html = ``;

        let attributes = ``;

        if(this.id !== undefined)
            this.attributes.push({attrName:"id", attrValue:this.id});
        if(this.allowfullscreen !== undefined)
            this.attributes.push({attrName:"allowfullscreen", attrValue:this.allowfullscreen});
        if(this.allowPaymentRequest !== undefined)
            this.attributes.push({attrName:"allowpaymentrequest", attrValue:this.allowPaymentRequest});
        if(this.height !== undefined)
            this.attributes.push({attrName:"height", attrValue:this.height});
        if(this.width !== undefined)
            this.attributes.push({attrName:"width", attrValue:this.width});
        if(this.name !== undefined)
            this.attributes.push({attrName:"name", attrValue:this.name});
        if(this.referrerPolicy !== undefined)
            this.attributes.push({attrName:"referrerpolicy", attrValue:this.referrerPolicy});
        if(this.sandbox !== undefined)
            this.attributes.push({attrName:"sandbox", attrValue:this.sandbox});
        if(this.src !== undefined)
            this.attributes.push({attrName:"src", attrValue:this.src});
        if(this.srcDoc !== undefined)
            this.attributes.push({attrName:"srcDoc", attrValue:this.srcDoc});
        
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

export default VIframeElement;