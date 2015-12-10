/**
 * After successful edit, go to List page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 *  <button type="submit" class="btn btn-primary">UPDATE</button>
 *   <input type="submit" value="Submit" class="btn btn-primary submit"/>
 */
AutoForm.hooks({
  EditStudentForm: {
    onSuccess: function(formType, result) {
      Router.go('ListStudent');
    }
  }
});

Template.EditStudent.events({
  'submit form': function(e) {
    e.preventDefault();

    Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.profileImage": $(e.target).find('[id=profile-image]').val()}});
    Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.firstName": $(e.target).find('[id=first-name]').val()}});
    Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.lastName": $(e.target).find('[id=last-name]').val()}});
    Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.phone": $(e.target).find('[id=phone]').val()}});

  }
});