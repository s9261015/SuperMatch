"use strict" 

contentWrapper.off('updatePath').on('updatePath', function(e, targetPath){
    var pathList = targetPath.split('/');
    var len = pathList.length;
    if (len) {
    	changeTitle(pathList[len-1])
    }
});

$(".layout-fixed .content-wrapper").css({ 'min-height' : ''});

function changeTitle(title) {
	$(".content-header h1").html(title);
}