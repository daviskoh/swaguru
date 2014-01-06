var UserPhotos = Backbone.Collection.extend({
  url: '/api/' + sessionID + '/photos',
  model: Photo,

  initialize: function() {
    console.log('UserPhotos initialized');
  }
});