/* Validate username, sending a specific error message on failure.
* this part is buggy, will leave it commented out until solution is found
* */

/*
Accounts.validateNewUser(function (user) {
  if (user) {
    var username = user.services.cas.id;
    if (username && _.contains(Meteor.settings.allowed_users, username)) {
      return true;
    }
  }
  throw new Meteor.Error(403, "User not in the allowed list");
});*/

console.log(Meteor.users.find().fetch());
 // Roles.addUsersToRoles('michael4', ['admin'])

console.log("*****");
//Roles.addUsersToRoles('rFvTJB5eY2Ep5dZio', ['admin'])

//if (_.contains((Meteor.settings.public.adminUsers), Meteor.user()._id))
//  while(!(Roles.addUsersToRoles(Meteor.user(), ['admin'])));
//  Roles.addUsersToRoles(Meteor.user(), ['admin'])

for(var i = 0; i<Meteor.settings.adminUsers.length; i++)
  Roles.addUsersToRoles(Meteor.settings.adminUsers[i], ['admin'])


