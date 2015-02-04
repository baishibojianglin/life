// JavaScript Document
$(function(){
//导航部分代码
$("#home-area dt").mouseover(function(){
$("#home-area dd").show();
$("#home-area dd").mouseover(function(){$(this).show();});
$("#home-area dd").mouseout(function(){$(this).hide();});
});
$(".close").click(function(){$("#home-area dd").hide();});

	

$(".jl3").mouseover(function(){
	$(".menu-bd-panel").slideDown();
	$(".menu-bd-panel").mouseover(function(){
		$(".menu-bd-panel").show();
		});
	$(".menu-bd-panel").mouseout(function(){
		$(".menu-bd-panel").hide();
		});
});

$(".sn-sitemap").mouseover(function(){
	$(".hd_site_nav").slideDown();	
	$(".hd_site_nav").css({"border-top":"1px solid #ccc"});
	$("#jjj").css({"border-color":"#ccc","background":"#FFF"});
	$(".hd_site_nav").mouseover(function(){
		$(this).show();
		$("#jjj").css({"border-color":"#ccc","background":"#FFF"});
		});
	$(".hd_site_nav").mouseout(function(){
		$(this).hide();
		$("#jjj").css({"border-color":"transparent","background":"#F7F7F7"});
		});
});



	
	
	
	
	});