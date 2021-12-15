"use strict"

var overviewM = {}

wrapperM.content.load("pages/overview.html", function() {
    overviewM.load();
    wrapperM.subDfrd.resolve();
});

overviewM.load = function() {
    ss.loadCard();
    overviewM.loadBind();
    overviewM.loadChart();
    overviewM.loadEvent();
};

overviewM.loadBind = function () {
    wrapperM.content.find(".small-box-footer").off("click").on("click", function(){
        var path = $(this).attr('data-path');
        if (typeof path === "string") {
            ss.updatePath(path);
        }
    });
}

overviewM.loadChart = function () {
    // 頁務開發 chart
    var areaChartData = {
      labels  : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
            label               : '買家開發',
            backgroundColor     : '#28a745',
            borderColor         : 'rgba(60,141,188,0.8)',
            pointRadius          : false,
            pointColor          : '#3b8bba',
            pointStrokeColor    : 'rgba(60,141,188,1)',
            pointHighlightFill  : '#fff',
            pointHighlightStroke: 'rgba(60,141,188,1)',
            data                : [28, 48, 40, 19, 86, 27, 90, 40, 19, 86, 27, 90]
        },
        {
            label               : '賣家開發',
            backgroundColor     : '#17a2b8',
            borderColor         : 'rgba(210, 214, 222, 1)',
            pointRadius         : false,
            pointColor          : 'rgba(210, 214, 222, 1)',
            pointStrokeColor    : '#c1c7d1',
            pointHighlightFill  : '#fff',
            pointHighlightStroke: 'rgba(220,220,220,1)',
            data                : [65, 59, 80, 81, 56, 55, 40, 80, 81, 56, 55, 40]
        },
      ]
    }
    var overviewBusChartCanvas = $('#overviewBusChart').get(0).getContext('2d');
    var overviewBusChartData = $.extend(true, {}, areaChartData);
    var temp0 = areaChartData.datasets[0];
    var temp1 = areaChartData.datasets[1];
    overviewBusChartData.datasets[0] = temp1;
    overviewBusChartData.datasets[1] = temp0;

    var overviewBusChartOptions = {
      responsive              : true,
      maintainAspectRatio     : false,
      datasetFill             : false
    };

    new Chart(overviewBusChartCanvas, {
      type: 'bar',
      data: overviewBusChartData,
      options: overviewBusChartOptions
    });
};

overviewM.loadEvent = function() {
    var data = [];
    for (var i = 0; i < 50; i++) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        var tmp = [dateTime, "User" + i.toString(), "Do something" + i.toString()];
        data.push(tmp);
    }
    $("#overview-event-table").DataTable({
        "responsive": true,
        "lengthChange": false,
        "autoWidth": true,
        "pageLength": 10,
        "scrollY": "calc(100vh - calc(3.5rem + 1px) - calc(3.5rem + 1px) - calc(7rem + 2px) - calc(7.89rem + 36px) - calc(6.32rem + 1.2px) - calc(2.3125rem + 18px) - calc(2.25rem + 5.2px) - calc(2.25rem + 3.2px)",
        "columnDefs": [
            {
                "targets": 0,
                "title": "Date",
                "width": "20%"
            },
            {
                "targets": 1,
                "title": "Name",
                "width": "20%",
                "orderable": false
            },
            {
                "targets": 2,
                "title": "Event",
                "width": "60%",
                "orderable": false
            }
        ],
        "order": [[ 0, 'desc' ]],
        "data": data
    });
};