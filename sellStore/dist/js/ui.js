"use strict"

var mainHeader = $(".main-header");
var mainSidebar = $(".main-sidebar");
var contentWrapper = $(".content-wrapper");
var preloader = $(".preloader");

var headerDfrd = $.Deferred();
var sideBarDfrd = $.Deferred();
var wrapperDfrd = $.Deferred();

$.getScript("dist/js/header.js");
$.getScript("dist/js/sidebar.js");
$.getScript("dist/js/wrapper.js");

$.when(headerDfrd, sideBarDfrd, wrapperDfrd).then(function (){
    ss.loadTreeview();
    ss.closePreloader();
});

ss.closePreloader = function () {
    if (preloader) {
        preloader.css('height', 0);
        setTimeout(function () {
            preloader.children().hide();
        }, 200);
    }
};

ss.loadTreeview = function() {
    $.fn.Treeview.call($('[data-widget="treeview"]'), "init");
};

ss.loadCard = function() {
    // Make the dashboard widgets sortable Using jquery UI
    $('.connectedSortable').sortable({
        placeholder: 'sort-highlight',
        connectWith: '.connectedSortable',
        handle: '.card-header, .nav-tabs',
        forcePlaceholderSize: true,
        zIndex: 999999
    });
    $('.connectedSortable .card-header').css('cursor', 'move');
};