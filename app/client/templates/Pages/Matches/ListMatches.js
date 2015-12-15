Template.ListMatches.helpers({

  sellOfferList: function () {
    var sellOfferMatches = [];
    var mySellOffers = SellOffer.find({owner: Meteor.user().profile.name});
    var allBuys = BuyOffer.find();





    /*
    var mySellOfferCurse = SellOffer.find({ owner: Meteor.user().profile.name });

    mySellOfferCurse.forEach(function(foo){
      if (moment(foo.expires).isAfter()) {
        mySellOffer = mySellOffer.concat(foo);
      }
    });

    _.each(mySellOffer, function(rec) {
      buyOfferCursor = buyOfferCursor.concat(BuyOffer.find({owner: rec.book}));
    });

    _.each(buyOfferCursor, function(curse) {
      curse.forEach(function (offer) {
        if (moment(offer.expires).isAfter()) {
          sellOfferMatches = sellOfferMatches.concat(offer);
        }
      });
    });*/
    return mySellOffers;
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
    myBuyOfferCurse.forEach(function (foo){
      myBuyOffer = myBuyOffer.concat(foo);
    });

       _.each(myBuyOffer, function(record){
      sellOfferCursor = sellOfferCursor.concat(SellOffer.find({book: record.book}));
    });

    _.each(sellOfferCursor, function(curse) {
      curse.forEach(function (offer) {
          buyOfferMatches = buyOfferMatches.concat(offer);
      });
    });

    return buyOfferMatches;
  }
});

Template.ListMatches.events({
  'click .accept': function(e){
    e.preventDefault();
    if (confirm("Accept this offer??")) {
      var docId = this._id;
      this.expires=moment().format();
      this.seller=Meteor.user().profile.name;
      var doc = this;
      Meteor.call("contactOfferOwner", docId, doc);
      //Router.go('Matches');
    }
  }
});