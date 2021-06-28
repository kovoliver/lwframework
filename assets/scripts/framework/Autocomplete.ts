import Ajax from "./Ajax.js";

class Autocomplete {
    private input:HTMLInputElement;
    private autoCompleteHolder:HTMLElement;

    /**
     *
     */
    constructor(acObj:any) {
        this.input = acObj.el;
        let idNeeded = acObj.idNeeded != undefined ? acObj.idNeeded : true;
        this.GetData(idNeeded);
    }

    public async GetData(idNeeded:boolean) {
        let value = this.input.value;
        let click = this.Click;
        let input = this.input;

        if(this.input.value == "") {
            this.input.removeAttribute("entityid");
        }
            
        let url:any = this.input.getAttribute("url");
        this.autoCompleteHolder = document.querySelector(`#${this.input.getAttribute("autocomplete-id")}`);
        this.autoCompleteHolder.innerHTML = "";
        let autoCompleteHolder = this.autoCompleteHolder;
        if(this.input.value == "") {
            this.autoCompleteHolder.innerHTML = "";
            return;
        }

        let ul = document.createElement("ul");
        ul.classList.add("autocomplete-list");

        let token:any = await Ajax.GetToken();
        token = JSON.parse(token);
        let acObject = {
            "value":value,
            "token":token
        };

        Ajax.Post(url, acObject)
        .then((response:string)=> {
            let jsonResponse = JSON.parse(response);

            if(jsonResponse.length != 0)
                this.autoCompleteHolder.style.display = "block";
            else 
                this.autoCompleteHolder.style.display = "none";
            jsonResponse.forEach((element:any) => {
                let li = document.createElement("li");
                let img = document.createElement("img");
                li.innerHTML = element.value;
                li.classList.add("autocomplete-list-item");

                if(idNeeded)
                    li.setAttribute("entityid", element.id);

                li.addEventListener("click", function() {
                    click(this, input, autoCompleteHolder, idNeeded);
                });

                if(element.img !== undefined) {
                    img.src = element.img;
                    li.appendChild(img);
                }

                ul.appendChild(li);
            });

            this.autoCompleteHolder.appendChild(ul);
        });
    }
    
    private Click(listItem:HTMLElement, input:HTMLInputElement, 
        autoCompleteHolder:HTMLElement, idNeeded:boolean) {
        input.value = listItem.innerText;
        if(idNeeded)
            input.setAttribute("entityid", listItem.getAttribute("entityid"));
        autoCompleteHolder.style.display = "none";
    }
}

export default Autocomplete;