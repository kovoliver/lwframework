import VirtualDom from "../framework/VirtualDom.js";
var HTMLMaker = /** @class */ (function () {
    function HTMLMaker() {
    }
    HTMLMaker.MakeBtn = function (subtitle, classes, id) {
        if (id === void 0) { id = ""; }
        var btn = VirtualDom.CreateElement("button");
        btn.innerHTML = subtitle;
        classes.forEach(function (cls) {
            btn.classList.push(cls);
        });
        if (id.length != 0)
            btn.id = id;
        return btn.ToHtml();
    };
    HTMLMaker.MakeHeadings = function (subtitle, size) {
        var headings = VirtualDom.CreateElement(size);
        headings.innerHTML = subtitle;
        return headings.ToHtml();
    };
    return HTMLMaker;
}());
export default HTMLMaker;
