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

Router.route('/viewProfile',{
  name: 'viewProfile'
});

Router.route('/buyofferList', {
  name: 'ListBuyOffer'
});

Router.route('/buyofferAdd', {
  name: 'AddBuyOffer'
});

Router.route('/buyofferEdit/:_id', {
  name: 'EditBuyOffer',
  data: function() { return BuyOffer.findOne(this.params._id); }
});

Router.route('/sellofferList', {
  name: 'ListSellOffer'
});

Router.route('/sellofferAdd', {
  name: 'AddSellOffer'
});

Router.route('/sellofferEdit/:_id', {
  name: 'EditSellOffer',
  data: function() { return SellOffer.findOne(this.params._id); }
});

/*
Router.route('/profile',{
  waitOn: function () {
    return Meteor.subscribe('images')
  },
  action: function () {
    if (this.ready())
      this.render('Profile');
  else
    this.render('Loading');
  }
});*/
