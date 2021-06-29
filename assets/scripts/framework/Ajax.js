import Url from "./Url.js";
var Ajax = /** @class */ (function () {
    function Ajax(ajaxObj) {
        this.method = "GET";
        this.url = "";
        this.contentType = "";
        this.errorString = "";
        this.urlEncodedString = "";
        this.CheckErrors(ajaxObj);
        if (ajaxObj.method !== undefined)
            this.method = ajaxObj.method;
        if (ajaxObj.url !== undefined)
            this.url = ajaxObj.url;
        this.formData = ajaxObj.file !== undefined
            ? ajaxObj.file : new FormData();
        this.SetContentType(ajaxObj.contentType);
        if (this.contentType == "application/x-www-form-urlencoded") {
            this.urlEncodedString = ajaxObj.data !== undefined ?
                Ajax.ObjectToUrlEncoded(ajaxObj.data) : "";
        }
        this.text = ajaxObj.contentType == "text"
            && ajaxObj.text !== undefined ? ajaxObj.text : "";
        this.json = ajaxObj.contentType == "json"
            && ajaxObj.json !== undefined ? ajaxObj.json : {};
        this.async = ajaxObj.async !== undefined ? ajaxObj.async : true;
        if (ajaxObj.headers !== undefined
            && ajaxObj.headers.name !== undefined
            && ajaxObj.headers.value !== undefined)
            this.xhttp.setRequestHeader(ajaxObj.headers.name, ajaxObj.headers.value);
        this.xhttp = new XMLHttpRequest();
    }
    Ajax.prototype.CheckErrors = function (ajaxObj) {
        this.errorString = "";
        if (ajaxObj.url === undefined)
            this.errorString += "You must specify the target URL! \n";
        if (ajaxObj.method === undefined)
            this.errorString += "You must specify the HTTP method! \n";
        if (ajaxObj.contentType == "file" && ajaxObj.file === undefined)
            this.errorString += "You have to add a FormData object to your ajax configuration object (new FormData())!";
        if (this.errorString.length != 0)
            throw this.errorString;
    };
    Ajax.prototype.SetContentType = function (contentType) {
        switch (contentType) {
            case "urlencoded":
                this.contentType = "application/x-www-form-urlencoded";
                break;
            case "file":
                this.contentType = "multipart/form-data";
                break;
            case "json":
                this.contentType = "application/json;charset=UTF-8";
                break;
            case "text":
                this.contentType = "text/plain;charset=UTF-8";
                break;
            default:
                this.contentType = "application/x-www-form-urlencoded";
                break;
        }
    };
    Ajax.ObjectToUrlEncoded = function (data) {
        var keys = Object.keys(data);
        var urlEncodedString = "";
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            urlEncodedString += key + "=" + encodeURIComponent(data[key]) + "&";
        }
        urlEncodedString = urlEncodedString.slice(0, -1);
        return urlEncodedString;
    };
    Ajax.prototype.Send = function (uploadProgress) {
        if (uploadProgress === void 0) { uploadProgress = new Function(); }
        var xhttp = this.xhttp;
        var ajax = this;
        return new Promise(function (resolve, reject) {
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200)
                    resolve(this.responseText);
                else if (this.status != 200 && this.readyState == 4)
                    reject(this);
            };
            if (ajax.contentType == "multipart/form-data") {
                xhttp.upload.addEventListener('progress', function (e) {
                    var percent = (e.loaded / e.total) * 100;
                    uploadProgress(percent);
                });
            }
            xhttp.open(ajax.method, ajax.url, ajax.async);
            if (ajax.contentType != "multipart/form-data")
                xhttp.setRequestHeader("Content-Type", ajax.contentType);
            switch (ajax.contentType) {
                case "application/x-www-form-urlencoded":
                    xhttp.send(ajax.urlEncodedString);
                    break;
                case "multipart/form-data":
                    xhttp.send(ajax.formData);
                    break;
                case "application/json;charset=UTF-8":
                    xhttp.send(JSON.stringify(ajax.json));
                    break;
                case "text/plain;charset=UTF-8":
                    xhttp.send(ajax.text);
                    break;
            }
        });
    };
    Ajax.GetToken = function () {
        var xhttp = new XMLHttpRequest();
        return new Promise(function (resolve, reject) {
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200)
                    resolve(this.responseText);
                else if (this.status != 200 && this.readyState == 4)
                    reject(this);
            };
            xhttp.open("GET", Url.GetBaseUrl() + "/app/ajax/token.php");
            xhttp.send();
        });
    };
    Ajax.Get = function (url) {
        var xhttp = new XMLHttpRequest();
        return new Promise(function (resolve, reject) {
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status >= 100 && this.status < 300)
                    resolve(this.responseText);
                else if (this.readyState == 4)
                    reject(this);
            };
            xhttp.open("GET", Url.GetBaseUrl() + url);
            xhttp.send();
        });
    };
    Ajax.Post = function (url, data) {
        var xhttp = new XMLHttpRequest();
        var urlEncodedData = Ajax.ObjectToUrlEncoded(data);
        return new Promise(function (resolve, reject) {
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status >= 100 && this.status < 300)
                    resolve(this.responseText);
                else if (this.readyState == 4 && this.status != 200)
                    reject(this);
            };
            xhttp.open("POST", Url.GetBaseUrl() + url, true);
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.send(urlEncodedData);
        });
    };
    Ajax.PostJSON = function (url, data) {
        var xhttp = new XMLHttpRequest();
        var jsonData = JSON.stringify(data);
        return new Promise(function (resolve, reject) {
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status >= 100 && this.status < 300)
                    resolve(this.responseText);
                else if (this.readyState == 4)
                    reject(this);
            };
            xhttp.open("POST", Url.GetBaseUrl() + url, true);
            xhttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");
            xhttp.send(jsonData);
        });
    };
    return Ajax;
}());
export default Ajax;
