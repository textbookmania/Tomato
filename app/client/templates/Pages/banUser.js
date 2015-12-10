/**
 * Created by mike on 12/5/2015.
 */

Template.banUser.events({

  'submit form': function (e) {
    e.preventDefault();

    var username = $(e.target).find('[id=banuser]').val();

    if (username && _.contains(Meteor.settings.adminUsers, username)) {
      Roles.addUsersToRoles(Meteor.userId(), 'banned');
    }

    //  Banned.insert(username);
    console.log("*********: ");
    console.log(username);
    console.log("*********: ");

    console.log(Meteor.users.find().fetch());
    console.log("*****users****: ");
    console.log(Meteor.users);
    console.log("*****users.find****: ");

    console.log(Meteor.users.find({"profile.name" : username}));
 //   if (Meteor.users.find().profile.name == username)
      //console.log(Meteor.userId());
    console.log("*********: ");
    console.log("*********: ");

    var id = Meteor.users.find({"profile.name" : username});
    if(Meteor.users.find({"profile.name" : username}))
      console.log(this.userId);

    console.log(_.pluck(id, 'userID'));
    Router.go('Home');

  }

});