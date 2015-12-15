Template.ListMatches.helpers({

  sellOfferList: function () {
    var sellOfferMatches = [];
    var buyOfferCursor = [];
    var mySellOffer = [];
    var mySellOfferCurse = SellOffer.find({owner: Meteor.user().profile.name});

    mySellOfferCurse.forEach(function (foo) {
        mySellOffer = mySellOffer.concat(foo);
    });

    _.each(mySellOffer, function (record) {
      buyOfferCursor = buyOfferCursor.concat(BuyOffer.find({book: record.book}));
    });

    _.each(buyOfferCursor, function (curse) {
      curse.forEach(function (offer) {
          sellOfferMatches = sellOfferMatches.concat(offer);
      });
    });
    return sellOfferMatches;
  },

  fullList: function () {
    var allBuys = BuyOffer.find();
    return allBuys
  },

  /**
   * @returns {*} All non-expired matches for current users buy offers.
   */
  buyOfferList: function () {
    var buyOfferMatches = [];
    var sellOfferCursor = [];
    var myBuyOffer = [];
    var myBuyOfferCurse = BuyOffer.find({owner: Meteor.user().profile.name});


    //for each does the same thing for each element in array
    myBuyOfferCurse.forEach(function (foo) {
      myBuyOffer = myBuyOffer.concat(foo);
    });

    _.each(myBuyOffer, function (record) {
      sellOfferCursor = sellOfferCursor.concat(SellOffer.find({book: record.book}));
    });

    _.each(sellOfferCursor, function (curse) {
      curse.forEach(function (offer) {
        buyOfferMatches = buyOfferMatches.concat(offer);
      });
    });

    return buyOfferMatches;
  }
});

Template.ListMatches.events({
  'click .accept': function (e) {
    e.preventDefault();
    confirm("Accept this offer?");
  },

  'click .contact': function (e) {
    e.preventDefault();
    confirm("Contact Seller?");
  }
});