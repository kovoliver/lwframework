var Components = [{
        "product-form": "\n    <form class=\"invoice-item-form border-box\">\n        <div class=\"fa-delete-holder\">\n            <i class=\"fas fa-window-close delete-btn delete-storage-item\"></i>\n        </div>\n        <div class=\"grid-4 center-text\">\n            <div class=\"border-box\">\n                <h3>Term\u00E9kn\u00E9v, ean, gy.sz.</h3>\n                <input type=\"text\" class=\"input text-input \n                data-input autocomplete-input\"\n                length=\"3|255\"\n                url=\"/app/ajax/get_product_by_name.php\" autocomplete-id=\"autocomplete1\"\n                autocomplete=\"true\" name=\"productName\" placeholder=\"term\u00E9kn\u00E9v\">\n\n                <div class=\"autocomplete-list-holder\" id=\"autocomplete1\">\n                    \n                </div>\n            </div>\n            <div class=\"border-box\">\n                <h3>Term\u00E9k darabsz\u00E1ma</h3>\n                <input type=\"number\" class=\"input text-input \n                data-input numberOfProducts\" interval=\"1|-1\"\n                name=\"numberOfProducts\" placeholder=\"darabsz\u00E1m\">\n            </div>\n            <div class=\"border-box\">\n                <h3>Term\u00E9k darab\u00E1ra</h3>\n                <input type=\"number\" class=\"input text-input \n                data-input\" interval=\"1|-1\"\n                name=\"costPerProduct\" placeholder=\"darab\u00E1r\">\n            </div>\n            <div class=\"border-box\">\n                <h3>Garancia</h3>\n                <input type=\"date\" class=\"input text-input \n                data-input\" required length=\"1|-1\"\n                name=\"warrantyDate\" placeholder=\"garancia\">\n            </div>\n\n            <div class=\"border-box\">\n                <h3>Gy\u00E1ri sz\u00E1m</h3>\n                <input type=\"text\" \n                required length=\"1|-1\"\n                class=\"input text-input add-sn\" \n                placeholder=\"gy\u00E1ri sz\u00E1mok\">\n            </div>\n\n            <div class=\"border-box row-end-4\">\n                <div class=\"bubble-holder\" style=\"height:100%;width:100%;justify-content:left;\">\n    \n                </div>\n            </div>\n        </div>\n\n        <div class=\"fa-plus-holder\">\n            <i class=\"fas fa-plus-square plus-btn add-storage-item\"></i>\n        </div>\n    </form>\n    ",
        'update-product-form': "\n    <form class=\"invoice-item-form border-box\">\n        <div class=\"fa-delete-holder\">\n            <i class=\"fas fa-window-close delete-btn delete-storage-item\"></i>\n        </div>\n        <div class=\"grid-4 center-text\">\n            <div class=\"border-box\">\n                <h3>Term\u00E9kn\u00E9v, ean, gy.sz.</h3>\n                <input type=\"text\" class=\"input text-input \n                data-input autocomplete-input\"\n                length=\"3|255\"\n                url=\"/app/ajax/get_product_by_name.php\" autocomplete-id=\"autocomplete1\"\n                autocomplete=\"true\" name=\"productName\" placeholder=\"term\u00E9kn\u00E9v\">\n\n                <div class=\"autocomplete-list-holder\" id=\"autocomplete1\">\n                    \n                </div>\n            </div>\n            <div class=\"border-box\">\n                <h3>Term\u00E9k darabsz\u00E1ma</h3>\n                <input type=\"number\" class=\"input text-input \n                data-input numberOfProducts\" interval=\"1|-1\"\n                name=\"numberOfProducts\" placeholder=\"darabsz\u00E1m\">\n            </div>\n            <div class=\"border-box\">\n                <h3>Term\u00E9k darab\u00E1ra</h3>\n                <input type=\"number\" class=\"input text-input \n                data-input\" interval=\"1|-1\"\n                name=\"costPerProduct\" placeholder=\"darab\u00E1r\">\n            </div>\n            <div class=\"border-box\">\n                <h3>Garancia</h3>\n                <input type=\"date\" class=\"input text-input \n                data-input\" required length=\"1|-1\"\n                name=\"warrantyDate\" placeholder=\"garancia\">\n            </div>\n\n            <div class=\"border-box\">\n                <h3>Gy\u00E1ri sz\u00E1m</h3>\n                <input type=\"text\" \n                required length=\"1|-1\"\n                class=\"input text-input add-sn\" \n                placeholder=\"gy\u00E1ri sz\u00E1mok\">\n            </div>\n\n            <div class=\"border-box row-end-4\">\n                <div class=\"bubble-holder\" style=\"height:100%;width:100%;justify-content:left;\">\n\n                </div>\n            </div>\n        </div>\n\n        <div class=\"fa-plus-holder\">\n            <i class=\"fas fa-plus-square plus-btn add-storage-item\"></i>\n        </div>\n        <button type=\"button\" class=\"input btn update-invoice-item\">Fel\u00FCl\u00EDr\u00E1s</button>\n    </form>",
        "add-update-product-form": "\n    <div class=\"add-update-product-form plus-sign-btn\">\n    <i class=\"far fa-plus-square\" aria-hidden=\"true\"></i>\n    </div>",
        "add-product-form": "\n    <div class=\"add-product-form plus-sign-btn\">\n        <i class=\"far fa-plus-square\" aria-hidden=\"true\"></i>\n    </div>"
    }];
export default Components;
