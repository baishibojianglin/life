// JavaScript Document



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





});






  $(function(){
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
		
		
		
		
		
		
  });