// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require turbolinks
//= require_tree .


function scaleVideo() {
    var vid = document.getElementsByTagName('video')[0];
    var w = window.innerWidth;
    var h = window.innerHeight;

    if (w/16 >= h/9) {
        vid.setAttribute('width', w);
        vid.setAttribute('height', 'auto');
    } else {
        vid.setAttribute('width', 'auto');
        vid.setAttribute('height', h);
    }
}
