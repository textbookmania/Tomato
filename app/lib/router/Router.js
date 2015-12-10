/**
 * Configure Iron Router.
 * See: http://iron-meteor.github.io/iron-router/
 */


Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() { return Meteor.subscribe("Textbook"); },
  loadingTemplate: 'Loading'
});

Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() { return Meteor.subscribe("SellOffer"); },
  loadingTemplate: 'Loading'
});

Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() { return Meteor.subscribe("BuyOffer"); },
  loadingTemplate: 'Loading'
});

Router.route('/', {
  name: 'Home'
});

Router.route('/listTextbook', {
  name: 'ListTextbook'
});

Router.route('/addTextbook', {
  name: 'AddTextbook'
});

Router.route('/textbookEdit/:_id', {
  name: 'EditTextbook',
  data: function() { return Textbook.findOne(this.params._id); }
});

Router.route('/help', {
  name: 'Help'
});

Router.route('/matches',{
  name: 'Matches'
});

Router.route('/student',{
  name: 'Students'
});

Router.route('/viewProfile',{
  name: 'viewProfile'
});

Router.route('/banUser', {
  name: 'banUser'
});

Router.route('/listBuyOffer',{
  name: 'ListBuyOffer'
});

Router.route('/addBuyOffer',{
  name: 'AddBuyOffer'
});

Router.route('/allBuyOffer',{
  name: 'AllBuyOffer'
});


Router.route('/listSellOffer',{
  name: 'ListSellOffer'
});

Router.route('/addSellOffer',{
  name: 'AddSellOffer'
});

Router.route('/listBuyOffer/:_id', {
  name: 'EditBuyOffer',
  data: function() { return BuyOffer.findOne(this.params._id); }
});

Router.route('/listSellOffer/:_id', {
  name: 'EditSellOffer',
  data: function() { return SellOffer.findOne(this.params._id); }
});