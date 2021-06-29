import VirtualDom from "../framework/VirtualDom.js";
var ImgPreview = /** @class */ (function () {
    function ImgPreview() {
    }
    ImgPreview.Preview = function (inputID, holderID, imgClass, holderClass, allowedExtensions) {
        if (imgClass === void 0) { imgClass = ""; }
        if (holderClass === void 0) { holderClass = ""; }
        if (allowedExtensions === void 0) { allowedExtensions = ["bmp", "jpg", "png", "jpeg"]; }
        var errors = "";
        var input = document.querySelector("#" + inputID);
        var holder = document.querySelector("#" + holderID);
        holder.innerHTML = "";
        var _loop_1 = function () {
            reader = new FileReader();
            var imgIndex = i;
            var fileName = input.files[i].name;
            var extension = fileName.split(".")[1].toLowerCase();
            if (allowedExtensions.includes(extension)) {
                reader.onload = function (e) {
                    var holderDiv = VirtualDom.CreateElement("div", [holderClass]);
                    var i = VirtualDom.CreateElement("i", ["fas", "fa-trash-alt", "icon", "delete-icon", "preview-delete"]);
                    var img = VirtualDom.CreateElement("img", [imgClass]);
                    img.SetAttribute("file-name", fileName);
                    img.SetAttribute("src", e.target.result.toString());
                    holderDiv.AppendChild(img);
                    holderDiv.AppendChild(i);
                    holder.appendChild(holderDiv.ToHtml());
                };
                reader.readAsDataURL(input.files[i]);
            }
            else {
                errors += "A " + fileName + " nem megengedett kiterjeszt\u00E9ssel rendelkezik!";
            }
        };
        var reader;
        for (var i = 0; i < input.files.length; i++) {
            _loop_1();
        }
        if (errors.length > 0)
            throw errors;
    };
    return ImgPreview;
}());
export default ImgPreview;
