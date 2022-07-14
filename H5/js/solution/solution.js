$(function(){
    $(".headerNav .centerBox .item").click(function () {
        var index=$(this).index()
        $(this).addClass('itemActive')
        $(this).siblings().removeClass('itemActive')
        if(index==0){
            window.location.href="./index.html"
        }else if(index==1){
            window.location.href="./solution.html"
        }else{
            window.location.href="./about.html"
        }
    })
})