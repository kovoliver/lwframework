var LazySizes = /** @class */ (function () {
    function LazySizes() {
    }
    LazySizes.Init = function () {
        var _this = this;
        this.lazyImgs = document.querySelectorAll(".lazyload");
        window.onload = function () {
            _this.lazyImgs.forEach(function (img) {
                var dataSrc = img.getAttribute("data-src");
                if (dataSrc !== null) {
                    img.removeAttribute("data-src");
                    img.setAttribute("src", dataSrc);
                }
            });
        };
    };
    return LazySizes;
}());
export default LazySizes;
