// JavaScript Document
$(function(){

$(".jl_div1c3").mouseover(function(){
	$(".jl_div1c2_b").show();
	$(".jl_div1c2_b dt").eq(2).fadeIn(200);
	$(".jl_div1c2_b dt").eq(1).fadeIn(500);
	$(".jl_div1c2_b dt").eq(0).fadeIn(1000);	
	});	
$(".jl_div1c2_b").mouseover(function(){
	$(".jl_div1c2_b").show();
	$(".jl_div1c2_b dt").show();
	});
$(".jl_div1c2_b").mouseout(function(){
	$(".jl_div1c2_b").hide();
	$(".jl_div1c2_b dt").hide();
	});	
	
	
	
	
	
	
});

function getId(id)
{
	return documment.getElementById(id);
}
function bianse(a)
{
	$(a).css({"border-color":"#F00"});
}
function bianse1(a)
{
	$(a).css({"border-color":"#E3E7EA"});
}