// JavaScript Document
$(function(){
//jl第一部分特效代码



/*淡入代码*/
$(".jl_div1c3").mouseover(function(){
	$(".jl_div1c3_a").hide();
	$(".jl_div1c2_b").show();
	$(".jl_div1c2_b dt").eq(2).fadeIn(200);
	$(".jl_div1c2_b dt").eq(1).fadeIn(500);
	$(".jl_div1c2_b dt").eq(0).fadeIn(1000);	
	});	
$(".jl_div1c2_b").mouseover(function(){
	$(".jl_div1c2_b").show();
	$(".jl_div1c2_b dt").show();
	$(".jl_div1c3_a").hide();
	});
$(".jl_div1c2_b").mouseout(function(){
	$(".jl_div1c2_b").hide();
	$(".jl_div1c2_b dt").hide();
	$(".jl_div1c3_a").show();
	});	
	
	
/*换一批*/
var jl_1=$(".jl_div1c2_a dt").size();
var jl_2=Math.ceil(jl_1/20);
var j=0,i=1;

$(".jl_div1b dt").eq(5).click(function(){	
if(i==jl_2)
{i=0;}
$(".jl_div1c2_a dt").hide();
for(j=i*20;j<(i+1)*20;j++)
{
$(".jl_div1c2_a dt").eq(j).show();
}
i++;		
});
	
$(".jl_div1b dt").eq(5).mouseover(function(){
$(this).css({"color":"red"});
	});	
$(".jl_div1b dt").eq(5).mouseout(function(){
$(this).css({"color":"#666666"});
	});		

$(".lb_daos06").click(function(){
	$(".lb_daos017").slideToggle();
	$("#nei1").hide();
	});
		
});
