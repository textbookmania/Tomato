var sellOfferSeeds = [
    {book: "Data Structures: Abstraction and Design Using Java", condition: "Good",offer: 1, owner: "jtaylor9", expires: moment().add(1,'days').format()},
    {book: "The C Programming Language", condition: "Poor",offer: 2, owner: "skchun", expires: moment().add(1,'days').format()},
    {book: "C++ Primer Plus (6th Edition) (Developer's Library)", condition: "Fair",offer: 5, owner: "michael4", expires: moment().add(1,'days').format()}
];

if (SellOffer.find().count() === 0) {
    _.each(sellOfferSeeds,  function(sellOffer) {
        SellOffer.insert(sellOffer);
    });
}
