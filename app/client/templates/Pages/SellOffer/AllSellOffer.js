/**
 * Created by Gil on 12/9/2015.
 */
Template.AllSellOffer.helpers({
    AllSellList: function () {
        return SellOffer.find();
    }
});