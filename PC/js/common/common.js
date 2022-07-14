
$(function () {
  // 右侧联系方式
  $('.rightRelation .relationItem').mouseenter(function () {
    $(this).find('.juxing').fadeIn()
    $(this).siblings().find('.juxing').fadeOut()
  })
  $('.rightRelation .relationItem').mouseleave(function () {
    $(this).find('.juxing').hide()
  })
  // 顶部是否隐藏
  $(document).scroll(function () {
    var scrollTop = $(this).scrollTop()
    if (scrollTop >= 706) {
      $('.header').hide()
    } else {
      $('.header').show()
    }
    if (scrollTop >= 486) {
      $('.rightRelation').show()
    } else {
      $('.rightRelation').hide()
    }
  });
})