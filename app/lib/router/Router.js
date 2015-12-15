/**
 * Configure Iron Router.
 * See: http://iron-meteor.github.io/iron-router/
 */

checkUsername = function() {
  if (Meteor.user()) {
    if (!Meteor.loggingIn()) {
      return Meteor.user().profile.name;
    }
  }
};

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

Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() { return Meteor.subscribe("Student"); },
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

Router.route('/listmatches',{
  name: 'ListMatches'
});

Router.route('/liststudent', {
  name: 'ListStudent'
});

Router.route('/addstudent', {
  name: 'AddStudent'
});

Router.route('/student/', {
  name: 'EditStudent',
  data: function() { return Student.findOne({email: checkUsername()}) }
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

Router.route('/banned',{
  name: 'banned'
});

Router.route('/listbooks',{
  name: 'ListBooks'
});

Router.route('/listall',{
  name: 'ListAll'
});

Router.route('/listusers',{
  name: 'ListUsers'
});