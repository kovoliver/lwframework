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
var VInputElement = /** @class */ (function (_super) {
    __extends(VInputElement, _super);
    function VInputElement() {
        return _super.call(this, "input") || this;
    }
    VInputElement.prototype.ToString = function () {
        var html = "";
        var attributes = "";
        if (this.id !== undefined)
            this.attributes.push({ attrName: "id", attrValue: this.id });
        if (this.type !== undefined)
            this.attributes.push({ attrName: "type", attrValue: this.type });
        if (this.min !== undefined)
            this.attributes.push({ attrName: "min", attrValue: this.min });
        if (this.max !== undefined)
            this.attributes.push({ attrName: "max", attrValue: this.max });
        if (this.minLength !== undefined)
            this.attributes.push({ attrName: "minlength", attrValue: this.minLength });
        if (this.maxLength !== undefined)
            this.attributes.push({ attrName: "maxlength", attrValue: this.maxLength });
        if (this.placeholder !== undefined)
            this.attributes.push({ attrName: "placeholder", attrValue: this.placeholder });
        if (this.name !== undefined)
            this.attributes.push({ attrName: "name", attrValue: this.name });
        this.attributes.forEach(function (object) {
            attributes += object.attrName + "=\"" + object.attrValue + "\" ";
        });
        if (this.disabled !== undefined)
            attributes += "disabled ";
        if (this.required !== undefined)
            attributes += "required ";
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
    return VInputElement;
}(VHTMLElement));
export default VInputElement;
