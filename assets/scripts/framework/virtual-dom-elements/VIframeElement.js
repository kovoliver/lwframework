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
var VIframeElement = /** @class */ (function (_super) {
    __extends(VIframeElement, _super);
    function VIframeElement() {
        return _super.call(this, "iframe") || this;
    }
    VIframeElement.prototype.ToString = function () {
        var html = "";
        var attributes = "";
        if (this.id !== undefined)
            this.attributes.push({ attrName: "id", attrValue: this.id });
        if (this.allowfullscreen !== undefined)
            this.attributes.push({ attrName: "allowfullscreen", attrValue: this.allowfullscreen });
        if (this.allowPaymentRequest !== undefined)
            this.attributes.push({ attrName: "allowpaymentrequest", attrValue: this.allowPaymentRequest });
        if (this.height !== undefined)
            this.attributes.push({ attrName: "height", attrValue: this.height });
        if (this.width !== undefined)
            this.attributes.push({ attrName: "width", attrValue: this.width });
        if (this.name !== undefined)
            this.attributes.push({ attrName: "name", attrValue: this.name });
        if (this.referrerPolicy !== undefined)
            this.attributes.push({ attrName: "referrerpolicy", attrValue: this.referrerPolicy });
        if (this.sandbox !== undefined)
            this.attributes.push({ attrName: "sandbox", attrValue: this.sandbox });
        if (this.src !== undefined)
            this.attributes.push({ attrName: "src", attrValue: this.src });
        if (this.srcDoc !== undefined)
            this.attributes.push({ attrName: "srcDoc", attrValue: this.srcDoc });
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
    return VIframeElement;
}(VHTMLElement));
export default VIframeElement;
