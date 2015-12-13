//console.log(Meteor.users.find().fetch());

Meteor.publish("bannedUsers", function () {
  //console.log("__________begin fetch____________________");
  //console.log(bannedUsers.find());
  return bannedUsers.find();

});
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
      var username = Meteor.user().profile.name;
      var arrayOfUsers = bannedUsers.find({user: username}).fetch();

      // console.log(arrayOfUsers);
      // console.log("********************");
      //if(arrayOfUsers.length>0)
      //console.log("BANANA!\n")
      //  console.log("__________begin login____________________");
//  console.log("**user name is: " + username + "\n")
      //console.log(bannedUsers.find({ user: username }));  //find by user name

      if (arrayOfUsers.length > 0) {
        Roles.addUsersToRoles(Meteor.userId(), 'banned');
        console.log("**BANNED**\n");
      }

      // console.log("__________end login____________________");

      if (username && _.contains(Meteor.settings.adminUsers, username)) {
        Roles.addUsersToRoles(Meteor.userId(), 'admin');
      }
      var email = username.concat("@hawaii.edu");
      Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.email": email}});
    });