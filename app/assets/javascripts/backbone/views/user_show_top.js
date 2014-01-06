var UserShowTopView = Backbone.View.extend({
  tagName: 'div',
  className: 'container1',

  events: {
    'click a img': 'revealProfilePhotoModal'  
  },

  template: _.template($("script.user-show-page-top[type='text/html']").html()),

  initialize: function(opts) {
    console.log('UserShowView instantiated');

    this.model = opts.model;
    this.listenTo(this.model, "change", this.render);

    // this.collection = opts.collection;
    // this.listenTo(this.collection, 'change', this.render);

    // console.log('fetching collection info');
    // this.collection.fetch();

    this.render();
    return this;
  },

  revealProfilePhotoModal: function() {
    console.log('OPENING profile photo form');
    $("#profile-photo-modal").foundation('reveal', 'open');
  },

  render: function() {
    this.$el.html(this.template());
  }
});