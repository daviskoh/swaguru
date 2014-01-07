var UserShowBottomView = Backbone.View.extend({
  tagName: 'div',
  className: 'container2',

  events: {
    'click #upload-new-photo': 'revealPhotoModal'
  },

  template: _.template($("script.user-show-page-bottom[type='text/html']").html()),

  initialize: function(opts) {
    console.log('UserShowBottomView instantiated');

    this.model = opts.model;

    this.collection = opts.collection;
    this.listenTo(this.collection, 'change', this.render);

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
    });
    console.log('this.collection.fetch() end');

    return this;
  },

  uploadNewPhoto: function(e){
    console.log('uploading new PHOTO');
    e.preventDefault();

    var fileInput = $('#upload-new-photo')[0];
    console.log(fileInput);

    var file = fileInput.files[0];
    console.log('the image file: ');
    console.log(file);

    var imageType = /image.*/;  
    
    var self = this;
    if (file.type.match(imageType)) {
        console.log('FILE IS SUPPORTED');

        var reader = new FileReader();

        console.log(reader);

        reader.onload = function(e) {
          console.log('reader.onload on Dat uploadNewPhoto bitch');

          console.log(reader.result);

          photo = self.collection.create({user_id: self.model.get('id'), image: reader.result}, {
            success: function(model, resp, options) {
              _.each(arguments, function(element) {
                console.log(element);
              });
            },
            error: function(model, resp, options) {
              _.each(arguments, function(element) {
                console.log(element);
              });
            }
          });
        };

        reader.readAsDataURL(file);
      } else {
        console.log('FILE NOT SUPPORTED');
        // render error message somewhere
    }  
  },

  revealPhotoModal: function(e) {
    e.preventDefault();

    if (this.model.get('id') === sessionID) {
      console.log('OPENING photo modal');

      var modal = $("#photo-modal");

      $(modal.children()[0]).text('Upload a New Photo');

      $(modal.children('button')[1]).show();

      modal.foundation('reveal', 'open');
    }
  },

  render: function() {
    this.$el.html(this.template());
  }
});