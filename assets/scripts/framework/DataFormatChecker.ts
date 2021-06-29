class DataFormatChecker {
    /**
     * Van egy form, ennek megkapja az id-ját. 
     * az összes elemen végigfut, és megnézi az attribútumokat. 
     * Az attribútumok szerint értékeli, hogy megfelel-e az 
     * adott input mező a kritériumoknak. 
     * Ha megfelel, akkor visszaad egy true értéket
     * és egy üres tömböt. 
     * Ha nem felel meg, akkor egy false értéket
     * és json-okat a különböző fasztudja mikkel. 
     * 
     * Mit kell bekérni? 
     * for id
     * error class
     * 
     * 
     * attribútumok
        - regex
        - length
        - required
        - interval
        - date attribútum
     */

    public static CheckDataFormat(formID:string, errorClass:string) {
        let form:HTMLFormElement = document.querySelector(`#${formID}`);
        let formElements:any = form.elements;

        let errors = [];
        
        for(let element of formElements) {
            let regex = element.getAttribute("regex");
            let length = element.getAttribute("length");
            let required = element.getAttribute("required");
            let interval = element.getAttribute("interval");
            let name = element.getAttribute("placeholder");
            let value = element.value;

            if(required !== null || value.length != 0) {
                if(regex !== null) {
                    let regulerExp = new RegExp(regex);
                    if(!regulerExp.test(value)) {
                        errors.push(`A következő adat formátuma nem megfelelő: ${name}`);
                        element.classList.add(errorClass);
                    } else {
                        element.classList.remove(errorClass);
                    }
                } else if(interval !== null) {
                    let intervalArray = interval.split("|");
                    intervalArray = intervalArray.map(function(value:string) {
                        return parseInt(value);
                    });

                    value = parseInt(value);
                    
                    if(intervalArray.length != 2)
                        throw "You must specify the interval attribute in the right format, for example: interval='5|15'";
                    if(intervalArray[0] == -1 && intervalArray[1] == -1)
                        throw "You can add -1 to just one attribute!";
                    let errBool = false;

                    if(intervalArray[0] == 'NaN' && value > intervalArray[1]) {
                        errors.push(`A(z) ${name} paraméter maximum ${intervalArray[1]} lehet`);
                        errBool = true;
                    } else if(intervalArray[1] == 'NaN' && value < intervalArray[0]) {
                        errors.push(`A(z) ${name} paraméter minimum ${intervalArray[0]} kell, hogy legyen!`);
                        errBool = true;
                    } else if(value < intervalArray[0] || value > intervalArray[1]
                        && intervalArray[0] != 'NaN' && intervalArray[1] != 'NaN') {
                        errors.push(`A(z) ${name} paraméter ${intervalArray[0]} és ${intervalArray[1]} között kell, hogy legyen.`);
                        errBool = true;
                    } else if(isNaN(value)) {
                        errors.push(`A megadott érték nem egy szám! (${name})`);
                    }
                    
                    if(errBool) 
                        element.classList.add(errorClass);
                    else 
                        element.classList.remove(errorClass);
                    
                } else if(length !== null) {
                    let lengthArray = length.split("|");
                    let errBool = false;
                    lengthArray = lengthArray.map(function(value:string) {
                        return parseInt(value);
                    });
                    
                    let errorObj = {
                        "error":3,
                        "message":lengthArray,
                        "name":name
                    };

                    if(lengthArray.length != 2)
                        throw "You must specify the length attribute in the right format, for example: length='5|15'";
                    if(lengthArray[0] == -1 && lengthArray[1] == -1)
                        throw "You can add -1 to just one attribute!";
                    
                    if(lengthArray[0] == -1 && value.length > lengthArray[1]) {
                        errors.push(`A(z) ${name} paraméter maximum ${lengthArray[1]} karakteres lehet!`);
                        errBool = true;
                    } else if(lengthArray[1] == -1 && value.length < lengthArray[0]) {
                        errors.push(`A(z) ${name} paraméter minimum ${lengthArray[0]} karakteres kell, hogy legyen!`);
                        errBool = true;
                    } else if(value.length < lengthArray[0] 
                        || value.length > lengthArray[1] 
                        && lengthArray[0] != -1 && lengthArray[1] != -1) {
                        errors.push(`A(z) ${name} paraméter ${lengthArray[0]} és ${lengthArray[1]} karakter között kell, hogy legyen!`);
                        errBool = true;
                    } 

                    if(errBool) 
                        element.classList.add(errorClass);
                    else 
                        element.classList.remove(errorClass);
                }
            }
        }

        return [errors.length == 0, errors];
    }
}

export default DataFormatChecker;