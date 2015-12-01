Template.viewProfile.events({
  'submit form': function(e) {
    e.preventDefault();

    if(confirm("Submit?")) {
      Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.profileImage": $(e.target).find('[id=profile-image]').val()}});
      Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.firstName": $(e.target).find('[id=first-name]').val()}});
      Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.lastName": $(e.target).find('[id=last-name]').val()}});
      Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.phone": $(e.target).find('[id=phone]').val()}});
      Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.contact": $(e.target).find('[id=checkbox1]').val()}});
    }
  }
});

