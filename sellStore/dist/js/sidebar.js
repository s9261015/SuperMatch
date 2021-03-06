"use strict"

var sideBarM = {};

mainSidebar.load("pages/sidebar.html", function() {
    sideBarM.load();
    mainSidebar.trigger("updatePath", [ss.home]);
    sideBarDfrd.resolve();
});

sideBarM.load = function () {
    sideBarM.updateNodeData();
    sideBarM.loadBind();
};

sideBarM.loadBind = function () {
    mainSidebar.off('updatePath').on('updatePath', function(e, taregetPath){
        mainSidebar.find('[data-path="' + taregetPath + '"]').each(function () {
            activeSideNode(this);
        });
    });
    var brand = $(".brand-link img, .brand-link span")
    brand.css("cursor", "pointer");
    brand.off("click").on("click", function(){
        ss.updatePath(ss.home);
    });
    $("#sidebarHome, .sidebarSub").off("click").on("click", function(){
        var path = $(this).attr("data-path");
        if (typeof path === "string") {
            activeSideNode(this);
            ss.updatePath(path);
        }
    });
};

sideBarM.updateNodeData = function () {
    $("#sidebarHome").each(function () {
        var tmp = getParentSideNode(this);
        if (typeof tmp !== "undefined") {
            var mainText = getSideNodeText(tmp);
            var subText = getSideNodeText(this);
            $(this).attr("data-path", mainText + "/" + subText)
        }
    });
    $(".sidebarSub").each(function () {
        var tmp = getParentSideNode(this);
        if (typeof tmp !== "undefined") {
            var mainText = getSideNodeText(tmp);
            var subText = getSideNodeText(this);
            $(this).attr("data-path", mainText + "/" + subText)
        }
    });
};

function getParentSideNode(target) {
    var node;
    var tmp = $(target).closest('.nav-treeview');
    if (tmp.length) {
        tmp = $(tmp).siblings('a.nav-link.activable');
        node = tmp;
    }
    return node;
}

function getSideNodeText(target) {
    var text;
    var tmp = $(target).find("p");
    if (tmp.length) {
        text = tmp.text();
        text = text.trim();
    }
    return text;
}

function activeSideNode(target) {
    $(target).parents().find(".main-sidebar .nav-sidebar a.nav-link.activable").each(function () {
        if (this == target) {
            var tmp = getParentSideNode(this);
            if (typeof tmp !== "undefined") {
                $(tmp).addClass("active");
                if (!$(tmp).parent().hasClass("menu-open")) {
                    $(tmp).trigger("click");
                }
            }
            $(target).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });
}