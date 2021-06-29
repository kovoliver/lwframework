var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import VHTMLElement from "./VHTMLElement.js";
var VScriptElement = /** @class */ (function (_super) {
    __extends(VScriptElement, _super);
    /**
     *
     */
    function VScriptElement() {
        return _super.call(this, "script") || this;
    }
    VScriptElement.prototype.ToString = function () {
        var html = "";
        var attributes = "";
        if (this.id !== undefined)
            this.attributes.push({ attrName: "id", attrValue: this.id });
        if (this.async !== undefined)
            this.attributes.push({ attrName: "async", attrValue: this.async });
        if (this.src !== undefined)
            this.attributes.push({ attrName: "src", attrValue: this.src });
        if (this.type !== undefined)
            this.attributes.push({ attrName: "type", attrValue: this.type });
        this.attributes.forEach(function (object) {
            attributes += object.attrName + "=\"" + object.attrValue + "\" ";
        });
        if (this.defer !== undefined)
            attributes += "defer";
        var classes = "";
        if (this.classList.length != 0)
            classes = "class=\"" + this.classList.join(" ") + "\"";
        attributes += classes;
        attributes = attributes.trim();
        html += "<" + this.tagName + " " + attributes + ">";
        if (this.innerHTML.length > 0)
            html += this.innerHTML;
        if (this.children.length > 0) {
            this.children.forEach(function (element) {
                html += element.ToString();
            });
        }
        return html;
    };
    return VScriptElement;
}(VHTMLElement));
export default VScriptElement;
