console.log(Meteor.users.find().fetch());

/*Validate username, sending a specific error message on failure.
 If profile is not on list of allowed users, will prevent login

 throws error if user is not found on list.
 * */

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
Accounts.onLogin(function () {
  if (Meteor.user().profile.name && _.contains(Meteor.settings.adminUsers, Meteor.user().profile.name)) {
    Roles.addUsersToRoles(Meteor.userId(), 'admin');
  }
});