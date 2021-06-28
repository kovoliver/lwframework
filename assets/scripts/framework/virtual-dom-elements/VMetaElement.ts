import VHTMLElement from "./VHTMLElement.js";

class VMetaElement extends VHTMLElement {
    /**
     * charset
     * content
     * http-equiv
     * name
     */

     public charset:string;
     public content:string;
     public httpEquviv:string;
     public name:string;

     /**
      *
      */
    constructor() {
         super("meta");
    }

    public ToString():string {
        let html = ``;

        let attributes = ``;

        if(this.id !== undefined)
            this.attributes.push({attrName:"id", attrValue:this.id});
        if(this.charset !== undefined)
            this.attributes.push({attrName:"charset", attrValue:this.charset});
        if(this.content !== undefined)
            this.attributes.push({attrName:"content", attrValue:this.content});
        if(this.httpEquviv !== undefined)
            this.attributes.push({attrName:"http-equiv", attrValue:this.httpEquviv});
        if(this.name !== undefined)
            this.attributes.push({attrName:"name", attrValue:this.name});
        
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

export default VMetaElement;