"use strict"

var wrapperM = {};

wrapperM.contentJsUrls = {
    "Dashboard/Overview": "dist/js/overview.js",
    "業務開發/賣家開發": "dist/js/sellerBus.js",
    "業務開發/買家開發": "dist/js/buyerBus.js",
    "人員管理/會員管理": "dist/js/members.js",
    "物件管理/全部物件": "dist/js/items.js"
};

contentWrapper.load("pages/wrapper.html", function() {
    wrapperM.load();
    $.when(wrapperM.subDfrd).then(function (){
        wrapperDfrd.resolve();
    });
});

wrapperM.load = function() {
    $(".layout-fixed .content-wrapper").css({ 'min-height' : ''});
    wrapperM.loadBind();
};

wrapperM.loadBind = function () {
    contentWrapper.off('updatePath').on('updatePath', function(e, targetPath){
        var pathList = targetPath.split('/');
        var len = pathList.length;
        if (len) {
            changeTitle(pathList[len-1])
        }
        var tmp = wrapperM.contentJsUrls[ss.currentPath];
        if (typeof tmp === "string") {
            wrapperM.content = $(".content-wrapper .content");
            wrapperM.subDfrd = $.Deferred();
            $.getScript(tmp);
        }
    });
};

function changeTitle(title) {
    $(".content-header h1").html(title);
}