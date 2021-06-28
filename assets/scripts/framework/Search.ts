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

class Search {
    static SearchParams(formID:string):string  {
        let searchParams = "?";
        let object = FormDataCollector.CollectData(formID);
        let keys = Object.keys(object);

        keys.forEach(element => {
            let value = object[element];
            if(value != "")
                searchParams += `&${encodeURIComponent(element)}=${encodeURIComponent(value)}`;
        });
        
        return searchParams.substr(2, searchParams.length);
    }

    static GetUrlparams() {
        let params = window.location.search;
        params = params.replace("?", "");
        let paramsArray = params.split("&");
        let urlObject:any = {};
        if(params.length == 0)
            return {};

        paramsArray.forEach((urlParam)=> {
            let paramParts = urlParam.split("=");
            urlObject[paramParts[0]] = decodeURIComponent(paramParts[1]);
        });

        return urlObject;
    }

    static GetPathParams() {
        let pathName = window.location.pathname.split("&");
        let path = pathName[0];
        path = path.replace(/^\/|\/$/g, '');
        let pathArray = path.split("/");
        pathArray = pathArray.slice(pathArray.length-3, pathArray.length);
        return pathArray;
    }
}

export default Search;