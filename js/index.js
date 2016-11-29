// JavaScript Document

$(document).ready(function(){
	
    $(".actresult").css({
    	left : ($(window).width() - $(".actresult").outerWidth()) / 2,
    	top : $(document).scrollTop() + ($(window).height() - $(".actresult").outerHeight()) / 2
    });
	// 窗口滚动时
    $(window).scroll(function() {
		$(".actresult").css({
			position : "absolute",
			left : ($(window).width() - $(".actresult").outerWidth()) / 2,
			top : $(document).scrollTop() + ($(window).height() - $(".actresult").outerHeight())/2 
		});
    });
	
	$("#rob-ticket").on("click", function(){
		$(".mask").fadeIn();
		$(".actresult").fadeIn();
		luck();
	});
	
	$(".mask").on("click", function(){
		$(this).fadeOut();
		$(".actresult").fadeOut();
	});
	
	$(".close").on("click", function(){
		$(".mask").fadeOut();
		$(".actresult").fadeOut();
	});
	
	//随机抽奖
	function luck(){
		var a = Math.ceil(Math.random() * 4);
		switch(a){
			case 1 :
				$(".actresult").css("background", "url(images/1.png) no-repeat");
				break;
			case 2 :
				$(".actresult").css("background", "url(images/2.png) no-repeat");
				break;
			case 3 :
				$(".actresult").css("background", "url(images/3.png) no-repeat");
				break;
			case 4 :
				$(".actresult").css("background", "url(images/4.png) no-repeat");
				break;
			default :
		}

	}
	
});