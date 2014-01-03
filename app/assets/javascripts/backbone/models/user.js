var User = Backbone.Model.extend({
  url: '/api/users',
  toJSON: function() {
    return { user: this.attributes };
  }
});

