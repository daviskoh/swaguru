// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
// require jquery_ujs
//= require foundation
//= require turbolinks
//= require underscore
// require sinon
//= require backbone
//= require_tree ./backbone/models
//= require_tree ./backbone/collections
//= require_tree ./backbone/templates
//= require_tree ./backbone/views
//= require_tree ./backbone/routers

// Foundation
$(function(){
  
  $(document).foundation();

  window.user = new User();
  new Router({session: new Session(), user: user});
  Backbone.history.start({pushState: true});
});

// Rails CSRF Protection
$(document).ajaxSend(function (e, xhr, options) {
  var token = $("meta[name='csrf-token']").attr("content");
  xhr.setRequestHeader("X-CSRF-Token", token);
});


