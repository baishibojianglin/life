// JavaScript Document



// 大的图片广告
// 根据图片创建id,按钮元素等，实际开发建议使用JSON数据类似


$(function(){
	
var htmlAdBtn = '';                                                             // 大的图片广告   根据图片创建id,按钮元素等，实际开发建议使用JSON数据类似
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

// 便民服务
$("#servNav a").powerSwitch({
	classAdd: "active",
	eventType: "hover",
	onSwitch: function() {
		$("#pointLine").animate({ "left": $(this).position().left}, 200);
	}
});





});






  $(function(){
  $('.lb_daos018 > .lb_daos03').hover(function(){                           //弹出右边边框=======
			var eq = $('.lb_daos018 > .lb_daos03').index(this),				//获取当前滑过是第几个元素
				h = $('.lb_daos018').offset().top,							//获取当前下拉菜单距离窗口多少像素
				s = $(window).scrollTop(),									//获取游览器滚动了多少高度
				i = $(this).offset().top,									//当前元素滑过距离窗口多少像素
				lb_daos03 = $(this).children('.lb_daos019').height(),		//下拉菜单子类内容容器的高度
				sort = $('.lb_daos018').height();							//父类分类列表容器的高度
			
			if ( lb_daos03 < sort ){										//如果子类的高度小于父类的高度
				if ( eq == 0 ){
					$(this).children('.lb_daos019').css('top', (i-h));
				} else {
					$(this).children('.lb_daos019').css('top', (i-h)+1);
				}
			} else {
				if ( s > h ) {												//判断子类的显示位置，如果滚动的高度大于所有分类列表容器的高度
					if ( i-s > 0 ){											//则 继续判断当前滑过容器的位置 是否有一半超出窗口一半在窗口内显示的Bug,
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
		
		
		
		
		
		
  });