var buyOfferSeeds = [
    {book: "Python Programming: An Introduction to Computer Science", condition: "good",offer: 1,owner:"0", expires: moment().subtract(1,'days').format()},
    {book: "Java Concepts: Compatible with Java 5, 6 and 7", condition: "poor",offer: 2,owner:"1", expires: moment().format()},
    {book: "Discrete Mathematics and Its Applications Seventh Edition", condition: "poor",offer: 5, owner: "2", expires: moment().add(1,'years').format()}
];

if (BuyOffer.find().count() === 0) {
    _.each(buyOfferSeeds,  function(buyOffer) {
        BuyOffer.insert(buyOffer);
    });
}