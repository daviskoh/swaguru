var NavigationView = Backbone.View.extend({
  tagName: 'div',
  className: 'fixed',

  events: {
    'click a#main-logo': 'goToHome',
    'click a#browse': 'goToPhotoIndex',
    'click a#home-nav': 'goToHome',
    'click a#user-show-nav': 'profile',
    'click a#sign-up-nav': 'goToSignUp',
    'click a#sign-in-nav': 'goToSignIn',
    'click a#sign-out-nav': 'signOut'
  },

  template: _.template($("script.navigation[type='text/html']").html()),

  initialize: function(opts) {
    console.log('NavigationView initialized');

    this.session = opts.session;

    this.render();
    return this;
  },

  goToPhotoIndex: function(e) {
    e.preventDefault();

    console.log('going to Photo Index');
  },

  goToHome: function(e) { 
    e.preventDefault();
    Backbone.history.navigate('', {trigger: true});
  },

  profile: function(e) {
    e.preventDefault();

    // update current user

    if (sessionID != null) {
      Backbone.history.navigate('users/' + sessionID, {trigger: true});
    }
  },

  goToSignUp: function(e) {
    e.preventDefault();
    Backbone.history.navigate('users/new', {trigger: true});
  },

  goToSignIn: function(e) {
    e.preventDefault();
    Backbone.history.navigate('session/new', {trigger: true});
  },

  signOut: function(e) {
    e.preventDefault();

    // if (sessionID != null) {
      console.log('session destroyed');

      // HARD SET ID before .destroy()
      this.session.set('id', sessionID);
      this.session.destroy();

      // change ID back to null to simulate !isNew()
      this.session.set('id', null);

      sessionID = null;
      Backbone.history.navigate('session/new', {trigger: true});
    // }
  },

  render: function() {
    this.$el.html(this.template());
  }
});