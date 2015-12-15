var buyOfferSeeds = [
    {book: "",condition: "", offer: "", expires: "", owner: "",}
];


/**
 * Initialize the BuyOffer collection if empty with seed data.
 */

if (BuyOffer.find().count() == 0) {
    _.each(buyOfferSeeds,  function(buyOffer) {
        BuyOffer.insert(buyOffer, {validate: false, getAutoValues: false});
    });
}