function numberFormat(number:number, curr:string) {
    let currency = new Intl.NumberFormat('hu-HU', { style: 'currency', currency: curr }).format(number);
    return currency.replace(',00', '');
}

export default numberFormat;