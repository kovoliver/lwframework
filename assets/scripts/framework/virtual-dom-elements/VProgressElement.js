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
var VProgressElement = /** @class */ (function (_super) {
    __extends(VProgressElement, _super);
    /**
     *
     */
    function VProgressElement() {
        return _super.call(this, "progress") || this;
    }
    VProgressElement.prototype.ToString = function () {
        var html = "";
        var attributes = "";
        if (this.id.length !== undefined)
            this.attributes.push({ attrName: "id", attrValue: this.id });
        if (this.value !== undefined)
            this.attributes.push({ attrName: "value", attrValue: this.value });
        if (this.max !== undefined)
            this.attributes.push({ attrName: "max", attrValue: this.max });
        this.attributes.forEach(function (object) {
            attributes += object.attrName + "=\"" + object.attrValue + "\" ";
        });
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
    return VProgressElement;
}(VHTMLElement));
export default VProgressElement;
