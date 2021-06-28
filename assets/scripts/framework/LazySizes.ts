class LazySizes {
    private static lazyImgs:NodeList;

    public static Init() {
        this.lazyImgs = document.querySelectorAll(".lazyload");

        window.onload = ()=> {
            this.lazyImgs.forEach((img:any)=> {
                const dataSrc = img.getAttribute("data-src");
                if(dataSrc !== null) {
                    img.removeAttribute("data-src");
                    img.setAttribute("src", dataSrc);
                }
            });
        }
    }
}

export default LazySizes;