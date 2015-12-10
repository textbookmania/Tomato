var buyOfferSeeds = [
    {book: "Python Programming: An Introduction to Computer Science", condition: "Good",offer: 1,owner:"jtaylor9", expires: moment().subtract(1,'days').format()},
    {book: "Java Concepts: Compatible with Java 5, 6 and 7", condition: "Poor",offer: 2,owner:"skchun", expires: moment().add(1,'days').format()},
    {book: "Discrete Mathematics and Its Applications Seventh Edition", condition: "Poor",offer: 5, owner: "michael4", expires: moment().add(1,'days').format()}
];

if (BuyOffer.find().count() === 0) {
    _.each(buyOfferSeeds,  function(buyOffer) {
        BuyOffer.insert(buyOffer);
    });
}