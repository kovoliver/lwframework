import Url from "./Url.js";

class Ajax {
    private xhttp:XMLHttpRequest;
    private method:string = "GET";
    private url:string = "";
    private async:boolean;
    private contentType:string = "";
    private errorString:string = "";
    private urlEncodedString:string = "";
    private formData:FormData;
    private text:string;
    private json:JSON;
    private headers:string;

    constructor(ajaxObj:any) {
        this.CheckErrors(ajaxObj);
        if(ajaxObj.method !== undefined) 
            this.method = ajaxObj.method;

        if(ajaxObj.url !== undefined) 
            this.url = ajaxObj.url;

        this.formData = ajaxObj.file !== undefined 
        ?  ajaxObj.file : new FormData();

        this.SetContentType(ajaxObj.contentType);

        if(this.contentType == "application/x-www-form-urlencoded") {
            this.urlEncodedString = ajaxObj.data !== undefined ? 
            Ajax.ObjectToUrlEncoded(ajaxObj.data): "";
        }

        this.text = ajaxObj.contentType == "text" 
        && ajaxObj.text !== undefined ? ajaxObj.text : "";

        this.json = ajaxObj.contentType == "json" 
        && ajaxObj.json !== undefined ? ajaxObj.json : {};

        this.async = ajaxObj.async !== undefined ? ajaxObj.async : true;

        if(ajaxObj.headers !== undefined 
            && ajaxObj.headers.name !== undefined 
            && ajaxObj.headers.value !== undefined) 
            this.xhttp.setRequestHeader(ajaxObj.headers.name, ajaxObj.headers.value);

        this.xhttp = new XMLHttpRequest();
    }

    private CheckErrors(ajaxObj:any) {
        this.errorString = "";
        if(ajaxObj.url === undefined)
            this.errorString += "You must specify the target URL! \n";
        if(ajaxObj.method === undefined)
            this.errorString += "You must specify the HTTP method! \n";
        if(ajaxObj.contentType == "file" && ajaxObj.file === undefined)
            this.errorString += "You have to add a FormData object to your ajax configuration object (new FormData())!";
        if(this.errorString.length != 0)
            throw this.errorString;
    }

    private SetContentType(contentType:any) {
        switch(contentType) {
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
    }

    private static ObjectToUrlEncoded(data:object) {
        let keys = Object.keys(data);
        let urlEncodedString = "";
        for(let key of keys) {
            urlEncodedString += `${key}=${encodeURIComponent(data[key])}&`;
        }
        urlEncodedString = urlEncodedString.slice(0, -1);
        return urlEncodedString;
    }

    public Send(uploadProgress:Function = new Function()) {
        let xhttp = this.xhttp;
        let ajax = this;

        return new Promise(function(resolve:Function, reject:Function) {
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200)
                    resolve(this.responseText);
                else if(this.status != 200 && this.readyState == 4)
                    reject(this);
            }

            if(ajax.contentType == "multipart/form-data") {
                xhttp.upload.addEventListener('progress', function(e) {
                    var percent = (e.loaded / e.total)*100;
                    uploadProgress(percent);
                });
            }
               
            xhttp.open(ajax.method, ajax.url, ajax.async);
            if(ajax.contentType != "multipart/form-data")
                xhttp.setRequestHeader("Content-Type", ajax.contentType);

            switch(ajax.contentType) {
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
    }

    public static GetToken() {
        let xhttp = new XMLHttpRequest();
        return new Promise(function(resolve:Function, reject:Function) {
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) 
                    resolve(this.responseText);
                else if(this.status != 200 && this.readyState == 4)
                    reject(this);
            }

            xhttp.open("GET", Url.GetBaseUrl() + "/app/ajax/token.php");
            xhttp.send();
        });
    }

    public static Get(url:string) {
        let xhttp = new XMLHttpRequest();
        return new Promise(function(resolve:Function, reject:Function) {
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status >= 100 && this.status < 300)
                    resolve(this.responseText);
                else if(this.readyState == 4)
                    reject(this);
            }

            xhttp.open("GET", Url.GetBaseUrl() + url);
            xhttp.send();
        });
    }

    public static Post(url:string, data:object) {
        let xhttp = new XMLHttpRequest();
        let urlEncodedData = Ajax.ObjectToUrlEncoded(data);
        return new Promise(function(resolve:Function, reject:Function) {
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status >= 100 && this.status < 300)
                    resolve(this.responseText);
                else if(this.readyState == 4 && this.status != 200)
                    reject(this);
            }

            xhttp.open("POST", Url.GetBaseUrl() + url, true);
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

            xhttp.send(urlEncodedData);
        });
    }

    public static PostJSON(url:string, data:object) {
        let xhttp = new XMLHttpRequest();
        let jsonData = JSON.stringify(data);

        return new Promise(function(resolve:Function, reject:Function) {
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status >= 100 && this.status < 300)
                    resolve(this.responseText);
                else if(this.readyState == 4)
                    reject(this);
            }

            xhttp.open("POST", Url.GetBaseUrl() + url, true);
            xhttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");
            xhttp.send(jsonData);
        });
    }
}

export default Ajax;