/**
 * Configure Iron Router.
 * See: http://iron-meteor.github.io/iron-router/
 */


Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() { return Meteor.subscribe("Textbook"); },
  loadingTemplate: 'Loading'
});

Router.route('/', {
  name: 'Home'
});

Router.route('/list', {
  name: 'ListTextbook'
});

Router.route('/add', {
  name: 'AddTextbook'
});

Router.route('/textbook/:_id', {
  name: 'EditTextbook',
  data: function() { return Textbook.findOne(this.params._id); }
});

Router.route('/help', {
  name: 'Help'
});

Router.route('/buyOffers',{
  name: 'BuyOffers'
});

Router.route('/sellOffers',{
  name: 'SellOffers'
});

Router.route('/matches',{
  name: 'Matches'
});

Router.route('/student',{
  name: 'Students'
});


