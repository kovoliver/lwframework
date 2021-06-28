var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import Ajax from "./Ajax.js";
var Autocomplete = /** @class */ (function () {
    /**
     *
     */
    function Autocomplete(acObj) {
        this.input = acObj.el;
        var idNeeded = acObj.idNeeded != undefined ? acObj.idNeeded : true;
        this.GetData(idNeeded);
    }
    Autocomplete.prototype.GetData = function (idNeeded) {
        return __awaiter(this, void 0, void 0, function () {
            var value, click, input, url, autoCompleteHolder, ul, token, acObject;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        value = this.input.value;
                        click = this.Click;
                        input = this.input;
                        if (this.input.value == "") {
                            this.input.removeAttribute("entityid");
                        }
                        url = this.input.getAttribute("url");
                        this.autoCompleteHolder = document.querySelector("#" + this.input.getAttribute("autocomplete-id"));
                        this.autoCompleteHolder.innerHTML = "";
                        autoCompleteHolder = this.autoCompleteHolder;
                        if (this.input.value == "") {
                            this.autoCompleteHolder.innerHTML = "";
                            return [2 /*return*/];
                        }
                        ul = document.createElement("ul");
                        ul.classList.add("autocomplete-list");
                        return [4 /*yield*/, Ajax.GetToken()];
                    case 1:
                        token = _a.sent();
                        token = JSON.parse(token);
                        acObject = {
                            "value": value,
                            "token": token
                        };
                        Ajax.Post(url, acObject)
                            .then(function (response) {
                            var jsonResponse = JSON.parse(response);
                            if (jsonResponse.length != 0)
                                _this.autoCompleteHolder.style.display = "block";
                            else
                                _this.autoCompleteHolder.style.display = "none";
                            jsonResponse.forEach(function (element) {
                                var li = document.createElement("li");
                                var img = document.createElement("img");
                                li.innerHTML = element.value;
                                li.classList.add("autocomplete-list-item");
                                if (idNeeded)
                                    li.setAttribute("entityid", element.id);
                                li.addEventListener("click", function () {
                                    click(this, input, autoCompleteHolder, idNeeded);
                                });
                                if (element.img !== undefined) {
                                    img.src = element.img;
                                    li.appendChild(img);
                                }
                                ul.appendChild(li);
                            });
                            _this.autoCompleteHolder.appendChild(ul);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    Autocomplete.prototype.Click = function (listItem, input, autoCompleteHolder, idNeeded) {
        input.value = listItem.innerText;
        if (idNeeded)
            input.setAttribute("entityid", listItem.getAttribute("entityid"));
        autoCompleteHolder.style.display = "none";
    };
    return Autocomplete;
}());
export default Autocomplete;
