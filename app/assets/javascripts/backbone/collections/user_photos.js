var UserPhotos = Backbone.Collection.extend({
  url: '/api/photos',
  model: Photo,

  initialize: function() {
    console.log('UserPhotos initialized');
  }
});