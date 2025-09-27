var Products;
(function (Products) {
    const products = [
        { id: 1, name: 'LapTop1', price: 10000000000000 },
        { id: 2, name: 'LapTop2', price: 20000000000000 },
        { id: 3, name: 'LapTop3', price: 30000000000000 },
        { id: 4, name: 'LapTop4', price: 40000000000000 }
    ];
    function listProduct() {
        return products.map(item => `${item.name} - ${item.price}`);
    }
    console.log(listProduct());
})(Products || (Products = {}));
export {};
//# sourceMappingURL=index.js.map