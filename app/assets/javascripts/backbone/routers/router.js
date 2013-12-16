var Router = Backbone.Router.extend({
  routes: {
    '': 'welcome',
    'users/new': 'usersNew',
    'session/new': 'sessionNew'
  },

  initialize: function() {
    console.log("Router created");
  },

  welcome: function() {
    this.loadView(1, new WelcomeView());
  },

  usersNew: function() {
    console.log('users/new route hit');
    this.loadView(1, new NewUserFormView());
  },

  sessionNew: function() {
    console.log('sessions/new route hit');
    this.loadView(1, new SignInFormView());
  },

  loadView: function(containerNumber, view) {
    this.main && this.main.remove();
    this.main = view;
    $('div.container' + containerNumber).append(view.el);
  }
});