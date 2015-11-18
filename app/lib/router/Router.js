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

Router.route('/students', {
  name: 'Students'
});

Router.route('/textbooks', {
  name: 'Textbooks'
});

Router.route('/random1', {
  name: 'random1'
});

Router.route('/random2', {
  name: 'random2'
});

Router.route('/matches', {
  name: 'Matches'
});

Router.route('/help', {
  name: 'Help'
});

