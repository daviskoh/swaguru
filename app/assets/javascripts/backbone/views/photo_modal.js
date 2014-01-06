var PhotoModalView = Backbone.View.extend({
  tagName: 'div',
  className: 'reveal-modal',
  id: 'photo-modal',

  events: {
    'change #fileInput': 'readProfilePhoto',
    'click button#upload-profile-photo': 'updateProfilePhoto',
    'click button#upload-photo': 'uploadNewPhoto',
    'click a.close-reveal-modal': 'closePhotoModal'
  },

  template: _.template($("script.photo-upload[type='text/html']").html()),

  initialize: function(opts) {
    this.model = opts.model;
    this.collection = opts.collection;

    console.log('ProfilePhotoUploadView instantiated');

    this.render();
    this.clearModal();
    return this;
  },

  readProfilePhoto: function() {
    console.log('readProfilePhoto method call');

    var fileInput = $('#fileInput')[0];
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
          console.log('reader.onload begin');

          // set this.reader to be used or not
          self.reader = reader;

          // preview profile profile
          var img = $('<img>');
          console.log(img);
          img.attr('src', reader.result);

          $('.preview-photo').append($('<h3>Photo Preview</h3>')).append(img);
        };

        reader.readAsDataURL(file);
      } else {
        console.log('FILE NOT SUPPORTED');
        // render error message somewhere
    }  
  },

  updateProfilePhoto: function() {
    this.model.set('profile_photo', this.reader.result);

    // this.model.set('profile_photo_file_name', file.name);
    // this.model.set('profile_photo_content_type', file.type);
    // this.model.set('profile_photo_file_size', file.size);
    // this.model.set('profile_photo_updated_at', new Date());

    this.model.url = '/api/users/' + this.model.get('id');

    // persist to server DB
    this.model.save({
      success: function() {
        console.log('model.save() SUCCESS');
        _.each(arguments, function(element) {
          console.log(element);
        });
      },
      error: function(){
        console.log('model.save() ERROR');
        _.each(arguments, function(element) {
          console.log(element);
        });
      }
    }, {reset: true});

    this.clearModal();
    this.closePhotoModal();
    console.log('model.save() done');
  },

  uploadNewPhoto: function() {
    console.log('UPLOADING new photo');

    // create new user's photo on client side
    photo = this.collection.create({user_id: this.model.get('id'), image: this.reader.result}, {
      success: function(model, resp, options) {
        console.log('new photo CREATE SUCCESS');

        _.each(arguments, function(element) {
          console.log(element);
        });
      },
      error: function(model, resp, options) {
        console.log('new photo CREATE ERROR');

        _.each(arguments, function(element) {
          console.log(element);
        });
      }
    });

    this.clearModal();
    this.closePhotoModal();
  },

  closePhotoModal: function() {
    console.log('CLOSING profile photo modal');

    this.clearModal();

    this.$el.foundation('reveal', 'close');
  },

  clearModal: function() {
    this.$el.children('button').hide();
    $('.preview-photo').empty();
    $('#fileInput').val('')
  },

  render: function() {
    this.$el.html(this.template());
  }
});