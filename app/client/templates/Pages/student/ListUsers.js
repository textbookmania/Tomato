Template.ListUsers.helpers({
  studentList: function () {
    return Student.find();
  },
});

Template.ListUsers.events({
  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this student?")) {
      var currentPostId = this._id;
      Meteor.call("deleteStudent", currentPostId);
      Router.go('ListUsers');
    }
  }
});