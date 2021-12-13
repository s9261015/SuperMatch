"use strict"

var headerM = {};

mainHeader.load("pages/header.html", function() {
    headerM.loadBind();
    headerDfrd.resolve();
});

headerM.loadBind = function() {
    mainHeader.find(".home").each(function () {
        $(this).off("click").on("click", function() {
            ss.updatePath(ss.home)
        });
    });

    mainHeader.off('updatePath').on('updatePath', function(e, targetPath){
        $("#page-path").html("");
        var pathList = targetPath.split('/');
        var fullPath;
        for (var i in pathList) {
            var path = pathList[i];
            var item = $("<li/>", {
                class: "breadcrumb-item"
            }).append(path);
            $("#page-path").append(item);
            if (path === ss.currentPage) {
                item.addClass("active");
            }
        }
    });
};