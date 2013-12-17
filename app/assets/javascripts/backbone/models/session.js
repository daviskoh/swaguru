var Session = Backbone.Model.extend({
  url: '/session',
  paramsRoot: 'session',

  initialize: function() {
    return this;
  }
});