import VirtualDom from "../framework/VirtualDom.js";
import VHTMLElement from "./virtual-dom-elements/VHTMLElement.js";

class HTMLMaker {
    public static MakeBtn(subtitle:string, classes:string[], id:string = ""):HTMLElement {
        let btn:VHTMLElement = VirtualDom.CreateElement("button");

        btn.innerHTML = subtitle;
        classes.forEach((cls)=> {
            btn.classList.push(cls);
        });

        if(id.length != 0)
            btn.id = id;
 
        return btn.ToHtml();
    }

    public static MakeHeadings(subtitle:string, size:string):HTMLElement {
        let headings:VHTMLElement = VirtualDom.CreateElement(size);
        headings.innerHTML = subtitle;

        return headings.ToHtml();
    }
}

export default HTMLMaker;