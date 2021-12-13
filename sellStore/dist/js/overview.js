"use strict"

var overviewM = {}

wrapperM.content.load("pages/overview.html", function() {
    overviewM.load();
    wrapperM.subDfrd.resolve();
});

overviewM.load = function() {
    ss.loadCard();
    overviewM.loadChart();
    overviewM.loadEvent();
};

overviewM.loadChart = function (){
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
    var barChartCanvas = $('#barChart').get(0).getContext('2d');
    var barChartData = $.extend(true, {}, areaChartData);
    var temp0 = areaChartData.datasets[0];
    var temp1 = areaChartData.datasets[1];
    barChartData.datasets[0] = temp1;
    barChartData.datasets[1] = temp0;

    var barChartOptions = {
      responsive              : true,
      maintainAspectRatio     : false,
      datasetFill             : false
    };

    new Chart(barChartCanvas, {
      type: 'bar',
      data: barChartData,
      options: barChartOptions
    });
};

overviewM.loadEvent = function() {
    $("#example1").DataTable({
        "responsive": true,
        "lengthChange": false,
        "autoWidth": false,
        "pageLength": 8
    }).appendTo('#example1_wrapper .col-md-6:eq(0)');
};