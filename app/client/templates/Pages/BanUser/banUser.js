/**
 * Created by mike on 12/5/2015.
 */

Meteor.subscribe("bannedUsers");
/*
submit button for ban user. take value from html and adds name to banned user collection
 */
Template.banUser.events({

  'submit form': function (e) {
    e.preventDefault();

    var username = $(e.target).find('[id=banuser]').val();

    Meteor.call('insertBannedUser', username);

 Router.go('Home');

  }

});