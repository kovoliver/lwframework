var VHTMLElement = /** @class */ (function () {
    function VHTMLElement(tagName) {
        this.tagName = "";
        this.classList = [];
        this._innerHTML = "";
        this.attributes = [];
        this.children = [];
        this.tagName = tagName;
    }
    Object.defineProperty(VHTMLElement.prototype, "innerHTML", {
        get: function () {
            return this._innerHTML;
        },
        set: function (innerHTML) {
            this.children = [];
            this._innerHTML = innerHTML;
        },
        enumerable: true,
        configurable: true
    });
    VHTMLElement.prototype.SetAttribute = function (attrName, attrValue) {
        this.attributes.push({
            attrName: attrName,
            attrValue: attrValue
        });
    };
    VHTMLElement.prototype.GetAttribute = function (attrName) {
        return this.attributes[attrName];
    };
    VHTMLElement.prototype.AppendChild = function (child) {
        this.children.push(child);
    };
    VHTMLElement.prototype.ToString = function () {
        var html = "";
        var attributes = "";
        var id = this.id !== undefined ? "id=" + this.id : "";
        this.attributes.forEach(function (object) {
            attributes += object.attrName + "=\"" + object.attrValue + "\" ";
        });
        var classes = "";
        if (this.classList.length != 0)
            classes = "class=\"" + this.classList.join(" ") + "\"";
        attributes += id + " ";
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
        var singletonTags = ["area", "base", "br", "col",
            "command", "embed", "hr", "img",
            "input", "keygen", "link", "meta",
            "param", "source", "track", "wbr"];
        if (!singletonTags.includes(this.tagName))
            html += "</" + this.tagName + ">";
        return html;
    };
    VHTMLElement.prototype.ToHtml = function () {
        var template = document.createElement("template");
        template.innerHTML = this.ToString();
        var clone = template.content.cloneNode(true);
        return clone.childNodes[0];
    };
    return VHTMLElement;
}());
export default VHTMLElement;
