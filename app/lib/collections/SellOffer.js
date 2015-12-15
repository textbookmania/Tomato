sellOffer = "SellOffer";  // avoid typos, this string occurs many times.

SellOffer = new Mongo.Collection(sellOffer);

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new SellOffer record.
   * @param doc The Textbooks document.
   */
  addSellOffer: function (doc) {
    textList=Textbook.find().fetch();
    doc.expires=moment().add(7, 'days').format('MMMM Do YYYY, h:mm:ss a');
    doc.owner = Meteor.user().profile.name;
    //stop duplicate offers from same user
    if (_.findWhere(BuyOffer.find().fetch(), {owner: doc.owner, book: doc.book}) || _.findWhere(SellOffer.find().fetch(), {owner: doc.owner, book: doc.book}) ) {
      if (Meteor.isClient) {
        alert("You already have a sell offer or buy offer for this book.");
      }
      return;
    }
    check(doc, SellOffer.simpleSchema());
    SellOffer.insert(doc);
  },

  /**
   *
   * Invoked by AutoForm to update a SellOffer record.
   * @param doc The Textbooks document.
   * @param docID It's ID.
   */
  editSellOffer: function (doc, docID) {
    check(doc, SellOffer.simpleSchema());
    SellOffer.update({_id: docID}, doc);
    SellOffer.update({_id: docID}, {$set:{expires: moment().add(7, 'days').format('MMMM Do YYYY, h:mm:ss a')}});
  },

  deleteSellOffer: function (docID) {
    SellOffer.remove(docID);
  }
});

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
  Meteor.publish(sellOffer, function () {
    return SellOffer.find();
  });
}

/**
 * Create the schema for SellOffer
 * See: https://github.com/aldeed/meteor-autoform#common-questions
 * See: https://github.com/aldeed/meteor-autoform#affieldinput
 */
SellOffer.attachSchema(new SimpleSchema({
  book:{
    type: String,
    autoform:{
      group: sellOffer,
      afFieldInput:{
        firstOption:"(Select Textbook)"
      },
      options:function(){
        var books = _.pluck(Textbook.find({},{fields:{'title':1}}).fetch(), 'title');
        return _.map(books, function(value)
        {
          return {
            label: value,
            value: value
          }
        })
      }
    }
  },
  condition: {
    label: "Condition",
    type: String,
    allowedValues: ['Excellent', 'Good', 'Fair', 'Poor'],
    optional: false,
    autoform: {
      group: sellOffer,
      placeholder: "Excellent, Good, Fair, or Poor"
    }
  },
  offer: {
    label: "Offer",
    type: Number,
    optional: false,
    autoform: {
      group: sellOffer,
    }
  },
  expires: {
    type: String,
    optional: true,
    autoform: {
      type: "hidden",
      group: sellOffer,
      placeholder: "1"
    }
  },
  owner: {
    label: "0",
    type: String,
    optional: true,
    autoform: {
      type: "hidden",
      group: sellOffer,
      placeholder: ""
    }
  },
  buyer: {
    label: "0",
    type: String,
    optional: true,
    autoform: {
      type: "hidden",
      group: sellOffer,
      placeholder: ""
    }
  }
}));
