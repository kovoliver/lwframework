var DataFormatChecker = /** @class */ (function () {
    function DataFormatChecker() {
    }
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
    DataFormatChecker.CheckDataFormat = function (formID, errorClass) {
        var form = document.querySelector("#" + formID);
        var formElements = form.elements;
        var errors = [];
        for (var _i = 0, formElements_1 = formElements; _i < formElements_1.length; _i++) {
            var element = formElements_1[_i];
            var regex = element.getAttribute("regex");
            var length_1 = element.getAttribute("length");
            var required = element.getAttribute("required");
            var interval = element.getAttribute("interval");
            var name_1 = element.getAttribute("placeholder");
            var value = element.value;
            if (required !== null || value.length != 0) {
                if (regex !== null) {
                    var regulerExp = new RegExp(regex);
                    if (!regulerExp.test(value)) {
                        errors.push("A k\u00F6vetkez\u0151 adat form\u00E1tuma nem megfelel\u0151: " + name_1);
                        element.classList.add(errorClass);
                    }
                    else {
                        element.classList.remove(errorClass);
                    }
                }
                else if (interval !== null) {
                    var intervalArray = interval.split("|");
                    intervalArray = intervalArray.map(function (value) {
                        return parseInt(value);
                    });
                    value = parseInt(value);
                    if (intervalArray.length != 2)
                        throw "You must specify the interval attribute in the right format, for example: interval='5|15'";
                    if (intervalArray[0] == -1 && intervalArray[1] == -1)
                        throw "You can add -1 to just one attribute!";
                    var errBool = false;
                    if (intervalArray[0] == 'NaN' && value > intervalArray[1]) {
                        errors.push("A(z) " + name_1 + " param\u00E9ter maximum " + intervalArray[1] + " lehet");
                        errBool = true;
                    }
                    else if (intervalArray[1] == 'NaN' && value < intervalArray[0]) {
                        errors.push("A(z) " + name_1 + " param\u00E9ter minimum " + intervalArray[0] + " kell, hogy legyen!");
                        errBool = true;
                    }
                    else if (value < intervalArray[0] || value > intervalArray[1]
                        && intervalArray[0] != 'NaN' && intervalArray[1] != 'NaN') {
                        errors.push("A(z) " + name_1 + " param\u00E9ter " + intervalArray[0] + " \u00E9s " + intervalArray[1] + " k\u00F6z\u00F6tt kell, hogy legyen.");
                        errBool = true;
                    }
                    else if (isNaN(value)) {
                        errors.push("A megadott \u00E9rt\u00E9k nem egy sz\u00E1m! (" + name_1 + ")");
                    }
                    if (errBool)
                        element.classList.add(errorClass);
                    else
                        element.classList.remove(errorClass);
                }
                else if (length_1 !== null) {
                    var lengthArray = length_1.split("|");
                    var errBool = false;
                    lengthArray = lengthArray.map(function (value) {
                        return parseInt(value);
                    });
                    var errorObj = {
                        "error": 3,
                        "message": lengthArray,
                        "name": name_1
                    };
                    if (lengthArray.length != 2)
                        throw "You must specify the length attribute in the right format, for example: length='5|15'";
                    if (lengthArray[0] == -1 && lengthArray[1] == -1)
                        throw "You can add -1 to just one attribute!";
                    if (lengthArray[0] == -1 && value.length > lengthArray[1]) {
                        errors.push("A(z) " + name_1 + " param\u00E9ter maximum " + lengthArray[1] + " karakteres lehet!");
                        errBool = true;
                    }
                    else if (lengthArray[1] == -1 && value.length < lengthArray[0]) {
                        errors.push("A(z) " + name_1 + " param\u00E9ter minimum " + lengthArray[0] + " karakteres kell, hogy legyen!");
                        errBool = true;
                    }
                    else if (value.length < lengthArray[0]
                        || value.length > lengthArray[1]
                            && lengthArray[0] != -1 && lengthArray[1] != -1) {
                        errors.push("A(z) " + name_1 + " param\u00E9ter " + lengthArray[0] + " \u00E9s " + lengthArray[1] + " karakter k\u00F6z\u00F6tt kell, hogy legyen!");
                        errBool = true;
                    }
                    if (errBool)
                        element.classList.add(errorClass);
                    else
                        element.classList.remove(errorClass);
                }
            }
        }
        return [errors.length == 0, errors];
    };
    return DataFormatChecker;
}());
export default DataFormatChecker;
