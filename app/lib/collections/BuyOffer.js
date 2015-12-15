buyOffer = "BuyOffer";  // avoid typos, this string occurs many times.

BuyOffer = new Mongo.Collection(buyOffer);

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new BuyOffer record.
   * @param doc The Textbooks document.
   */
  addBuyOffer: function(doc) {
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
    check(doc, BuyOffer.simpleSchema());
    BuyOffer.insert(doc);
  },
  /**
   *
   * Invoked by AutoForm to update a BuyOffer record.
   * @param doc The Textbooks document.
   * @param docID It's ID.
   */
  editBuyOffer: function(doc, docID) {
    check(doc, BuyOffer.simpleSchema());
    BuyOffer.update({_id: docID}, doc);
    BuyOffer.update({_id: docID}, {$set:{expires: moment().add(7, 'days').format('MMMM Do YYYY, h:mm:ss a')}});
  },

  deleteBuyOffer: function(docID){
    BuyOffer.remove(docID);
  }
});

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
  Meteor.publish(buyOffer, function () {
    return BuyOffer.find();
  });
}


/**
 * Create the schema for BuyOffer
 * See: https://github.com/aldeed/meteor-autoform#common-questions
 * See: https://github.com/aldeed/meteor-autoform#affieldinput
 */
BuyOffer.attachSchema(new SimpleSchema({
  book:{
    type: String,
    autoform:{
      group: buyOffer,
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
    allowedValues: ['Excellent', 'Good', 'Fair', 'Poor', 'Don\'t care'],
    optional: false,
    autoform: {
      group: buyOffer,
      placeholder: "Excellent, Good, Fair, Poor, or Don\'t care"
    }
  },
  offer: {
    label: "Offer",
    type: Number,
    optional: false,
    autoform: {
      group: buyOffer,
    }
  },
  expires: {
    type: String,
    optional: true,
    autoform: {
      type: "hidden",
      group: buyOffer,
      placeholder: "0"
    }
  },
  owner: {
    label: "Owner",
    type: String,
    optional: true,
    autoform: {
      type: "hidden",
      group: buyOffer,
      placeholder: ""
    }
  },
  seller: {
    label: "0",
    type: String,
    optional: true,
    autoform: {
      type: "hidden",
      group: buyOffer,
      placeholder: ""
    }
  }
}));
