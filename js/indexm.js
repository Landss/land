// JavaScript Document

$(document).ready(function(){

    $(".actresult").css({
    	top : $(window).scrollTop()
    });
	// 窗口滚动时
    $(window).scroll(function() {
		$(".actresult").css({
			position : "absolute",
			top : $(window).scrollTop()
		});
    });
	
	$(window).resize(function() {
		$(".actresult").css({
			position : "absolute",
			top : $(window).scrollTop()
		});
    });
	
	$(".rob-ticket").on("tap", function(){
		$(".actresult").css({
			top : $(window).scrollTop()
		});
		$(".mask").show();
		$(".actresult").show();
		luck();	
	});
	
	$(".mask").on("tap", function(){
		$(this).hide();
		$(".actresult").hide();
	});
	
	$(".close").on("tap", function(){
		$(".mask").hide();
		$(".actresult").hide();
	});
	
	//随机抽奖
	function luck(){
		var a = Math.ceil(Math.random() * 4);
		switch(a){
			case 1 :
				$(".actresult img").attr("src", "images/1.png");
				break;
			case 2 :
				$(".actresult img").attr("src", "images/2.png");
				break;
			case 3 :
				$(".actresult img").attr("src", "images/3.png");
				break;
			case 4 :
				$(".actresult img").attr("src", "images/4.png");
				break;
			default :
		}
	}
	
});