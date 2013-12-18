var UserShowView = Backbone.View.extend({
  tagName: 'div',
  className: 'user-show-main-container',

  events: {
    'click a img': 'clickProfile',
    // 'click input': 'showWhatsInside',
    'change #fileInput': 'showWhatsInside'
  },

  template: _.template($("script.user-show-page[type='text/html']").html()),

  initialize: function(opts) {
    console.log('UserShowView instantiated');

    this.model = opts.model;
    this.listenTo(this.model, "change", this.render);

    this.render();
    return this;
  },

  addImage: function(e) {
    // e.preventDefault();

    // update user
    // var fileInput = $('#fileInput')[0];
    console.log(fileInput);

    $(fileInput).on('change', function(e) {
      console.log('file Changed');

      var file = fileInput.files[0];
      var imageType = /image.*/;

      if (file.type.match(imageType)) {
        console.log('FILE IS SUPPORTED');
        var reader = new FileReader();

        reader.onload = function(e) {
          console.log('reader.onload bitch');

          // set src of profile to above
          $('a.th img').attr('src', reader.result);
          console.log(reader.result);

        }
      } else {
        console.log('FILE NOT SUPPORTED');
        // render error message somewhere
      }
    });
  },

  showWhatsInside: function() {
    console.log('show me whats inside maaaaaaane');
    fileInput = $('#fileInput')[0];
    console.log(fileInput);

    file = fileInput.files[0];
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

          // self.model.set('profile_photo', reader.result);

          // console.log('profile_photo ', self.model.get('profile_photo'));

          // self.model.set('profile_photo_file_name', file.name);
          // self.model.set('profile_photo_content_type', file.type);
          // self.model.set('profile_photo_file_size', file.size);
          // self.model.set('profile_photo_updated_at', new Date());
          self.model.set('profile_photo', file);
          // html: { multipart: true }

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
          });

          console.log('model.save() done');
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