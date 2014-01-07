var UserShowBottomView = Backbone.View.extend({
  tagName: 'div',
  className: 'container2 rows',

  events: {
    'click #upload-new-photo': 'revealPhotoModal'
  },

  template: _.template($("script.user-show-page-bottom[type='text/html']").html()),

  initialize: function(opts) {
    console.log('UserShowBottomView instantiated');

    this.model = opts.model;

    this.collection = opts.collection;

    console.log('fetching collection info');
    var self = this;
    this.collection.fetch({
      success: function(collection, resp, opts) {
        console.log('UserPhotos FETCH SUCCESS');
        _.each(arguments, function(ele) { console.log(ele) });
        self.render();
      },
      error: function(collection, resp, opts) {
        console.log('UserPhotos FETCH ERROR');
        _.each(arguments, function(ele) { console.log(ele) });
        self.render();
      }
    }, {reset: true});
    console.log('this.collection.fetch() end');

    return this;
  },

  revealPhotoModal: function(e) {
    e.preventDefault();

    // add event listener here to prevent repeat fetch after 1st load
    // this.listenTo(this.collection, 'add', this.prependPhoto);

    if (this.model.get('id') === sessionID) {
      console.log('OPENING photo modal');

      var modal = $("#photo-modal");

      $(modal.children()[0]).text('Upload a New Photo');

      $(modal.children('button')[1]).show();

      modal.foundation('reveal', 'open');
    }
  },

  // prependPhoto: function() {
  //   var last = this.collection.last();

  //   var img = $('<img>');
  //   img.attr('src', last.get('image_url'));

  //   this.$el.find('ul.user-show-content').prepend(img);
    
  //   this.stopListening(this.collection, 'add');
  // },

  render: function() {
    this.$el.html(this.template());
  }
});