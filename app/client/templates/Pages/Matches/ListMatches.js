Template.ListBuyOffer.helpers({
  buyOfferList: function () {
    return BuyOffer.find();
  }
});

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