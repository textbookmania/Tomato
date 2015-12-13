Template.ListMatches.helpers({
  buyOfferList: function () {
    return BuyOffer.find();
  },

  sellOfferList: function () {
    return SellOffer.find();
  }
});

Template.ListMatches().events({
  'click .delete': function(e){
    e.preventDefault();
    if (confirm("Delete this sell offer??")) {
      var currentSellOfferId = this._id;
      Meteor.call("deleteSellOffer", currentSellOfferId);
      Router.go('ListSellOffer');
    }
  }
});
