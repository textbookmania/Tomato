Template.ListTextbook.helpers({

  /**
   * @returns {*} All of the Textbook documents.
   */
  textbookList: function () {
    return Textbook.find();
  }
});

Template.ListTextbook.events({
  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this post?")) {
      var currentTextbookId = this._id;
      Meteor.call("deleteTextbook", currentTextbookId)
      Router.go('textbookList');
    }
  }
});