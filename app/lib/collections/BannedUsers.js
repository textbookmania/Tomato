/**
 * Created by mike on 12/11/2015.
 * This collection contains all banned users
 */
//bannedUsers = "BannedUsers";

bannedUsers = new Meteor.Collection('bannedUsers');

Meteor.methods({

  'insertBannedUser': function(username){
  //  console.log("****** begin Meteor method");
    //console.log(username);
    bannedUsers.insert({user:username});
    //console.log("****** end Meteor method");

  },
  'unban': function(username){
    bannedUsers.remove({user:username});
  }
});