var NavigationView = Backbone.View.extend({
  tagName: 'div',
  className: 'fixed',

  events: {
    'click a#home-nav': 'goToHome'
  },

  template: _.template($("script.navigation[type='text/html']").html()),

  initialize: function() {
    console.log('NavigationView initialized');
    this.render();
    return this;
  },

  goToHome: function(){

  },

  render: function() {
    this.$el.html(this.template());
  }
});