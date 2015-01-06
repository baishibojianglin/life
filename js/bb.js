// JavaScript Document


/**
$(document).ready(function(){
  $(".lb_daos20").onmousemove(function(){
    var div=$("lb_daos07");  
    div.animate({left:'100px'},"slow");
    div.animate({fontSize:'3em'},"slow");
  });
});*/
/**
$(function(){
$('.lb_daos018 > .lb_daos03').hover(function(){
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
*/







