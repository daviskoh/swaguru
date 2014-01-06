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

  revealProfilePhotoModal: function(e) {
    e.preventDefault();

    if (this.model.get('id') === sessionID) {
      console.log('OPENING profile photo modal');

      var modal = $("#photo-modal");

      $(modal.children()[0]).text('Update Profile Photo');

      $(modal.children('button')[0]).show();

      modal.foundation('reveal', 'open');
    { else {
      console.log('NOT authorized to upload photo');
    }
  },

  render: function() {
    this.$el.html(this.template());
  }
});