var UserShowView = Backbone.View.extend({
  tagName: 'div',
  className: 'user-show-main-container',

  events: {
    'click a img': 'clickProfile',
    'change #fileInput': 'updateProfilePhoto',
    'change #upload-new-photo': 'uploadNewPhoto'
  },

  template: _.template($("script.user-show-page[type='text/html']").html()),

  initialize: function(opts) {
    console.log('UserShowView instantiated');

    this.model = opts.model;
    this.listenTo(this.model, "change", this.render);

    this.collection = opts.collection;

    this.render();
    return this;
  },

  updateProfilePhoto: function() {
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

          // set src of profile to above
          // $('a.th img').attr('src', reader.result);
          console.log(reader.result);

          console.log(self.model);

          self.model.set('profile_photo', reader.result);

          // self.model.set('profile_photo_file_name', file.name);
          // self.model.set('profile_photo_content_type', file.type);
          // self.model.set('profile_photo_file_size', file.size);
          // self.model.set('profile_photo_updated_at', new Date());

          self.model.url = '/users/' + self.model.get('id');

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

          console.log('model.save() done');
        };

        reader.readAsDataURL(file);
      } else {
        console.log('FILE NOT SUPPORTED');
        // render error message somewhere
    }  
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

          photo = self.collection.create().save({
            success: function(model, resp, options) {
              _.each(arguments, function(element) {
                console.log(element);
              })
            },
            error: function(model, resp, options) {
              _.each(arguments, function(element) {
                console.log(element);
              })
            }
          });
        };

        reader.readAsDataURL(file);
      } else {
        console.log('FILE NOT SUPPORTED');
        // render error message somewhere
    }  
  },

  render: function() {
    this.$el.html(this.template());
  }
});