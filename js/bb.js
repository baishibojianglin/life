// JavaScript Document
(function($){$.fn.jCarouselLite=function(o){o=$.extend({btnPrev:null,btnNext:null,btnGo:null,mouseWheel:false,auto:null,speed:1000,easing:null,vertical:false,circular:true,visible:3,start:0,scroll:3,beforeStart:null,afterEnd:null},o||{});return this.each(function(){var b=false,animCss=o.vertical?"top":"left",sizeCss=o.vertical?"height":"width";var c=$(this),ul=$("ul",c),tLi=$("li",ul),tl=tLi.size(),v=o.visible;if(o.circular){ul.prepend(tLi.slice(tl-v-1+1).clone()).append(tLi.slice(0,v).clone());o.start+=v}var f=$("li",ul),itemLength=f.size(),curr=o.start;c.css("visibility","visible");f.css({overflow:"hidden",float:o.vertical?"none":"left"});ul.css({margin:"0",padding:"0",position:"relative","list-style-type":"none","z-index":"1"});c.css({overflow:"hidden",position:"relative","z-index":"2",left:"0px"});var g=o.vertical?height(f):width(f);var h=g*itemLength;var j=g*v;f.css({width:f.width(),height:f.height()});ul.css(sizeCss,h+"px").css(animCss,-(curr*g));c.css(sizeCss,j+"px");if(o.btnPrev)$(o.btnPrev).click(function(){return go(curr-o.scroll)});if(o.btnNext)$(o.btnNext).click(function(){return go(curr+o.scroll)});if(o.btnGo)$.each(o.btnGo,function(i,a){$(a).click(function(){return go(o.circular?o.visible+i:i)})});if(o.mouseWheel&&c.mousewheel)c.mousewheel(function(e,d){return d>0?go(curr-o.scroll):go(curr+o.scroll)});if(o.auto)setInterval(function(){go(curr+o.scroll)},o.auto+o.speed);function vis(){return f.slice(curr).slice(0,v)};function go(a){if(!b){if(o.beforeStart)o.beforeStart.call(this,vis());if(o.circular){if(a<=o.start-v-1){ul.css(animCss,-((itemLength-(v*2))*g)+"px");curr=a==o.start-v-1?itemLength-(v*2)-1:itemLength-(v*2)-o.scroll}else if(a>=itemLength-v+1){ul.css(animCss,-((v)*g)+"px");curr=a==itemLength-v+1?v+1:v+o.scroll}else curr=a}else{if(a<0||a>itemLength-v)return;else curr=a}b=true;ul.animate(animCss=="left"?{left:-(curr*g)}:{top:-(curr*g)},o.speed,o.easing,function(){if(o.afterEnd)o.afterEnd.call(this,vis());b=false});if(!o.circular){$(o.btnPrev+","+o.btnNext).removeClass("disabled");$((curr-o.scroll<0&&o.btnPrev)||(curr+o.scroll>itemLength-v&&o.btnNext)||[]).addClass("disabled")}}return false}})};function css(a,b){return parseInt($.css(a[0],b))||0};function width(a){return a[0].offsetWidth+css(a,'marginLeft')+css(a,'marginRight')};function height(a){return a[0].offsetHeight+css(a,'marginTop')+css(a,'marginBottom')}})(jQuery);


// ���ͼƬ���
// ����ͼƬ����id,��ťԪ�صȣ�ʵ�ʿ�������ʹ��JSON��������

$(function(){
	
var htmlAdBtn = '';                                                             // ���ͼƬ���   ����ͼƬ����id,��ťԪ�صȣ�ʵ�ʿ�������ʹ��JSON��������
$("#jdAdSlide img").each(function(index, image) {
	var id = "adImage" + index;
	htmlAdBtn = htmlAdBtn + '<a href="javascript:" class="jd_ad_btn_a" data-rel="'+ id +'">'+ '</a>';
	image.id = id;
});
$("#jdAdBtn").html(htmlAdBtn).find("a").powerSwitch({
	eventType: "hover",
	classAdd: "active",
	animation: "fade",
	autoTime: 3000,
	onSwitch: function(image) {
		if (!image.attr("src")) {
			image.attr("src", image.attr("data-src"));	
		}
	}
}).eq(0).trigger("mouseover");

// �������
$("#servNav a").powerSwitch({
	classAdd: "active",
	eventType: "hover",
	onSwitch: function() {
		$("#pointLine").animate({ "left": $(this).position().left}, 200);
	}
});




  $(".lb_tuijf4").mouseover(function(){
    $(this).css("background-color","#FF9800");
  });
  $(".lb_tuijf4").mouseout(function(){
    $(this).css("background-color","#656563");
  });
  
  
  
  
  
  
  
  
   $('.lb_daos018 > .lb_daos03').hover(function(){                           //�����ұ߱߿�=======
			var eq = $('.lb_daos018 > .lb_daos03').index(this),				//��ȡ��ǰ�����ǵڼ���Ԫ��
				h = $('.lb_daos018').offset().top,							//��ȡ��ǰ�����˵����봰�ڶ�������
				s = $(window).scrollTop(),									//��ȡ�����������˶��ٸ߶�
				i = $(this).offset().top,									//��ǰԪ�ػ������봰�ڶ�������
				lb_daos03 = $(this).children('.lb_daos019').height(),		//�����˵��������������ĸ߶�
				sort = $('.lb_daos018').height();							//��������б������ĸ߶�
			
			if ( lb_daos03 < sort ){										//�������ĸ߶�С�ڸ���ĸ߶�
				if ( eq == 0 ){
					$(this).children('.lb_daos019').css('top', (i-h));
				} else {
					$(this).children('.lb_daos019').css('top', (i-h)+1);
				}
			} else {
				if ( s > h ) {												//�ж��������ʾλ�ã���������ĸ߶ȴ������з����б������ĸ߶�
					if ( i-s > 0 ){											//�� �����жϵ�ǰ����������λ�� �Ƿ���һ�볬������һ���ڴ�������ʾ��Bug,
						$(this).children('.lb_daos019').css('top', (s-h)+2 );
					} else {
						$(this).children('.lb_daos019').css('top', (s-h)-(-(i-s))+2 );
					}
				} else {
					$(this).children('.lb_daos019').css('top', 3 );
				}
			}	

			$(this).addClass('hover');
			$(this).children('.lb_daos019').css('display','block');
		},function(){
			$(this).removeClass('hover');
			$(this).children('.lb_daos019').css('display','none');
		});	 
  
  
  
$(".lb_shipinga02b2").jCarouselLite({   //ʳ��food�����һ���
btnNext: ".lb_shipinga02b3",//��
btnPrev: ".lb_shipinga02b6"//��
});

$('.lb_shipinga02b4 li').hover(
function () {$('ul', this).slideDown(200);}, 
function () {$('ul', this).slideUp(200);
});

$(this).click(function(){
$("#panel").slideToggle("slow");
$(this).toggleClass("active"); return false;
}); 


$(this).hover(
function() {$(this).fadeTo("slow", 0.5);},
function() {$(this).fadeTo("slow", 5);
});

  
  
 
$(".tuang_dao1x8").jCarouselLite({   //�Ź��������ֵ����һ���
btnNext: ".tuang_dao1x6",//��
btnPrev: ".tuang_dao1x7",//��
/*auto: 800, */        //�Զ��ֲ�����
speed: 3000,        //�ٶ�3��
scroll: 1            //���Ʋ��Ÿ���
});




  
  

 
  
  var htmlAdBtn = '';                                                             // ���ͼƬ���   ����ͼƬ����id,��ťԪ�صȣ�ʵ�ʿ�������ʹ��JSON��������
$(".lb_texiao1 .tuang7").each(function(index, ul) {
	var id = "adUl" + index;
	htmlAdBtn = htmlAdBtn + '<a href="javascript:" class="tuang_jiaodian_a" data-rel="'+ id +'">'+ '</a>';
	ul.id = id;
});
$("#jdAdBtn").html(htmlAdBtn).find("a").powerSwitch({
	eventType: "hover",
	classAdd: "active",
	animation: "fade",
	autoTime: 3000,
	onSwitch: function(ul) {
		if (!ul.attr("src")) {
			ul.attr("src", ul.attr(".tuang7"));	
		}
	}
}).eq(0).trigger("mouseover");

// �������
$("#servNav a").powerSwitch({
	classAdd: "active",
	eventType: "hover",
	onSwitch: function() {
		$("#pointLine").animate({ "left": $(this).position().left}, 200);
	}
});

/*
�������Ź�ע�Ľ���ͼ
*/
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
});





















  