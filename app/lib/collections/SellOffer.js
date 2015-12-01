var expiration = 1;

selloffer = "SellOffer";
SellOffer = new Mongo.Collection(selloffer);

Meteor.methods({
    addSellOffer: function(doc) {
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
            group: selloffer,
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
            group: selloffer,
            placeholder: "Offer"
        }
    },
    condition: {
        label: "Condition",
        type: String,
        allowedValues: ['Excellent', 'Good', 'Fair', 'Poor'],
        optional: false,
        autoform: {
            group: selloffer,
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
            group: selloffer,
            placeholder: "Expiration Date"
        }
    }
}));