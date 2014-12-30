// JavaScript Document
$(function(){

$(".jl_div1c3").mouseover(function(){
	$(".jl_div1c2_b dt").eq(2).fadeIn(200);
	$(".jl_div1c2_b dt").eq(1).fadeIn(500);
	$(".jl_div1c2_b dt").eq(0).fadeIn(1000);	
	});	

$(".jl_div1").mouseout(function(){
	
	$(".jl_div1c2_b dt").eq(2).fadeOut(200);
	$(".jl_div1c2_b dt").eq(1).fadeOut(500);
	$(".jl_div1c2_b dt").eq(0).fadeOut(1000);
	
	});	
	
	
});