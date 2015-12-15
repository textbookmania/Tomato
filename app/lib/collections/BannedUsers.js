/**
 * Created by mike on 12/11/2015.
 * This collection contains all banned users
 */
//bannedUsers = "BannedUsers";

bannedUsers = new Meteor.Collection('bannedUsers');

Meteor.methods({

  'insertBannedUser': function(username){
    bannedUsers.insert({user:username});

  },
  'unban': function(username){
    bannedUsers.remove({user:username});
  }
});