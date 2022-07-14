$(function () {
    // 顶部是否隐藏
    $(document).scroll(function () {
        var scrollTop = $(this).scrollTop()
        if (scrollTop >= 706) {
            $('.header').hide()
        } else {
            $('.header').show()
        }
    });
    $('.header .right ul li').click(function () {
        var index = $(this).index()
        console.log(index)
        if (index == 0) {
            window.location.href = "./index.html"
        } else if (index == 1) {
            window.location.href = "./solution.html"
        }else{
            window.location.href = "./about.html"
        }
        $(this).addClass('active')
        $(this).find('.line').addClass('lineActive')
        $(this).siblings().removeClass('active')
        $(this).siblings().find('.line').removeClass('lineActive')
    })
})
