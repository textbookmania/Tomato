Template.ListBuyOffer.helpers({
    buyOfferList: function () {
        return BuyOffer.find();
    }
});

Template.ListBuyOffer.events({
    'click .delete': function (e) {
        e.preventDefault();
        if (confirm("Delete this offer?")) {
            var currentBuyOfferID = this._id;
            Meteor.call('deleteBuyOffer', currentBuyOfferID);
            Router.go('ListBuyOffer');
        }
    }
});