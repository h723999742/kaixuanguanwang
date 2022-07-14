$(function () {
    // 轮播图
    var mySwiper = new Swiper('.swiper', {
        direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // 如果需要滚动条
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    })
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
        } else {
            window.location.href = "./about.html"
        }
        $(this).addClass('active')
        $(this).find('.line').addClass('lineActive')
        $(this).siblings().removeClass('active')
        $(this).siblings().find('.line').removeClass('lineActive')
    })



    function getmap() {
        var map = new BMapGL.Map("map");
        var point = new BMapGL.Point(113.748905,34.765412);
        map.centerAndZoom(point, 15);
        map.setCenter(point)
        var marker = new BMapGL.Marker(point);  // 创建标注
        map.addOverlay(marker);              // 将标注添加到地图中
        var opts = {
            width : 400,     // 信息窗口宽度
            height: 80,     // 信息窗口高度
            title : "凯旋君翔科技有限公司" , // 信息窗口标题
            message:"公司"
        }
        var infoWindow = new BMapGL.InfoWindow("地址：河南省郑州市郑东新区祥盛街3号SOHO新干线C座8楼", opts);  // 创建信息窗口对象
        map.openInfoWindow(infoWindow, point); //开启信息窗口
    }
})
