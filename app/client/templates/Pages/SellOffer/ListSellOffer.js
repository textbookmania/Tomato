Template.ListSellOffer.helpers({
    sellOfferList: function () {
        return SellOffer.find();
    }
});

Template.ListSellOffer.events({
    'click .delete': function (e) {
        e.preventDefault();
        if (confirm("Delete this offer?")) {
            var currentSellOfferID = this._id;
            Meteor.call('deleteSellOffer', currentSellOfferID);
            Router.go('ListSellOffer');
        }
    }
});