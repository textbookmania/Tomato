student = "Student";

Student = new Mongo.Collection(student);

Accounts.onLogin(function () {
  var username = Meteor.user().profile.name;

  if (Meteor.user().profile.name && _.contains(Meteor.settings.admin_users, Meteor.user().profile.name)) {
    Roles.addUsersToRoles(Meteor.userId(), 'admin');
  }
});


Meteor.methods({

  addStudent: function(doc) {
    check(doc, Student.simpleSchema());
    Student.insert(doc);
  },

  editStudent: function(doc, docID) {
    check(doc, Student.simpleSchema());
    Student.update({_id: docID}, doc);
  },

  deleteStudent: function(docID) {
    Student.remove({_id: docID});
  }
});

if (Meteor.isServer) {
  Meteor.publish(student, function () {
    return Student.find();
  });
}


Student.attachSchema(new SimpleSchema({
  first: {
    label: "First Name",
    type: String,
    optional: true,
    max: 20,
    autoform: {
      group: student,
      palceholder: "First Name"
    }
  },
  
  last: {
    label: "Last Name",
    type: String,
    optional: true,
    max: 20,
    autoform: {
      group: student,
      palceholder: "Last Name"
    }
  },

  email: {
    label: "UHID",
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: student,
      palceholder: "UHID"
    }
  },

  pic: {
    label: "Pic URL",
    type: String,
    optional: true,
    autoform: {
      group: student,
      palceholder: "Pic URL"
    }
  },

  phone: {
    label: "Phone #",
    type: String,
    optional: true,
    max: 20,
    autoform: {
      group: student,
      palceholder: "Phone #"
    }
  },

  notification1: {
    label: "Email Notifications",
    type: Boolean,
    optional: true,
    max: 20,
    autoform: {
      group: student,
      placeholder: "Email Notifications"
    }
  },

  notification2: {
    label: "Call Me",
    type: Boolean,
    optional: true,
    max: 20,
    autoform: {
      group: student,
      placeholder: "Call Me"
    }
  }
}));