"use strict"

var membersM = {}

wrapperM.content.load("pages/members.html", function() {
    membersM.load();
});

membersM.load = function() {
    membersM.loadComponent();
    membersM.loadBind();
};

membersM.loadComponent = function() {
    membersM.loadTable();
    $("#members-table_wrapper > div:nth-child(1) > div:nth-child(1)").load("pages/membersTableBtn.html", function(){
        $("#members-add-dialog").load("pages/membersAdd.html", function(){
            wrapperM.subDfrd.resolve();
        });
    });
};

membersM.loadTable = function() {
    var data = [
        ["01"," ", "U12345678", "abc", "rrrrrrr", "登入", "呂1", "男", "0989522767", "abc@gmail.com", " ", "2020-08-13<br>15:34:00", 0, 0, 0],
		["02"," ", "U12345678", "abc", "rrrrrrr", "登入", "呂2", "男", "0989522767", "abc@gmail.com", " ", "2020-08-13<br>15:33:00", 0, 0, 0],
		["03"," ", "U12345678", "abc", "rrrrrrr", "登入", "呂3", "男", "0989522767", "abc@gmail.com", " ", "2020-08-13<br>15:32:00", 0, 0, 0],
		["04"," ", "U12345678", "abc", "rrrrrrr", "登入", "呂4", "男", "0989522767", "abc@gmail.com", " ", "2020-08-13<br>15:31:00", 0, 0, 0],
		["05"," ", "U12345678", "abc", "rrrrrrr", "登入", "呂5", "男", "0989522767", "abc@gmail.com", " ", "2020-08-13<br>15:30:00", 0, 0, 0],
		["06"," ", "U12345678", "abc", "rrrrrrr", "登入", "呂6", "男", "0989522767", "abc@gmail.com", " ", "2020-08-13<br>15:29:00", 0, 0, 0],
		["07"," ", "U12345678", "abc", "rrrrrrr", "登入", "呂7", "男", "0989522767", "abc@gmail.com", " ", "2020-08-13<br>15:28:00", 0, 0, 0],
		["08"," ", "U12345678", "abc", "rrrrrrr", "登入", "呂8", "男", "0989522767", "abc@gmail.com", " ", "2020-08-13<br>15:27:00", 0, 0, 0],
		["09"," ", "U12345678", "abc", "rrrrrrr", "登入", "呂9", "男", "0989522767", "abc@gmail.com", " ", "2020-08-13<br>15:26:00", 0, 0, 0],
		["10"," ", "U12345678", "abc", "rrrrrrr", "登入", "呂10", "男", "0989522767", "abc@gmail.com", " ", "2020-08-13<br>15:25:00", 0, 0, 0],
		["11"," ", "U12345678", "abc", "rrrrrrr", "登入", "呂11", "男", "0989522767", "abc@gmail.com", " ", "2020-08-13<br>15:24:00", 0, 0, 0],
		["12"," ", "U12345678", "abc", "rrrrrrr", "登入", "呂12", "男", "0989522767", "abc@gmail.com", " ", "2020-08-13<br>15:23:00", 0, 0, 0],
		["13"," ", "U12345678", "abc", "rrrrrrr", "登入", "呂13", "男", "0989522767", "abc@gmail.com", " ", "2020-08-13<br>15:22:00", 0, 0, 0],
    ];
    $("#members-table").DataTable({
        "responsive": true,
        "lengthChange": false,
        "autoWidth": true,
        "pageLength": 10,
        "scrollY": "calc(100vh - calc(3.5rem + 1px) - calc(3.5rem + 1px) - calc(10.5rem + 2px) - calc(2.3125rem + 18px) - calc(2.25rem + 5.2px) - calc(2.25rem + 3.2px))",
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
                "title": "會員編號"
            },
            {
                "targets": 3,
                "title": "帳號"
            },
            {
                "targets": 4,
                "title": "密碼(MD5)"
            },
            {
                "targets": 5,
                "title": "權限"
            },
            {
                "targets": 6,
                "title": "姓名"
            },
            {
                "targets": 7,
                "title": "性別"
            },
            {
                "targets": 8,
                "title": "電話"
            },
            {
                "targets": 9,
                "title": "信箱"
            },
            {
                "targets": 10,
                "title": "資訊來源"
            },
            {
                "targets": 11,
                "title": "註冊日期"
            },
            {
                "targets": 12,
                "title": "刊登數"
            },
            {
                "targets": 13,
                "title": "付款訂單"
            },
            {
                "targets": 14,
                "title": "付款金額"
            }
        ],
        "data": data
    });
};

membersM.loadBind = function () {

};