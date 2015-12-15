Template.ListMatches.helpers({
  buyOfferList: function () {
    return BuyOffer.find();
  },

  sellOfferList: function () {
    return SellOffer.find();
  }
});

Template.ListMatches.events({
  'click .delete1': function (e) {
    e.preventDefault();
    if (confirm("Delete this offer?")) {
      var currentSellOfferID = this._id;
      Meteor.call('deleteSellOffer', currentSellOfferID);
      Router.go('ListSellOffer');
    }
  },

  'click .delete2': function (e) {
    e.preventDefault();
    if (confirm("Delete this offer?")) {
      var currentSellOfferID = this._id;
      Meteor.call('deleteSellOffer', currentSellOfferID);
      Router.go('ListSellOffer');
    }
  }
});/**
 * Created by jtayl_000 on 12/14/2015.
 */
