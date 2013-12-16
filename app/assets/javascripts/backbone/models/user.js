var User = Backbone.Model.extend({
  url: '/users',
  paramRoot: 'user' // Rails extension to Backbone, scope params to user
});