"use strict" 

var mainHeader = $(".main-header");
var mainSidebar = $(".main-sidebar");
var contentWrapper = $(".content-wrapper")
var preloader = $(".preloader");

var d1 = $.Deferred();
var d2 = $.Deferred();
var d3 = $.Deferred();

mainHeader.load("pages/header.html", function() {
    $.getScript("dist/js/header.js", function(){
        d1.resolve();
    });
});

mainSidebar.load("pages/sidebar.html", function() {
    $.getScript("dist/js/sidebar.js", function(){
        d2.resolve();
    });
});

contentWrapper.load("pages/wrapper.html", function() {
    $.getScript("dist/js/wrapper.js", function(){
        d3.resolve();
    });
});

$.when(d1, d2, d3).then(function (){
    loadTreeview();
    ss.gDfrd.resolve();
});

ss.closePreloader = function () {
    if (preloader) {
        preloader.css('height', 0);
        setTimeout(function () {
            preloader.children().hide();
        }, 200);
    }
}

function loadTreeview() {
    $('[data-widget="treeview"]').each(function () {
        $.fn.Treeview.call($(this), 'init');
    });
}