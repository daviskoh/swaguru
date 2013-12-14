var UserFormView = Backbone.View.extend({
  tagName: 'form',

  template: _.template($("script[type='text/html']").html()),

  initialize: function() {
    this.$el.addClass('new-user');
    this.$el.appendTo($('div.container1'));
  },

  render: function(){
    this.$el.html(this.template());
  }
});