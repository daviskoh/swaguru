var UserShowView = Backbone.View.extend({
  tagName: 'div',
  className: 'user-show-main-container',

  events: {
    'click a img': function(e){e.preventDefault();}
  },

  template: _.template($("script.user-show-page[type='text/html']").html()),

  initialize: function(opts) {
    console.log('UserShowView instantiated');

    this.model = opts.model;

    this.render();
    return this;
  },

  render: function() {
    this.$el.html(this.template());
  }
});