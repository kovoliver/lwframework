/**
 * Automatikusan összeszedi egy form adatait, hogy 
 * át lehessen küldeni 
 */

class FormDataCollector {
    public static CollectData(formID:string):object {
        let data:object = {};

        let form:HTMLFormElement = document.querySelector(`#${formID}`);
        let formElements:any = form.elements;

        for(let i = 0; i < formElements.length; i++) {
            if(formElements[i].name == "")
                continue;
            
            if(formElements[i].type == "button")
                continue;
            //formElements[i].type != "radio" && 
            if(formElements[i].type != "checkbox") {
                if(formElements[i].getAttribute("entityid") === null)
                    data[formElements[i].name] = formElements[i].value;
                else 
                    data[formElements[i].name] = formElements[i].getAttribute("entityid");
            } else {
                data[formElements[i].name] = formElements[i].checked;
            }
        }

        return data;
    }

    public static CollectSearchData(className:string) {
        const inputs = document.querySelectorAll(`.${className}`);
        let data = {};

        inputs.forEach((element:HTMLInputElement)=> {
            let multiple = document.querySelectorAll(`input[name="${element.getAttribute("name")}"]`);

            if(multiple.length > 1) {
               if(data[element.getAttribute("name")] === undefined) {
                    if(element.checked) {
                        data[element.getAttribute("name")] = [];
                        data[element.getAttribute("name")].push(element.value);
                    }
               } else {
                    if(element.checked) {
                        data[element.getAttribute("name")].push(element.value);
                    }
               }
            } else {
                if(element.getAttribute("entityid") == undefined)
                    data[element.getAttribute("name")] = element.value;
                else 
                    data[element.getAttribute("name")] = element.getAttribute("entityid");
            }
        });

        return data;
    }
}

export default FormDataCollector;