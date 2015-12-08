var expiration = 1;

selloffer = "SellOffer";
SellOffer = new Mongo.Collection(selloffer);

Meteor.methods({
    addSellOffer: function(doc) {
        doc.creator = Meteor.user().profile.name;
        check(doc, SellOffer.simpleSchema());
        SellOffer.insert(doc);
    },
    editSellOffer: function(doc, docID) {
        check(doc, SellOffer.simpleSchema());
        SellOffer.update({_id: docID}, doc);
    },
    deleteSellOffer: function(docID){
        SellOffer.remove(docID);
    }
});

if (Meteor.isServer) {
    Meteor.publish(selloffer, function () {
        return SellOffer.find();
    });
}

SellOffer.attachSchema(new SimpleSchema({
    book:{
        type: String,
        autoform:{
            afFieldInput:{
                firstOption:"(Select Textbook)"
            },
            options:function(){
                var books = _.pluck(Textbook.find({},{fields:{'title':1}}).fetch(), 'title');
                var currentBuys = BuyOffer.find({creator:Meteor.user().profile.name}).map(function(object){return object.title;});
                var allowedBooks = _.difference(books, currentBuys);
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