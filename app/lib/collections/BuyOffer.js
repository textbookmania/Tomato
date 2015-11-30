var expiration = 1;

buyoffer = "BuyOffer";

BuyOffer = new Mongo.Collection(buyoffer);

Meteor.methods({

    addBuyOffer: function(doc) {
        check(doc, BuyOffer.simpleSchema());
        BuyOffer.insert(doc);
    },
    editBuyOffer: function(doc, docID) {
        check(doc, BuyOffer.simpleSchema());
        BuyOffer.update({_id: docID}, doc);
    },
    deleteBuyOffer: function(docID){
        BuyOffer.remove(docID);
    }
});

if (Meteor.isServer) {
    Meteor.publish(buyoffer, function () {
        return BuyOffer.find();
    });
}

BuyOffer.attachSchema(new SimpleSchema({
    book:{
        type: String,
        autoform:{
            group: buyoffer,
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
    offer: {
        label: "Offer",
        type: Number,
        optional: false,
        autoform: {
            group: buyoffer,
            placeholder: "Offer"
        }
    },
    condition: {
        label: "Condition",
        type: String,
        optional: false,
        autoform: {
            group: buyoffer,
            placeholder: "Condition"
        }
    },
    expirationDate: {
        type: Date,
        label: "Expiration",
        optional: true,
        autoValue: function(){
            d = new Date();
            d.setDate(d.getDate() + expiration);
            return d;
        },
        autoform: {
            type: "hidden",
            group: buyoffer,
            placeholder: "Expiration Date"
        }
    }
}));