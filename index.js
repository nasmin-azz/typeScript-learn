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
    Products.listProduct = listProduct;
    // console.log(listProduct())
})(Products || (Products = {}));
var Customers;
(function (Customers) {
    const people = [
        { id: 1, name: 'LapTop1', email: 'nasiAxixi@gmail.com' },
        { id: 2, name: 'LapTop2', email: 'nasiAxixi@gmail.com' },
    ];
    function showPeople() {
        return people.map(item => `${item.name}-${item.email}`);
    }
    Customers.showPeople = showPeople;
    // console.log(showPeople())
})(Customers || (Customers = {}));
console.log(Products.listProduct());
console.log(Customers.showPeople());
export {};
//# sourceMappingURL=index.js.map