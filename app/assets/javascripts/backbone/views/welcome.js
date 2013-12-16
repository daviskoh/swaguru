var WelcomeView = Backbone.View.extend({
  tagName: 'ul',

  events: {
    'click a#sign-up-button': 'goToSignUp',
    'click a#sign-in-button': 'goToSignIn'
  },

  template: _.template($("script.welcome[type='text/html']").html()),

  initialize: function() {
    console.log('WelcomeView initialized');
    this.render();
    return this;
  },

  goToSignUp: function(e) {
    console.log('going to /users/new');
    e.preventDefault();
    Backbone.history.navigate( 'users/new', {trigger: true});
  },

  goToSignIn: function(e) {
    console.log('going to /session/new');
    e.preventDefault();
    Backbone.history.navigate( 'session/new', {trigger: true});
  },

  render: function() {
    this.$el.html(this.template());
  }
});
