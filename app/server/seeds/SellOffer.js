var sellOfferSeeds = [
    {book: "Data Structures: Abstraction and Design Using Java", condition: "Good",offer: 1, owner: "3", expires: moment().subtract(1,'days').format()},
    {book: "The C Programming Language", condition: "Poor",offer: 2, owner: "4", expires: moment().format()},
    {book: "C++ Primer Plus (6th Edition) (Developer's Library)", condition: "Don't care",offer: 5, owner: "5", expires: moment().add(1,'years').format()}
];

if (SellOffer.find().count() === 0) {
    _.each(sellOfferSeeds,  function(sellOffer) {
        SellOffer.insert(sellOffer);
    });
}
