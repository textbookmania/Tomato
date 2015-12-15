var buyOfferSeeds = [
    {book: "Python Programming: An Introduction to Computer Science", condition: "Excellent", offer: 1, owner:"jtaylor9", expires: moment().subtract(1,'days').format()},
    {book: "Java Concepts: Compatible with Java 5, 6 and 7", condition: "Good", offer: 2, owner:"jtaylor9", expires: moment().subtract(1,'days').format()},
    {book: "Discrete Mathematics and Its Applications Seventh Edition", condition: "Fair", offer: 3, owner:"jtaylor9", expires: moment().subtract(1,'days').format()},
    {book: "The C Programming Language", condition: "Don't care", offer: 10, owner:"skchun", expires: moment().subtract(1,'days').format()},
    {book: "C++ Primer Plus (6th Edition) (Developer's Library)", condition: "Fair", offer: 11, owner:"skchun", expires: moment().subtract(1,'days').format()},
    {book: "Introduction to Algorithms, 3rd Edition", condition: "Poor", offer: 12, owner:"skchun", expires: moment().subtract(1,'days').format()},
    {book: "Discrete Mathematics and Its Applications Seventh Edition", condition: "Excellent", offer: 13, owner:"gyim", expires: moment().subtract(1,'days').format()},
    {book: "Data Structures: Abstraction and Design Using Java", condition: "Good", offer: 14, owner:"gyim", expires: moment().subtract(1,'days').format()},
    {book: "The C Programming Language", condition: "Don't care", offer: 15, owner:"gyim", expires: moment().subtract(1,'days').format()},
    {book: "Introduction to Algorithms, 3rd Edition", condition: "Good", offer: 22, owner:"michael4", expires: moment().subtract(1,'days').format()},
    {book: "Programming Language Pragmatics, Third Edition", condition: "Fair", offer: 23, owner:"michael4", expires: moment().subtract(1,'days').format()},
    {book: "Land of Lisp: Learn to Program in Lisp, One Game at a Time!", condition: "Don't care", offer: 24, owner:"michael4", expires: moment().subtract(1,'days').format()}
];

if (BuyOffer.find().count() === 0) {
    _.each(buyOfferSeeds,  function(buyOffer) {
        BuyOffer.insert(buyOffer);
    });
}