import VHTMLElement from "./virtual-dom-elements/VHTMLElement.js";
import VHyperlinkElement from "./virtual-dom-elements/VHyperlinkElement.js";
import VIframeElement from "./virtual-dom-elements/VIframeElement.js";
import VImgElement from "./virtual-dom-elements/VImgElement.js";
import VInputElement from "./virtual-dom-elements/VInputElement.js";
import VLinkElement from "./virtual-dom-elements/VLinkElement.js";
import VMetaElement from "./virtual-dom-elements/VMetaElement.js";
import VProgressElement from "./virtual-dom-elements/VProgressElement.js";
import VScriptElement from "./virtual-dom-elements/VScriptElement.js";

class VirtualDom  {
    private static storedElements:object[] = [];

    public static GetStoredElements():object[] {
        return this.storedElements;
    }

    public static CreateElement(tagName:string, 
        classes:string[] = [], id:string = "", attributes:object[] = []) {
        let element:VHTMLElement;
        
        switch(tagName) {
            case "a":
                element = new VHyperlinkElement();
                break;
            case "iframe":
                element = new VIframeElement();
                break;
            case "img":
                element = new VImgElement();
                break;
            case "input":
                element = new VInputElement();
                break;
            case "link":
                element = new VLinkElement();
                break;
            case "meta":
                element = new VMetaElement();
                break;
            case "progress":
                element = new VProgressElement();
                break;
            case "script":
                element = new VScriptElement();
                break;
            default:
                element = new VHTMLElement(tagName);
                break;
        }

        element.classList = classes;
        if(id != "")
            element.id = id;

        attributes.forEach((object:any)=> {
            element.SetAttribute(object.attrName, object.attrValue);
        });

        this.storedElements.push(element);
        return element;
    }
}

export default VirtualDom;