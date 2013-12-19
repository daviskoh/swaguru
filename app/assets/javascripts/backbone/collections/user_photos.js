var UserPhotos = Backbone.Collection.extend({
  url: '/photos',
  model: Photo,

  initialize: function() {
    console.log('UserPhotos initialized');
  }
});