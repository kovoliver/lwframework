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
var VLinkElement = /** @class */ (function (_super) {
    __extends(VLinkElement, _super);
    function VLinkElement() {
        return _super.call(this, "link") || this;
    }
    VLinkElement.prototype.ToString = function () {
        var html = "";
        var attributes = "";
        if (this.id !== undefined)
            this.attributes.push({ attrName: "id", attrValue: this.id });
        if (this.crossorigin !== undefined)
            this.attributes.push({ attrName: "crossorigin", attrValue: this.crossorigin });
        if (this.href !== undefined)
            this.attributes.push({ attrName: "href", attrValue: this.href });
        if (this.hreflang !== undefined)
            this.attributes.push({ attrName: "hreflang", attrValue: this.hreflang });
        if (this.media !== undefined)
            this.attributes.push({ attrName: "media", attrValue: this.media });
        if (this.referrerpolicy !== undefined)
            this.attributes.push({ attrName: "referrerpolicy", attrValue: this.referrerpolicy });
        if (this.rel.length !== undefined)
            this.attributes.push({ attrName: "rel", attrValue: this.rel });
        if (this.sizes.length !== undefined)
            this.attributes.push({ attrName: "sizes", attrValue: this.sizes });
        if (this.title.length !== undefined)
            this.attributes.push({ attrName: "title", attrValue: this.title });
        if (this.type.length !== undefined)
            this.attributes.push({ attrName: "type", attrValue: this.type });
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
    return VLinkElement;
}(VHTMLElement));
export default VLinkElement;
