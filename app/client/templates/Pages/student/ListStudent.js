Template.ListStudent.helpers({
  studentList: function () {
    return Student.find();
  },

  currentUser: function () {
    return this._id;
  }
});

Template.ListStudent.events({
  'click .deletestudent': function(e) {
    e.preventDefault();

    if (confirm("Delete this post?")) {
      var currentPostId = this._id;
      Meteor.call("deleteStudent", currentPostId);
      Router.go('ListStudent');
    }
  }
});