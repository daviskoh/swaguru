var NavigationView = Backbone.View.extend({
  tagName: 'div',
  className: 'fixed',

  events: {
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

  goToHome: function(e) { 
    e.preventDefault();
    Backbone.history.navigate('', {trigger: true});
  },

  profile: function(e) {
    e.preventDefault();

    Backbone.history.navigate('users/' + sessionID, {trigger: true});
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

    // this.session.fetch({
    //   error: function(model, resp) {
    //     console.log('failed session.fetch resp: %s', resp);
    //   }
    // });

    // this.session.destroy({
    //   success: function(model, resp) {
    //     console.log('session destroy Succcess');
    //     console.log(model, resp);
    //   },
    //   error: function(model, resp) {
    //     console.log('session destroy Error');
    //     console.log(model, resp);
    //   }
    // });

    // destroy session using generic jquery ajax
    // console.log(this.session.get('url'));

    // hard set session id before .destroy()

    this.session.destroy();
    $.ajax({
      url: "/session",
      type: "POST",
      dataType: "json",
      data: {"_method": "delete"},
      context: this
    });

    // Backbone.history.navigate('session/new', {trigger: true});
  },

  render: function() {
    this.$el.html(this.template());
  }
});