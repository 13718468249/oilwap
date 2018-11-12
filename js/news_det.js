$(document).ready(function () {

	$(window).scroll(function(event){
		 var headerH=$('.header-w').height(),
            scrollTop=$(window).scrollTop(),
            winH=$(window).height();
             if(scrollTop>headerH){
            $(".header-w").css({position:"fixed",top:0,left:0});
            if(scrollTop>winH){
                $("#my-top").addClass("top-center").removeClass("to-top");
            }else if(scrollTop<winH||scrollTop==winH){
                $("#my-top").addClass("to-top").removeClass("top-center");
            };
        }else if(scrollTop<headerH||scrollTop==headerH){
            $(".header-w").css({position:"static"});
        };
	});

	 $("#my-top img").click(function(){
        $('body,html').animate({scrollTop:0},500);
    });


	var id=localStorage.getItem('uid'),
		det={infoUuid:id};
		console.log(id);
    var  urlStr= window.location.href;
    var  configURL={};
    if(urlStr.indexOf('news9.')!=-1){        //uat
      configURL = {
        infoUrl:'//info9.mycrudeoil.com'
      }
    }else if(urlStr.indexOf('news.')!=-1){     //线上
      configURL = {
        infoUrl:'//info.mycrudeoil.com'
      }
    }else if(urlStr.indexOf('.test.')!=-1){       //测试环境
      configURL = {
        infoUrl:'//info.test.mycrudeoil.com'
      }
    }else{        //本地localhost
      configURL = {
        infoUrl:'https://info.mycrudeoil.com'
      }
    };
    $.ajax({
        url:configURL.infoUrl+"/front/infoDetail.json",
        type: "GET",
        // dataType:"json",
        contentType:"application/json; charset=utf-8",
        // data:JSON.stringify(det),
        data:det,
        success:function(msg){
        	console.log(msg);
        	var datas=msg.datas,
        		title=datas.title,
        		content=datas.textHtml;
        		tim=datas.releaseDate,
	            // date=new Date(Number(tim)),
	            // Y=date.getFullYear(),
             //    M=date.getMonth(),
	            // D=date.getDate(),
	            timer=tim.split(" ")[0],

	            // timer=Y+'-' +M+'-'+D;
	            $(".tim").text(timer);
	            $(".tit").html(title);
	            $(".con").html(content);
	            console.log(tim);
        
        }
		});
		$(".go-back").click(function(){
			history.go(-1);
		});
		 $(".second-code").click(function(){
    	$(".outer").css("display","block");
    });	
    $(".outer").click(function(){
        $(this).css("display","none");
    });   

})