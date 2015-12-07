student = "Student";

Student = new Mongo.Collection(student);

Accounts.onLogin(function () {
  if (Meteor.user().profile.name && _.contains(Meteor.settings.admin_users, Meteor.user().profile.name)) {
    Roles.addUsersToRoles(Meteor.userId(), 'admin');
  }

  if (Meteor.isServer) {
    if (!_.findWhere(Student.find().fetch(), {email: Meteor.user().profile.name})) {
      Student.insert({
        'email': Meteor.user().profile.name
      });
    }
  }
});
/*
Accounts.validateNewUser(function (user) {
  if (user) {
    var username = user.services.cas.id;
    if (username && _.contains(Meteor.settings.allowed_users, username)) {
      return true;
    }
  }
  throw new Meteor.Error(403, "User not in the allowed list");
});

/*
 Comares user's profile name against settings list of admin users. If they match, user is given admin role.
 */
/*Accounts.onLogin(function () {
  var username = Meteor.user().profile.name;
  if (username && _.contains(Meteor.settings.adminUsers, username)) {
    Roles.addUsersToRoles(Meteor.userId(), 'admin');
  }
  var email = username.concat("@hawaii.edu");
  Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.email": email}});
});*/


Meteor.methods({
  /**
   * Invoked by AutoForm to add a new BuyOffer record.
   * @param doc The Offer document.
   */
  addStudent: function(doc) {
    check(doc, Student.simpleSchema());
    Student.insert(doc);
  },
  /**
   *
   * Invoked by AutoForm to update a BuyOffer record.
   * @param doc The BuyOffer document.
   * @param docID It's ID.
   */
  editStudent: function(doc, docID) {
    check(doc, Student.simpleSchema());
    Student.update({_id: docID}, doc);
  },

  deleteStudent: function(docID) {
    Student.remove({_id: docID});
  }
});

// Publish the entire Collection.  Subscription performed in the router.
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