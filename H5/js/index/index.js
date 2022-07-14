$(function(){
      // 轮播图
  var mySwiper = new Swiper('.swiper', {
    direction: 'horizontal', // 垂直切换选项
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