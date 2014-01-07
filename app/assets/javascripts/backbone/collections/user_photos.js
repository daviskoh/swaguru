var UserPhotos = Backbone.Collection.extend({
  model: Photo,

  initialize: function() {
    console.log('UserPhotos initialized');
  }
});