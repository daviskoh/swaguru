var Photo = Backbone.Model.extend({
  initialize: function(){
    console.log('Photo initialized');
  },

  toJSON: function() {
    return { photo: this.attributes };
  }
})