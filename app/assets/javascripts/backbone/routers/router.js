var Router = Backbone.Router.extend({
  routes: {
    '': 'welcome',
    'users/new': 'usersNew',
    'sessions/new': 'sessionsNew'
  },

  initialize: function() {
    console.log("Router created");
  },

  welcome: function() {
    this.loadView(1, new WelcomeView());
  },

  usersNew: function() {
    console.log('users/new route hit');
    this.loadView(1, new newUserFormView());
  },

  sessionsNew: function() {
    console.log('sessions/new route hit');
    // setup login view
  },

  loadView: function(containerNumber, view) {
    this.main && this.main.remove();
    this.main = view;
    $('div.container' + containerNumber).append(view.el);
  }
});