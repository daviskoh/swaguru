var ProfilePhotoModalView = Backbone.View.extend({
  tagName: 'div',
  className: 'reveal-modal',
  id: 'profile-photo-modal',

  events: {
    'change #fileInput': 'readProfilePhoto',
    'click #upload-profile-photo': 'updateProfilePhoto',
    'click a.close-reveal-modal': 'closeProfilePhotoModal'
  },

  template: _.template($("script.profile-photo-upload[type='text/html']").html()),

  initialize: function(opts) {
    this.user = opts.user;

    console.log('ProfilePhotoUploadView instantiated');

    this.render();
    return this;
  },

  readProfilePhoto: function() {
    console.log('show me whats inside maaaaaaane');
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
          console.log('reader.onload bitch');

          console.log(reader.result);

          console.log(self.model);

          // set this.reader to be used or not
          self.reader = reader;

          // preview profile profile
          var img = $('<img>');
          console.log(img);
          img.attr('src', reader.result);

          $('.preview-profile-photo').append($('<h3>Photo Preview</h3>')).append(img);
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
    console.log('model.save() done');
  },

  closeProfilePhotoModal: function() {
    console.log('CLOSING profile photo modal');

    this.clearModal();

    this.$el.foundation('reveal', 'close');
  },

  clearModal: function() {
    $('.preview-profile-photo').empty();
    $('#fileInput').val('')
  },

  render: function() {
    this.$el.html(this.template());
  }
});