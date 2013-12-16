var NavigationView = Backbone.View.extend({
  tagName: 'div',
  className: 'fixed',

  events: {
    'click a#home-nav': 'goToHome',
    'click a#sign-up-nav': 'goToSignUp',
    'click a#sign-in-nav': 'goToSignIn'
  },

  template: _.template($("script.navigation[type='text/html']").html()),

  initialize: function() {
    console.log('NavigationView initialized');
    this.render();
    return this;
  },

  goToHome: function(e){
    e.preventDefault();
    Backbone.history.navigate('', {trigger: true});
  },

  goToSignUp: function(e) {
    e.preventDefault();
    Backbone.history.navigate('users/new', {trigger: true})
  },

  goToSignIn: function(e) {
    e.preventDefault();
    Backbone.history.navigate('session/new', {trigger: true})
  },

  render: function() {
    this.$el.html(this.template());
  }
});