'use strict';

function sheets(params) {
    var obj = {};

    obj.sheetId = params.sheetId;
    obj.http = params.http;
    obj.scope = params.scope;

    obj.entries = [];

    obj.fullData = [];

    // console.log('object scope', obj.scope)
    obj.parseNormal = function(data) {
        console.log('parse normal function: ', data);
    };


    /***************
    get API Url
    ***************/
    obj.getSheetApiURL = function(sheetId, i) {
        i = (typeof i === 'undefined') ? 1 : i;

        return "https://spreadsheets.google.com/feeds/list/"+sheetId+"/2/public/basic?alt=json";

        // return "https://docs.google.com/spreadsheets/d/"+sheetId+"/edit#gid=938172420";
        // return "https://survivalacademy.miamistudio.org/api/spreadsheets/" + sheetId + "/worksheets/" + i
    };


    /***************
    get data from sheet
    ***************/
    obj.getData = function(i) {
        i = (typeof i === 'undefined') ? 1 : i;

        console.log('NEW parse for : ', obj.sheetId);


        obj.http({
            method: 'GET',
            url: obj.getSheetApiURL(obj.sheetId, i)
        })
            .then(
                function(response) {
                    // if (response.data.success) {
                    //     obj.scope.dataParse(response.data.result, params);
                    // } else {
                        // console.log('API FAIL for sheet :"' + obj.sheetId + '" - ERROR', response);
                    // }
                    // 
                    // 
                    // response.data.feed.entry
                    
                    var rows = [];
                    console.log(response)
                    var cells = response.data.feed.entry;
                    
                    for (var i = 0; i < cells.length; i++){
                        
                        var rowObj = {};
                        
                        rowObj.timestamp = cells[i].title.$t;
                        
                        var rowCols = cells[i].content.$t.split(',');
                        
                        for (var j = 0; j < rowCols.length; j++){
                            var keyVal = rowCols[j].split(':');
                            rowObj[keyVal[0].trim()] = keyVal[1].trim();
                            rowObj['index'] = i;
                        }
                        rows.push(rowObj);
                    }
                    console.log(rows)
                    obj.scope.dataParse(rows, params);
                },
                function(response) {
                    console.log('API ERROR for sheet :"' + obj.sheetId + '" - ERROR', response);
                }
        );
    };



    obj.getMultiSheet = function() {
        obj.getData(0);
    };


    /***************
    parse Sheet
    ***************/
    obj.parseSheet = function(data) {
        var newArr = [];

        var entries = data || obj.entries;

        $.each(entries, function(key, value) {
            var newObj = {};

            for (var key in value) {
                newObj[key] = value[key];
            }

            newArr.push(newObj);

            //console.log('new array', newArr);

        });

        obj.scope.dataLoad(newArr);
    };

    return obj;
}