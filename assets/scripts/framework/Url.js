var localHostPath = "icoma_uj";
var Url = /** @class */ (function () {
    function Url() {
    }
    Url.GetUrlArray = function () {
        var pathMatch = window.location.pathname.match(/(?!\/)[\w\/]*/);
        var path = pathMatch !== null ? pathMatch[0] : "";
        var pathArray = path.split("/");
        var newPathArray = [];
        pathArray.forEach(function (el) {
            if (el != localHostPath && el.length > 0)
                newPathArray.push(el);
        });
        return newPathArray;
    };
    Url.GetBaseUrl = function () {
        var getUrl = window.location;
        var baseUrl = getUrl.protocol + "//" + getUrl.host;
        if (getUrl.host == "localhost")
            baseUrl += "/" + localHostPath;
        return baseUrl;
    };
    Url.ChangeUrl = function (page, url) {
        if (typeof (history.pushState) !== undefined) {
            var obj = { Page: page, Url: url };
            history.pushState(obj, obj.Page, obj.Url);
        }
        else {
            alert("Browser does not support HTML5.");
        }
    };
    Url.GetQueryVariable = function (variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) {
                return pair[1];
            }
        }
        return "";
    };
    return Url;
}());
export default Url;
