// 文章
var baseUrl = 'https://zhaotuotech.com/article';
// 栏目
var column = 'https://zhaotuotech.com/itemcate'

function ajax(obj, successfn) {
    $.ajax({
        url: baseUrl + obj.url,
        type: obj.type || 'get',
        data: obj.params,
        success: function(res) {
            successfn(res)
        }
    })
}

function columnAjax(obj, successfn) {
    $.ajax({
        url: column + obj.url,
        type: obj.type || 'get',
        data: obj.params,
        success: function(res) {
            successfn(res)
        }
    })
}