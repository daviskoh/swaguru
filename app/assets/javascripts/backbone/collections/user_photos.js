var UserPhotos = Backbone.Collection.extend({
  // url: '/users_photos',
  url: '/photos',
  model: Photo,

  initialize: function() {
    console.log('UserPhotos initialized');
  }
});