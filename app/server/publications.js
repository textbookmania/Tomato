/**
 * Created by mike on 11/21/2015.
 */

Meteor.publish(null, function() {

  return Meteor.roles.find({});

});

