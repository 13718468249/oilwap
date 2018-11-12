$(document).ready(function () {
    $("#slides").slidesjs({
    	  width:750,
    	  height:990,
     	  play: {
          active: true,
          auto: false
        }
  });
    setInterval(function () { ysansuo(); }, 3000);
    setInterval(function () { arrow(); }, 2000);
    $(window).scroll(function(event){
    var headerH=$('.header-w').height(),
        scrollT=$(window).scrollTop(),
        winH=$(window).height(),
        compareH=winH/2,
        lis=$(".nav-title ul li");
    function comp(ele){
    	var offT=offTop(ele);
    	if (offT<compareH&&offT>0){
    		 var classN=ele.attr("class");
    		 if(classN=="platform-w"){
    		 	lis.eq(0).addClass("active").siblings().removeClass("active");
    		 }else if(classN=="trading-w"){
    		 	lis.eq(1).addClass("active").siblings().removeClass("active");
    		 }else if(classN=="shipping-w"){
    		 	lis.eq(2).addClass("active").siblings().removeClass("active");
    		 }else if(classN=="company-w"){
    		 	lis.eq(3).addClass("active").siblings().removeClass("active");
    		 }else if(classN=="growth-w"){
    		 	lis.eq(4).addClass("active").siblings().removeClass("active");
    		 }else if(classN=="vision-w"){
    		 	lis.eq(5).addClass("active").siblings().removeClass("active");
    		 }
    		}
    	}
    comp($(".platform-w"));
    comp($(".trading-w"));
    comp($(".shipping-w"));
    comp($(".company-w"));
    comp($(".growth-w"));
    comp($(".vision-w"));
 
        // console.log(winH);
    if(scrollT>headerH){
    	$(".nav-title").css({display:"block",position:"fixed",top:0,left:0});
    }else if(scrollT<headerH||scrollT==headerH){
    	$(".nav-title").css({display:"none"});
    };
    if(scrollT>winH){
    	$("#my-top").addClass("top-center").removeClass("to-top");
    }else if(scrollT<winH||scrollT==winH){
    	$("#my-top").addClass("to-top").removeClass("top-center");
    };
    $(".top-center img").click(function(){
    	$('body,html').animate({scrollTop:0},500); 
    });

    });
    $(".sec-code").click(function(){
    	$(".outer").css("display","block");
    });
    $(".outer").click(function(){
    	$(this).css("display","none");
    });
    
});
function ysansuo(){
    	 $(".sansuo").animate({opacity:"0.2"},500);
    	 $(".sansuo").animate({opacity:"1"},500);
    };
 function  arrow() {
    	 $(".arrow").animate({
    	 	bottom:22 }).fadeOut("noraml");
    	$(".arrow").animate({
    	 	bottom:53 }).fadeIn("noraml");
    };

function offTop(ele){
 return ele.offset().top;
}