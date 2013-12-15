var newUserFormView = Backbone.View.extend({
  tagName: 'form',
  classname: 'new-user',

  events: {
    'submit': 'signUp'
  },

  template: _.template($("script.user-form[type='text/html']").html()),

  initialize: function() {
    console.log('UserFormView initialized');
    this.render();
  },

  signUp: function(e) {
    e.preventDefault();
    
    var name = this.$el.find("input[name='name']").val();
    var email = this.$el.find("input[name='email']").val();
    var password = this.$el.find("input[name='password']").val();
    var passwordConfirmation = this.$el.find("input[name='password-confirmation']").val();

    console.log('name: %s, email: %s, password: %s, password-confirm: %s', name, email, password, passwordConfirmation);

    this.el.reset();
  },

  render: function(){
    this.$el.html(this.template());
  }
});