var sellOfferSeeds = [

];

/**
 * Initialize the BuyOffer collection if empty with seed data.
 */

if (SellOffer.find().count() == 0) {
    _.each(sellOfferSeeds,  function(sellOffer) {
        SellOffer.insert(sellOffer, {validate: false, getAutoValues: false});
    });
}
