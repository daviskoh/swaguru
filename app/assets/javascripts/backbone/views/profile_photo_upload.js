var ProfilePhotoUploadView = Backbone.View.extend({
  tagName: 'div',
  className: 'reveal-modal',
  id: 'profile-photo-modal',

  events: {
    'change #fileInput': 'readProfilePhoto',
    'click #upload-profile-photo': 'updateProfilePhoto'
  },

  // template: _.template($("script.profile-photo-upload[type='text/html']").html()),

  initialize: function() {
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
          img.src = reader.result;
          $('.preview-profile-photo').appendChild(img);
        };

        reader.readAsDataURL(file);
      } else {
        console.log('FILE NOT SUPPORTED');
        // render error message somewhere
    }  
  },

  updateProfilePhoto: function() {
    self.model.set('profile_photo', this.reader.result);

    // self.model.set('profile_photo_file_name', file.name);
    // self.model.set('profile_photo_content_type', file.type);
    // self.model.set('profile_photo_file_size', file.size);
    // self.model.set('profile_photo_updated_at', new Date());

    self.model.url = '/api/users/' + self.model.get('id');

    // persist to server DB
    self.model.save({
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

    $('.preview-profile-photo').empty();
    console.log('model.save() done');
  }//,

  // render: function() {
  //   this.$el.html(this.template());
  // }
});