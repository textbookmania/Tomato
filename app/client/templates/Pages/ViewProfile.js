/**
 * Created by mike on 11/19/2015.
 */


Template.viewProfile.events({
/*
'change .myFileInput': function(event, template) {
  FS.Utility.eachFile(event, function(file) {
    Images.insert(file, function (err, fileObj) {
      if (err){
        // handle error
      } else {
        // handle success depending what you need to do
        var userId = Meteor.userId();
        var imagesURL = {
              "profile.image": "/cfs/files/images/" + fileObj._id
      };
      Meteor.users.update(userId, {$set: imagesURL});
    }
  });
});
},*/
  'submit form': function(e) {
    e.preventDefault();

    Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.profileImage": $(e.target).find('[id=profile-image]').val()}});
    Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.firstName": $(e.target).find('[id=first-name]').val()}});
    Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.lastName": $(e.target).find('[id=last-name]').val()}});
    Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.phone": $(e.target).find('[id=phone]').val()}});

  }
});

