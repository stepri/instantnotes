Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('notes'); }
});

Router.route('/', {name: 'home', template:'noteItem'});

Router.route('/note/:_id', {
  name: 'noteItem',
  template:'noteItem',
  data: function() { return Notes.findOne(this.params._id); }
});

Router.onBeforeAction('dataNotFound', {only: 'noteItem'});
