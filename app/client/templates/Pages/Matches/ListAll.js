Template.ListAll.helpers({
  buyOfferList: function () {
    return BuyOffer.find();
  },

  sellOfferList: function () {
    return SellOffer.find();
  }
});

Template.ListAll.events({
  'click .delete': function (e) {
    e.preventDefault();
    if (confirm("Delete this offer?")) {
      var currentSellOfferID = this._id;
      Meteor.call('deleteSellOffer', currentSellOfferID);
      Router.go('ListSellOffer');
    }
  }
});/**
 * Created by jtayl_000 on 12/15/2015.
 */
