var sellOfferSeeds = [
    {book: "Data Structures: Abstraction and Design Using Java", condition: "Poor", offer: 4, owner:"jtaylor9", expires: moment().subtract(1,'days').format()},
    {book: "The C Programming Language", condition: "Fair", offer: 5, owner:"jtaylor9", expires: moment().subtract(1,'days').format()},
    {book: "C++ Primer Plus (6th Edition) (Developer's Library)", condition: "Good", offer: 6, owner:"jtaylor9", expires: moment().subtract(1,'days').format()},
    {book: "Java Concepts: Compatible with Java 5, 6 and 7", condition: "Fair", offer: 7, owner:"skchun", expires: moment().subtract(1,'days').format()},
    {book: "Discrete Mathematics and Its Applications Seventh Edition", condition: "Poor", offer: 8, owner:"skchun", expires: moment().subtract(1,'days').format()},
    {book: "Data Structures: Abstraction and Design Using Java", condition: "Excellent", offer: 9, owner:"skchun", expires: moment().subtract(1,'days').format()},
    {book: "C++ Primer Plus (6th Edition) (Developer's Library)", condition: "Poor", offer: 16, owner:"gyim", expires: moment().subtract(1,'days').format()},
    {book: "Introduction to Algorithms, 3rd Edition", condition: "Excellent", offer: 17, owner:"gyim", expires: moment().subtract(1,'days').format()},
    {book: "Programming Language Pragmatics, Third Edition", condition: "Good", offer: 18, owner:"gyim", expires: moment().subtract(1,'days').format()},{book: "Data Structures: Abstraction and Design Using Java", condition: "Fair", offer: 19, owner:"michael4", expires: moment().subtract(1,'days').format()},
    {book: "The C Programming Language", condition: "Poor", offer: 20, owner:"michael4", expires: moment().subtract(1,'days').format()},
    {book: "C++ Primer Plus (6th Edition) (Developer's Library)", condition: "Excellent", offer: 21, owner:"michael4", expires: moment().subtract(1,'days').format()}
];

if (SellOffer.find().count() === 0) {
    _.each(sellOfferSeeds,  function(sellOffer) {
        SellOffer.insert(sellOffer);
    });
}
