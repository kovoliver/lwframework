let Components = [{
    "product-form":`
    <form class="invoice-item-form border-box">
        <div class="fa-delete-holder">
            <i class="fas fa-window-close delete-btn delete-storage-item"></i>
        </div>
        <div class="grid-4 center-text">
            <div class="border-box">
                <h3>Terméknév, ean, gy.sz.</h3>
                <input type="text" class="input text-input 
                data-input autocomplete-input"
                length="3|255"
                url="/app/ajax/get_product_by_name.php" autocomplete-id="autocomplete1"
                autocomplete="true" name="productName" placeholder="terméknév">

                <div class="autocomplete-list-holder" id="autocomplete1">
                    
                </div>
            </div>
            <div class="border-box">
                <h3>Termék darabszáma</h3>
                <input type="number" class="input text-input 
                data-input numberOfProducts" interval="1|-1"
                name="numberOfProducts" placeholder="darabszám">
            </div>
            <div class="border-box">
                <h3>Termék darabára</h3>
                <input type="number" class="input text-input 
                data-input" interval="1|-1"
                name="costPerProduct" placeholder="darabár">
            </div>
            <div class="border-box">
                <h3>Garancia</h3>
                <input type="date" class="input text-input 
                data-input" required length="1|-1"
                name="warrantyDate" placeholder="garancia">
            </div>

            <div class="border-box">
                <h3>Gyári szám</h3>
                <input type="text" 
                required length="1|-1"
                class="input text-input add-sn" 
                placeholder="gyári számok">
            </div>

            <div class="border-box row-end-4">
                <div class="bubble-holder" style="height:100%;width:100%;justify-content:left;">
    
                </div>
            </div>
        </div>

        <div class="fa-plus-holder">
            <i class="fas fa-plus-square plus-btn add-storage-item"></i>
        </div>
    </form>
    `, /**második */
    'update-product-form': `
    <form class="invoice-item-form border-box">
        <div class="fa-delete-holder">
            <i class="fas fa-window-close delete-btn delete-storage-item"></i>
        </div>
        <div class="grid-4 center-text">
            <div class="border-box">
                <h3>Terméknév, ean, gy.sz.</h3>
                <input type="text" class="input text-input 
                data-input autocomplete-input"
                length="3|255"
                url="/app/ajax/get_product_by_name.php" autocomplete-id="autocomplete1"
                autocomplete="true" name="productName" placeholder="terméknév">

                <div class="autocomplete-list-holder" id="autocomplete1">
                    
                </div>
            </div>
            <div class="border-box">
                <h3>Termék darabszáma</h3>
                <input type="number" class="input text-input 
                data-input numberOfProducts" interval="1|-1"
                name="numberOfProducts" placeholder="darabszám">
            </div>
            <div class="border-box">
                <h3>Termék darabára</h3>
                <input type="number" class="input text-input 
                data-input" interval="1|-1"
                name="costPerProduct" placeholder="darabár">
            </div>
            <div class="border-box">
                <h3>Garancia</h3>
                <input type="date" class="input text-input 
                data-input" required length="1|-1"
                name="warrantyDate" placeholder="garancia">
            </div>

            <div class="border-box">
                <h3>Gyári szám</h3>
                <input type="text" 
                required length="1|-1"
                class="input text-input add-sn" 
                placeholder="gyári számok">
            </div>

            <div class="border-box row-end-4">
                <div class="bubble-holder" style="height:100%;width:100%;justify-content:left;">

                </div>
            </div>
        </div>

        <div class="fa-plus-holder">
            <i class="fas fa-plus-square plus-btn add-storage-item"></i>
        </div>
        <button type="button" class="input btn update-invoice-item">Felülírás</button>
    </form>`,
    "add-update-product-form":`
    <div class="add-update-product-form plus-sign-btn">
    <i class="far fa-plus-square" aria-hidden="true"></i>
    </div>`,

    "add-product-form":`
    <div class="add-product-form plus-sign-btn">
        <i class="far fa-plus-square" aria-hidden="true"></i>
    </div>`,
}];

export default Components;