"use strict"

var ss = this;
ss.home = "Dashboard/Overview"

$.getScript("dist/js/ui.js");

ss.trigger = function (eventName, eventParams) {
    mainHeader.trigger(eventName, eventParams);
    mainSidebar.trigger(eventName, eventParams);
    contentWrapper.trigger(eventName, eventParams);
}

ss.updatePath = function(path) {
    ss.currentPath = path;
    var tmp = path.split('/');
    if (tmp.length){
        ss.currentPage = tmp[tmp.length-1];
    }
    ss.trigger("updatePath", [path]);
}