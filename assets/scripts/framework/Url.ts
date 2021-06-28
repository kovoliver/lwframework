const localHostPath = "icoma_uj";

class Url {
    public static GetUrlArray() {
        let pathMatch = window.location.pathname.match(/(?!\/)[\w\/]*/);
        let path = pathMatch !== null ? pathMatch[0] : "";
        let pathArray = path.split("/");
        let newPathArray = [];
        
        pathArray.forEach((el)=> {
            if(el != localHostPath && el.length > 0)
                newPathArray.push(el);
        });

        return newPathArray;
    }

    public static GetBaseUrl() {
        let getUrl = window.location;
        let baseUrl = getUrl.protocol + "//" + getUrl.host;
        if(getUrl.host == "localhost")
            baseUrl +=  "/" + localHostPath;
        return baseUrl;
    }

    public static ChangeUrl(page:string, url:string) {
        if (typeof (history.pushState) !== undefined) {
            var obj = { Page: page, Url: url };
            history.pushState(obj, obj.Page, obj.Url);
        } else {
            alert("Browser does not support HTML5.");
        }
    }

    public static GetQueryVariable(variable:string) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == variable)
                {return pair[1];}
        }
        return "";
    }
}

export default Url;