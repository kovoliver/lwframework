import FormDataCollector from "./FormDataCollector.js";
/**
 * Automatikusan összeszedi egy form adatait,
 * hogy keresni lehessen az adatbázisban.
 */
/**
 * Hogyha üres az érték a stringek esetében,
 * vagy -1 a számok esetében, akkor nem fűzi hozzá
 * a keresési paraméterekhez.
 */
var Search = /** @class */ (function () {
    function Search() {
    }
    Search.SearchParams = function (formID) {
        var searchParams = "?";
        var object = FormDataCollector.CollectData(formID);
        var keys = Object.keys(object);
        keys.forEach(function (element) {
            var value = object[element];
            if (value != "")
                searchParams += "&" + encodeURIComponent(element) + "=" + encodeURIComponent(value);
        });
        return searchParams.substr(2, searchParams.length);
    };
    Search.GetUrlparams = function () {
        var params = window.location.search;
        params = params.replace("?", "");
        var paramsArray = params.split("&");
        var urlObject = {};
        if (params.length == 0)
            return {};
        paramsArray.forEach(function (urlParam) {
            var paramParts = urlParam.split("=");
            urlObject[paramParts[0]] = decodeURIComponent(paramParts[1]);
        });
        return urlObject;
    };
    Search.GetPathParams = function () {
        var pathName = window.location.pathname.split("&");
        var path = pathName[0];
        path = path.replace(/^\/|\/$/g, '');
        var pathArray = path.split("/");
        pathArray = pathArray.slice(pathArray.length - 3, pathArray.length);
        return pathArray;
    };
    return Search;
}());
export default Search;
