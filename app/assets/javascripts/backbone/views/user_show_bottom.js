var UserShowBottomView = Backbone.View.extend({
  tagName: 'div',
  className: 'container2',

  events: {
    'change #upload-new-photo': 'uploadNewPhoto'
  },

  template: _.template($("script.user-show-page-bottom[type='text/html']").html()),

  initialize: function(opts) {
    console.log('UserShowBottomView instantiated');

    this.model = opts.model;

    this.collection = opts.collection;
    this.listenTo(this.collection, 'change', this.render);

    console.log('fetching collection info');

    // FETCH INFO TOMORROW
    // this.collection.fetch();

    this.render();
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