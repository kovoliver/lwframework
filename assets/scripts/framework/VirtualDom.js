import VHTMLElement from "./virtual-dom-elements/VHTMLElement.js";
import VHyperlinkElement from "./virtual-dom-elements/VHyperlinkElement.js";
import VIframeElement from "./virtual-dom-elements/VIframeElement.js";
import VImgElement from "./virtual-dom-elements/VImgElement.js";
import VInputElement from "./virtual-dom-elements/VInputElement.js";
import VLinkElement from "./virtual-dom-elements/VLinkElement.js";
import VMetaElement from "./virtual-dom-elements/VMetaElement.js";
import VProgressElement from "./virtual-dom-elements/VProgressElement.js";
import VScriptElement from "./virtual-dom-elements/VScriptElement.js";
var VirtualDom = /** @class */ (function () {
    function VirtualDom() {
    }
    VirtualDom.GetStoredElements = function () {
        return this.storedElements;
    };
    VirtualDom.CreateElement = function (tagName, classes, id, attributes) {
        if (classes === void 0) { classes = []; }
        if (id === void 0) { id = ""; }
        if (attributes === void 0) { attributes = []; }
        var element;
        switch (tagName) {
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
        if (id != "")
            element.id = id;
        attributes.forEach(function (object) {
            element.SetAttribute(object.attrName, object.attrValue);
        });
        this.storedElements.push(element);
        return element;
    };
    VirtualDom.storedElements = [];
    return VirtualDom;
}());
export default VirtualDom;
