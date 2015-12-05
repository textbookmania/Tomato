/**
 * Created by mike on 11/19/2015.

 * These are javascript events to update user profile values
 */
Template.viewProfile.events({

  'submit form': function(e) {
    e.preventDefault();

    Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.profileImage": $(e.target).find('[id=profile-image]').val()}});
    Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.firstName": $(e.target).find('[id=first-name]').val()}});
    Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.lastName": $(e.target).find('[id=last-name]').val()}});
    Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.phone": $(e.target).find('[id=phone]').val()}});

  }
});

