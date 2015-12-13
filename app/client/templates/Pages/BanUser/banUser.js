/**
 * Created by mike on 12/5/2015.
 */

Meteor.subscribe("bannedUsers");

Template.banUser.events({

  'submit form': function (e) {
    e.preventDefault();

    var username = $(e.target).find('[id=banuser]').val();

    Meteor.call('insertBannedUser', username);

 Router.go('Home');

  }

});