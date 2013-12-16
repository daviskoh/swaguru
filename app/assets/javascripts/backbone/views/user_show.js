var UserShowView = Backbone.View.extend({
  tagName: 'div',
  className: 'user-show-main-container',

  template: _.template($("script.user-show-page[type='text/html']").html()),

  initialize: function() {
    console.log('UserShowView instantiated');

    this.render();
    return this;
  },

  render: function() {
    this.$el.html(this.template());
  }
});