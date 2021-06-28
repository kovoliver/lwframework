import VirtualDom from "../framework/VirtualDom.js";

class ImgPreview {
    public static Preview(inputID:string, holderID:string, 
        imgClass:string = "", holderClass:string = "",
        allowedExtensions = ["bmp", "jpg", "png", "jpeg"]) {
        let errors = "";
        let input:HTMLInputElement = document.querySelector(`#${inputID}`);
        let holder:HTMLElement = document.querySelector(`#${holderID}`);
        holder.innerHTML = "";

        for(var i = 0; i < input.files.length; i++) {
            var reader = new FileReader();
            let imgIndex = i;
            let fileName = input.files[i].name;
            let extension = fileName.split(".")[1].toLowerCase();

            if(allowedExtensions.includes(extension)) {
                reader.onload = function(e) {
                    let holderDiv = VirtualDom.CreateElement("div", [holderClass]);
                    let i = VirtualDom.CreateElement("i", ["fas", "fa-trash-alt", "icon", "delete-icon", "preview-delete"]);

                    let img = VirtualDom.CreateElement("img", [imgClass]);
                    img.SetAttribute("file-name", fileName);
                    img.SetAttribute("src", e.target.result.toString());

                    holderDiv.AppendChild(img);
                    holderDiv.AppendChild(i);
                    holder.appendChild(holderDiv.ToHtml());
                }

                reader.readAsDataURL(input.files[i]);
            } else {
                errors += `A ${fileName} nem megengedett kiterjesztéssel rendelkezik!`;
            }
        }

        if(errors.length > 0) 
            throw errors;
    }
}

export default ImgPreview;