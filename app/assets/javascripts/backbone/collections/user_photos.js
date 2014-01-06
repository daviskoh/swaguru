var UserPhotos = Backbone.Collection.extend({
  url: '/api/users/' + sessionID + '/photos',
  model: Photo,

  initialize: function() {
    console.log('UserPhotos initialized');
  }
});