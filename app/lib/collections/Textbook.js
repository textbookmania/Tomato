textbook = "Textbook";  // avoid typos, this string occurs many times.

Textbook = new Mongo.Collection(textbook);

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new Textbook record.
   * @param doc The Textbook document.
   */
  addTextbook: function(doc) {
    check(doc, Textbook.simpleSchema());
    Textbook.insert(doc);
  },
  /**
   *
   * Invoked by AutoForm to update a Textbook record.
   * @param doc The Textbook document.
   * @param docID It's ID.
   */
  editTextbook: function(doc, docID) {
    check(doc, Textbook.simpleSchema());
    Textbook.update({_id: docID}, doc);
  },
  deleteTextbook: function(docID){
    Textbook.remove(docID);
  }
});

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
  Meteor.publish(textbook, function () {
    return Textbook.find();
  });
}


/**
 * Create the schema for Textbook
 * See: https://github.com/aldeed/meteor-autoform#common-questions
 * See: https://github.com/aldeed/meteor-autoform#affieldinput
 */
Textbook.attachSchema(new SimpleSchema({
  title: {
    label: "Title",
    type: String,
    optional: false,
    max: 250,
    autoform: {
      group: textbook,
      placeholder: "Title"
    }
  },
  author: {
    label: "Author",
    type: String,
    optional: false,
    max: 100,
    autoform: {
      group: textbook,
      placeholder: "Author"
    }
  },
  condition: {
    label: "Condition",
    type: String,
    allowedValues: ['Excellent', 'Good', 'Fair', 'Poor'],
    optional: false,
    max: 100,
    autoform: {
      group: textbook,
      placeholder: "Condition",
      options:[
        {label: "Excellent", value: "Excellent"},
        {label: "Good", value: "Good"},
        {label: "Fair", value: "Fair"},
        {label: "Poor", value: "Poor"}
      ]
    }
  },
  isbn: {
    label: "ISBN",
    type: String,
    optional: false,
    min: 10,
    max: 10,
    autoform: {
      group: textbook,
      placeholder: "ISBN"
    }
  }
}));
