"use strict"

var sellerBusM = {}

wrapperM.content.load("pages/sellerBus.html", function() {
    sellerBusM.load();
});

sellerBusM.load = function() {
	sellerBusM.loadTable();
    sellerBusM.loadBind();
};

sellerBusM.loadBind = function () {

};

sellerBusM.loadTable = function() {
    var data = [
        ["01"," ", "2020-08-13<br>15:34:00", "無", "未聯絡", "未接", "自來客<br>(需求表)"," "," ", "呂1", "0989522767", "餐飲小吃", "新北市淡水區"," "," "," ", "未入帳"," ", "Teresa"],
        ["02"," ", "2020-08-13<br>15:33:00", "無", "未聯絡", "未接", "自來客<br>(需求表)"," "," ", "呂2", "0989522767", "餐飲小吃", "新北市淡水區"," "," "," ", "未入帳"," ", "Teresa"],
        ["03"," ", "2020-08-13<br>15:32:00", "無", "未聯絡", "未接", "自來客<br>(需求表)"," "," ", "呂3", "0989522767", "餐飲小吃", "新北市淡水區"," "," "," ", "未入帳"," ", "Teresa"],
        ["04"," ", "2020-08-13<br>15:31:00", "無", "未聯絡", "未接", "自來客<br>(需求表)"," "," ", "呂4", "0989522767", "餐飲小吃", "新北市淡水區"," "," "," ", "未入帳"," ", "Teresa"],
        ["05"," ", "2020-08-13<br>15:30:00", "無", "未聯絡", "未接", "自來客<br>(需求表)"," "," ", "呂5", "0989522767", "餐飲小吃", "新北市淡水區"," "," "," ", "未入帳"," ", "Teresa"],
        ["06"," ", "2020-08-13<br>15:29:00", "無", "未聯絡", "未接", "自來客<br>(需求表)"," "," ", "呂6", "0989522767", "餐飲小吃", "新北市淡水區"," "," "," ", "未入帳"," ", "Teresa"],
        ["07"," ", "2020-08-13<br>15:28:00", "無", "未聯絡", "未接", "自來客<br>(需求表)"," "," ", "呂7", "0989522767", "餐飲小吃", "新北市淡水區"," "," "," ", "未入帳"," ", "Teresa"],
        ["08"," ", "2020-08-13<br>15:27:00", "無", "未聯絡", "未接", "自來客<br>(需求表)"," "," ", "呂8", "0989522767", "餐飲小吃", "新北市淡水區"," "," "," ", "未入帳"," ", "Teresa"],
        ["09"," ", "2020-08-13<br>15:26:00", "無", "未聯絡", "未接", "自來客<br>(需求表)"," "," ", "呂9", "0989522767", "餐飲小吃", "新北市淡水區"," "," "," ", "未入帳"," ", "Teresa"],
        ["10"," ", "2020-08-13<br>15:25:00", "無", "未聯絡", "未接", "自來客<br>(需求表)"," "," ", "呂10", "0989522767", "餐飲小吃", "新北市淡水區"," "," "," ", "未入帳"," ", "Teresa"],
        ["11"," ", "2020-08-13<br>15:24:00", "無", "未聯絡", "未接", "自來客<br>(需求表)"," "," ", "呂11", "0989522767", "餐飲小吃", "新北市淡水區"," "," "," ", "未入帳"," ", "Teresa"],
        ["12"," ", "2020-08-13<br>15:23:00", "無", "未聯絡", "未接", "自來客<br>(需求表)"," "," ", "呂12", "0989522767", "餐飲小吃", "新北市淡水區"," "," "," ", "未入帳"," ", "Teresa"],
        ["13"," ", "2020-08-13<br>15:22:00", "無", "未聯絡", "未接", "自來客<br>(需求表)"," "," ", "呂13", "0989522767", "餐飲小吃", "新北市淡水區"," "," "," ", "未入帳"," ", "Teresa"]
    ];
    $("#seller-bus-event-table").DataTable({
        "responsive": true,
        "lengthChange": false,
        "autoWidth": true,
        "pageLength": 10,
        "columnDefs": [
            {
                "targets": 0,
                "title": "排序"
            },
            {
                "targets": 1,
                "title": "操作"
            },
            {
                "targets": 2,
                "title": "刊登時間"
            },
            {
                "targets": 3,
                "title": "進件"
            },
            {
                "targets": 4,
                "title": "聯絡"
            },
            {
                "targets": 5,
                "title": "狀態"
            },
            {
                "targets": 6,
                "title": "來源分類"
            },
            {
                "targets": 7,
                "title": "合約編號"
            },
            {
                "targets": 8,
                "title": "店名"
            },
            {
                "targets": 9,
                "title": "姓名"
            },
            {
                "targets": 10,
                "title": "電話"
            },
            {
                "targets": 11,
                "title": "類別"
            },
            {
                "targets": 12,
                "title": "縣市"
            },
            {
                "targets": 13,
                "title": "頂讓金"
            },
            {
                "targets": 14,
                "title": "租金"
            },
            {
                "targets": 15,
                "title": "坪數"
            },
            {
                "targets": 16,
                "title": "開發入帳"
            },
            {
                "targets": 17,
                "title": "成交入帳"
            },
            {
                "targets": 18,
                "title": "負責專員"
            }
        ],
        "data": data
    });
    $("#seller-bus-event-table_wrapper > div:nth-child(1) > div:nth-child(1)").load("pages/sellerBusTableBtn.html", function(){
    	wrapperM.subDfrd.resolve();
    });
};