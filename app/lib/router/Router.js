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

/**/
Router.route('/viewProfile',{
  name: 'viewProfile'
});

Router.route('/studnt',{
  name: 'Students'
});

/**/
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