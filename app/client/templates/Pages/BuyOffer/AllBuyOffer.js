/**
 * Created by Gil on 12/9/2015.
 */
Template.AllBuyOffer.helpers({
    AllOfferList: function () {
        return BuyOffer.find();
    }
});