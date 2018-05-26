$("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });

$('#lis li').click(function(){
	var index=$(this).index();
	$(this).addClass('activ').siblings().removeClass('activ');
	$(this).parents('.flower').find('.cont ul').eq(index).show().siblings().hide();
});