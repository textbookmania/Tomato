/**
 * Created by mike on 12/5/2015.
 */
/*
Banned = new Mongo.Collection(Banned);
// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
  Meteor.publish(Banned, function () {
    return Banned.find();
  });}
//}

AutoForm.hooks({
  BanUserForm: {

    onSuccess: function (formType, result) {
      Router.go('Home');
    }
  }
});*/
Template.banUser.events({

  'submit form': function (e) {
    e.preventDefault();

    var username = event.target.text.value;

    Banned.insert({
    text: text
  })
    //   Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.profileImage": $(e.target).find('[id=ban]').val()}});

    //  var username = Meteor.user().profile.name;

    if (username && _.contains(Meteor.settings.adminUsers, username)) {
      Roles.addUsersToRoles(Meteor.userId(), 'banned');
    }

  //  Banned.insert(username);
    console.log("*********ADDED: ");
    console.log(username);
    Router.go('Home');

  }

});