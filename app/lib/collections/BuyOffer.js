var expiration = 1;

buyoffer = "BuyOffer";
BuyOffer = new Mongo.Collection(buyoffer);

Meteor.methods({
    addBuyOffer: function(doc) {
        doc.creator = Meteor.user().profile.name;
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
            afFieldInput:{
                firstOption:"(Select Textbook)"
            },
            options:function(){
                var books = _.pluck(Textbook.find({},{fields:{'title':1}}).fetch(), 'title');
                var currentSells = SellOffer.find({creator:Meteor.user().profile.name}).map(function(object){return object.title;});
                var allowedBooks = _.difference(books, currentSells);
                return allowedBooks.map(function(value)
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
            placeholder: "Offer"
        }
    },
    condition: {
        label: "Condition",
        type: String,
        allowedValues: ['Excellent', 'Good', 'Fair', 'Poor'],
        optional: false,
        autoform: {
            afFieldInput:{
                firstOption:"(Select Condition)"
            },
            options:[
                {label: "Excellent", value: "Excellent"},
                {label: "Good", value: "Good"},
                {label: "Fair", value: "Fair"},
                {label: "Poor", value: "Poor"}
            ]
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
            placeholder: "Expiration Date"
        }
    },
    creator: {
        type: String,
        optional: true
    }

}));