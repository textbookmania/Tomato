var checked = false;
Template.IfLoggedIn.helpers({
  /**
   * @returns {*} True if Meteor is in the process of logging in.
   */
  authInProcess: function () {
    return Meteor.loggingIn();
  },
  /**
   * @returns {boolean} True if there is a logged in user.
   */

  canShow: function () {

    if (!checked) {
      console.log(Meteor.user());
      //console.log(Meteor.settings.public.adminUsers);
/*
      if (_.contains((Meteor.settings.public.adminUsers), Meteor.user()._id))
      //  while(!(Roles.addUsersToRoles(Meteor.user(), ['admin'])));
        Roles.addUsersToRoles(Meteor.user(), ['admin'])*/
      checked = true;
    }

    return !!Meteor.user();

  }
});