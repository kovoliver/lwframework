class VHTMLElement {
    public tagName:string = "";
    public classList:string[] = [];
    public id:string;
    private _innerHTML:string = "";
    protected attributes:object[] = [];
    protected children:object[] = [];

    constructor(tagName:string) {
        this.tagName = tagName;
    }

    set innerHTML(innerHTML:string) {
        this.children = [];
        this._innerHTML = innerHTML;
    }

    get innerHTML():string {
        return this._innerHTML;
    }

    public SetAttribute(attrName:string, attrValue:string):void {
        this.attributes.push({
            attrName:attrName,
            attrValue:attrValue
        });
    }

    public GetAttribute(attrName:string):string {
        return this.attributes[attrName];
    }

    public AppendChild(child:VHTMLElement) {
        this.children.push(child);
    }

    public ToString():string {
        let html = ``;

        let attributes = ``;
        let id = this.id !== undefined ? `id=${this.id}` : "";

        this.attributes.forEach((object:any)=> {
            attributes += `${object.attrName}="${object.attrValue}" `;
        });

        let classes = "";
        if(this.classList.length != 0)
            classes = `class="${this.classList.join(" ")}"`;

        attributes += `${id} `;
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

        let singletonTags:any = 
        ["area", "base", "br", "col", 
        "command", "embed", "hr", "img", 
        "input", "keygen", "link", "meta", 
        "param", "source", "track", "wbr"];

        if(!singletonTags.includes(this.tagName))
            html += `</${this.tagName}>`;

        return html;
    }

    public ToHtml():HTMLElement {
        let template = document.createElement("template");
        template.innerHTML = this.ToString();
        let clone = template.content.cloneNode(true);

        return clone.childNodes[0] as HTMLElement;
    }
}

export default VHTMLElement;