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
	$(".sanjiao").hide();


	$(".lb_daos03").css({"background-color":"#FFFFFF"});
	for(i=0;i<=4;i++)
	{$(".lb_daos03").eq(2*i+1).css({"background-color":"#F0F2F5"});}
	$(".lb_daos09").css({"color":"#535353"});

	
	//图片	
	$(".lb_daos08 img").eq(0).attr("src","./images/2001.jpg");
    $(".lb_daos08 img").eq(1).attr("src","./images/2002.jpg");		
	$(".lb_daos08 img").eq(2).attr("src","./images/2003.jpg");	
    $(".lb_daos08 img").eq(3).attr("src","./images/2004.jpg");		
	$(".lb_daos08 img").eq(4).attr("src","./images/2005.jpg");
    $(".lb_daos08 img").eq(5).attr("src","./images/2006.jpg");		
	$(".lb_daos08 img").eq(6).attr("src","./images/2007.jpg");	
    $(".lb_daos08 img").eq(7).attr("src","./images/2008.jpg");		
	$(".lb_daos08 img").eq(8).attr("src","./images/2009.jpg");
    $(".lb_daos08 img").eq(9).attr("src","./images/2010.jpg");		
	$(".lb_daos08 img").eq(10).attr("src","./images/2011.jpg");	
	
	
	
	});
	
	
	
	
	
	
	
	

$(".lb_daos03").eq(0).mouseover(function(){
	$("#nei1").show();
	$(".lb_daos03").css({"background-color":"#FFFFFF"});
	for(i=0;i<=4;i++)
	{$(".lb_daos03").eq(2*i+1).css({"background-color":"#F0F2F5"});}
	$(this).css({"background-color":"#418BEF"});
	$(".lb_daos08 img").eq(0).attr("src","./images/001.png");
	$(".sanjiao").hide();
	$(".sanjiao").eq(0).show();
	$(".lb_daos09").css({"color":"#535353"});
	$(".lb_daos09").eq(0).css({"color":"white"});
	
	
	
	
	//图片	
    $(".lb_daos08 img").eq(1).attr("src","./images/2002.jpg");		
	$(".lb_daos08 img").eq(2).attr("src","./images/2003.jpg");	
    $(".lb_daos08 img").eq(3).attr("src","./images/2004.jpg");		
	$(".lb_daos08 img").eq(4).attr("src","./images/2005.jpg");
    $(".lb_daos08 img").eq(5).attr("src","./images/2006.jpg");		
	$(".lb_daos08 img").eq(6).attr("src","./images/2007.jpg");	
    $(".lb_daos08 img").eq(7).attr("src","./images/2008.jpg");		
	$(".lb_daos08 img").eq(8).attr("src","./images/2009.jpg");
    $(".lb_daos08 img").eq(9).attr("src","./images/2010.jpg");		
	$(".lb_daos08 img").eq(10).attr("src","./images/2011.jpg");
	});

$(".lb_daos03").eq(1).mouseover(function(){
	$("#nei1").show();
	$(".lb_daos03").css({"background-color":"#FFFFFF"});
	for(i=1;i<=4;i++)
	{$(".lb_daos03").eq(2*i+1).css({"background-color":"#F0F2F5"});}
	$(this).css({"background-color":"#418BEF"});
	$(".lb_daos08 img").eq(1).attr("src","./images/002.png");
	$(".sanjiao").hide();
	$(".sanjiao").eq(1).show();
	$(".lb_daos09").css({"color":"#535353"});
	$(".lb_daos09").eq(1).css({"color":"white"});
	
	
	//图片
    $(".lb_daos08 img").eq(0).attr("src","./images/2001.jpg");		
	$(".lb_daos08 img").eq(2).attr("src","./images/2003.jpg");	
    $(".lb_daos08 img").eq(3).attr("src","./images/2004.jpg");		
	$(".lb_daos08 img").eq(4).attr("src","./images/2005.jpg");
    $(".lb_daos08 img").eq(5).attr("src","./images/2006.jpg");		
	$(".lb_daos08 img").eq(6).attr("src","./images/2007.jpg");	
    $(".lb_daos08 img").eq(7).attr("src","./images/2008.jpg");		
	$(".lb_daos08 img").eq(8).attr("src","./images/2009.jpg");
    $(".lb_daos08 img").eq(9).attr("src","./images/2010.jpg");		
	$(".lb_daos08 img").eq(10).attr("src","./images/2011.jpg");
	
	
	});


$(".lb_daos03").eq(2).mouseover(function(){
	$("#nei1").show();
	$(".lb_daos03").css({"background-color":"#FFFFFF"});
	for(i=1;i<=4;i++)
	{$(".lb_daos03").eq(2*i+1).css({"background-color":"#F0F2F5"});}
	$(this).css({"background-color":"#418BEF"});
	$(".lb_daos08 img").eq(2).attr("src","./images/003.png");
	$(".sanjiao").hide();
	$(".sanjiao").eq(2).show();
	$(".lb_daos09").css({"color":"#535353"});
	$(".lb_daos09").eq(2).css({"color":"white"});
	
	
	//图片
    $(".lb_daos08 img").eq(1).attr("src","./images/2002.jpg");		
	$(".lb_daos08 img").eq(0).attr("src","./images/2001.jpg");	
    $(".lb_daos08 img").eq(3).attr("src","./images/2004.jpg");		
	$(".lb_daos08 img").eq(4).attr("src","./images/2005.jpg");
    $(".lb_daos08 img").eq(5).attr("src","./images/2006.jpg");		
	$(".lb_daos08 img").eq(6).attr("src","./images/2007.jpg");	
    $(".lb_daos08 img").eq(7).attr("src","./images/2008.jpg");		
	$(".lb_daos08 img").eq(8).attr("src","./images/2009.jpg");
    $(".lb_daos08 img").eq(9).attr("src","./images/2010.jpg");		
	$(".lb_daos08 img").eq(10).attr("src","./images/2011.jpg");
	
	
	});


$(".lb_daos03").eq(3).mouseover(function(){
	$("#nei1").show();
	$(".lb_daos03").css({"background-color":"#FFFFFF"});
	for(i=1;i<=4;i++)
	{$(".lb_daos03").eq(2*i+1).css({"background-color":"#F0F2F5"});}
	$(this).css({"background-color":"#418BEF"});
	$(".lb_daos08 img").eq(3).attr("src","./images/004.png");
	$(".sanjiao").hide();
	$(".sanjiao").eq(3).show();
	$(".lb_daos09").css({"color":"#535353"});
	$(".lb_daos09").eq(3).css({"color":"white"});
	
	
	//图片
    $(".lb_daos08 img").eq(1).attr("src","./images/2002.jpg");		
	$(".lb_daos08 img").eq(2).attr("src","./images/2003.jpg");	
    $(".lb_daos08 img").eq(0).attr("src","./images/2001.jpg");		
	$(".lb_daos08 img").eq(4).attr("src","./images/2005.jpg");
    $(".lb_daos08 img").eq(5).attr("src","./images/2006.jpg");		
	$(".lb_daos08 img").eq(6).attr("src","./images/2007.jpg");	
    $(".lb_daos08 img").eq(7).attr("src","./images/2008.jpg");		
	$(".lb_daos08 img").eq(8).attr("src","./images/2009.jpg");
    $(".lb_daos08 img").eq(9).attr("src","./images/2010.jpg");		
	$(".lb_daos08 img").eq(10).attr("src","./images/2011.jpg");
	
	
	});



$(".lb_daos03").eq(4).mouseover(function(){
	$("#nei1").show();
	$(".lb_daos03").css({"background-color":"#FFFFFF"});
	for(i=1;i<=4;i++)
	{$(".lb_daos03").eq(2*i+1).css({"background-color":"#F0F2F5"});}
	$(this).css({"background-color":"#418BEF"});
	$(".lb_daos08 img").eq(4).attr("src","./images/005.png");
	$(".sanjiao").hide();
	$(".sanjiao").eq(4).show();
	$(".lb_daos09").css({"color":"#535353"});
	$(".lb_daos09").eq(4).css({"color":"white"});
	
	
	//图片
    $(".lb_daos08 img").eq(1).attr("src","./images/2002.jpg");		
	$(".lb_daos08 img").eq(2).attr("src","./images/2003.jpg");	
    $(".lb_daos08 img").eq(0).attr("src","./images/2001.jpg");		
	$(".lb_daos08 img").eq(3).attr("src","./images/2004.jpg");
    $(".lb_daos08 img").eq(5).attr("src","./images/2006.jpg");		
	$(".lb_daos08 img").eq(6).attr("src","./images/2007.jpg");	
    $(".lb_daos08 img").eq(7).attr("src","./images/2008.jpg");		
	$(".lb_daos08 img").eq(8).attr("src","./images/2009.jpg");
    $(".lb_daos08 img").eq(9).attr("src","./images/2010.jpg");		
	$(".lb_daos08 img").eq(10).attr("src","./images/2011.jpg");
	
	
	});



$(".lb_daos03").eq(5).mouseover(function(){
	$("#nei1").show();
	$(".lb_daos03").css({"background-color":"#FFFFFF"});
	for(i=1;i<=4;i++)
	{$(".lb_daos03").eq(2*i+1).css({"background-color":"#F0F2F5"});}
	$(this).css({"background-color":"#418BEF"});
	$(".lb_daos08 img").eq(5).attr("src","./images/006.png");
	$(".sanjiao").hide();
	$(".sanjiao").eq(5).show();
	$(".lb_daos09").css({"color":"#535353"});
	$(".lb_daos09").eq(5).css({"color":"white"});
	
	
	//图片
    $(".lb_daos08 img").eq(1).attr("src","./images/2002.jpg");		
	$(".lb_daos08 img").eq(2).attr("src","./images/2003.jpg");	
    $(".lb_daos08 img").eq(0).attr("src","./images/2001.jpg");		
	$(".lb_daos08 img").eq(4).attr("src","./images/2005.jpg");
    $(".lb_daos08 img").eq(3).attr("src","./images/2004.jpg");		
	$(".lb_daos08 img").eq(6).attr("src","./images/2007.jpg");	
    $(".lb_daos08 img").eq(7).attr("src","./images/2008.jpg");		
	$(".lb_daos08 img").eq(8).attr("src","./images/2009.jpg");
    $(".lb_daos08 img").eq(9).attr("src","./images/2010.jpg");		
	$(".lb_daos08 img").eq(10).attr("src","./images/2011.jpg");
	
	
	});

$(".lb_daos03").eq(6).mouseover(function(){
	$("#nei1").show();
	$(".lb_daos03").css({"background-color":"#FFFFFF"});
	for(i=1;i<=4;i++)
	{$(".lb_daos03").eq(2*i+1).css({"background-color":"#F0F2F5"});}
	$(this).css({"background-color":"#418BEF"});
	$(".lb_daos08 img").eq(6).attr("src","./images/007.png");
	$(".sanjiao").hide();
	$(".sanjiao").eq(6).show();
	$(".lb_daos09").css({"color":"#535353"});
	$(".lb_daos09").eq(6).css({"color":"white"});
	
	
	//图片
    $(".lb_daos08 img").eq(1).attr("src","./images/2002.jpg");		
	$(".lb_daos08 img").eq(2).attr("src","./images/2003.jpg");	
    $(".lb_daos08 img").eq(0).attr("src","./images/2001.jpg");		
	$(".lb_daos08 img").eq(4).attr("src","./images/2005.jpg");
    $(".lb_daos08 img").eq(3).attr("src","./images/2004.jpg");		
	$(".lb_daos08 img").eq(5).attr("src","./images/2006.jpg");	
    $(".lb_daos08 img").eq(7).attr("src","./images/2008.jpg");		
	$(".lb_daos08 img").eq(8).attr("src","./images/2009.jpg");
    $(".lb_daos08 img").eq(9).attr("src","./images/2010.jpg");		
	$(".lb_daos08 img").eq(10).attr("src","./images/2011.jpg");
	
	
	});



$(".lb_daos03").eq(7).mouseover(function(){
	$("#nei1").show();
	$(".lb_daos03").css({"background-color":"#FFFFFF"});
	for(i=1;i<=4;i++)
	{$(".lb_daos03").eq(2*i+1).css({"background-color":"#F0F2F5"});}
	$(this).css({"background-color":"#418BEF"});
	$(".lb_daos08 img").eq(7).attr("src","./images/008.png");
	$(".sanjiao").hide();
	$(".sanjiao").eq(7).show();
	$(".lb_daos09").css({"color":"#535353"});
	$(".lb_daos09").eq(7).css({"color":"white"});
	
	
	//图片
    $(".lb_daos08 img").eq(1).attr("src","./images/2002.jpg");		
	$(".lb_daos08 img").eq(2).attr("src","./images/2003.jpg");	
    $(".lb_daos08 img").eq(0).attr("src","./images/2001.jpg");		
	$(".lb_daos08 img").eq(4).attr("src","./images/2005.jpg");
    $(".lb_daos08 img").eq(3).attr("src","./images/2004.jpg");		
	$(".lb_daos08 img").eq(5).attr("src","./images/2006.jpg");	
    $(".lb_daos08 img").eq(6).attr("src","./images/2007.jpg");		
	$(".lb_daos08 img").eq(8).attr("src","./images/2009.jpg");
    $(".lb_daos08 img").eq(9).attr("src","./images/2010.jpg");		
	$(".lb_daos08 img").eq(10).attr("src","./images/2011.jpg");
	
	
	});

$(".lb_daos03").eq(8).mouseover(function(){
	$("#nei1").show();
	$(".lb_daos03").css({"background-color":"#FFFFFF"});
	for(i=1;i<=4;i++)
	{$(".lb_daos03").eq(2*i+1).css({"background-color":"#F0F2F5"});}
	$(this).css({"background-color":"#418BEF"});
	$(".lb_daos08 img").eq(8).attr("src","./images/009.png");
	$(".sanjiao").hide();
	$(".sanjiao").eq(8).show();
	$(".lb_daos09").css({"color":"#535353"});
	$(".lb_daos09").eq(8).css({"color":"white"});
	
	
	//图片
    $(".lb_daos08 img").eq(1).attr("src","./images/2002.jpg");		
	$(".lb_daos08 img").eq(2).attr("src","./images/2003.jpg");	
    $(".lb_daos08 img").eq(0).attr("src","./images/2001.jpg");		
	$(".lb_daos08 img").eq(4).attr("src","./images/2005.jpg");
    $(".lb_daos08 img").eq(3).attr("src","./images/2004.jpg");		
	$(".lb_daos08 img").eq(5).attr("src","./images/2006.jpg");	
    $(".lb_daos08 img").eq(6).attr("src","./images/2007.jpg");		
	$(".lb_daos08 img").eq(7).attr("src","./images/2008.jpg");
    $(".lb_daos08 img").eq(9).attr("src","./images/2010.jpg");		
	$(".lb_daos08 img").eq(10).attr("src","./images/2011.jpg");
	
	});

$(".lb_daos03").eq(9).mouseover(function(){
	$("#nei1").show();
	$(".lb_daos03").css({"background-color":"#FFFFFF"});
	for(i=1;i<=4;i++)
	{$(".lb_daos03").eq(2*i+1).css({"background-color":"#F0F2F5"});}
	$(this).css({"background-color":"#418BEF"});
	$(".lb_daos08 img").eq(9).attr("src","./images/010.png");
	$(".sanjiao").hide();
	$(".sanjiao").eq(9).show();
	$(".lb_daos09").css({"color":"#535353"});
	$(".lb_daos09").eq(9).css({"color":"white"});
	
	
	//图片
    $(".lb_daos08 img").eq(1).attr("src","./images/2002.jpg");		
	$(".lb_daos08 img").eq(2).attr("src","./images/2003.jpg");	
    $(".lb_daos08 img").eq(0).attr("src","./images/2001.jpg");		
	$(".lb_daos08 img").eq(4).attr("src","./images/2005.jpg");
    $(".lb_daos08 img").eq(3).attr("src","./images/2004.jpg");		
	$(".lb_daos08 img").eq(5).attr("src","./images/2006.jpg");	
    $(".lb_daos08 img").eq(6).attr("src","./images/2007.jpg");		
	$(".lb_daos08 img").eq(7).attr("src","./images/2008.jpg");
    $(".lb_daos08 img").eq(8).attr("src","./images/2009.jpg");		
	$(".lb_daos08 img").eq(10).attr("src","./images/2011.jpg");
	
	});


$(".lb_daos03").eq(10).mouseover(function(){
	$("#nei1").show();
	$(".lb_daos03").css({"background-color":"#FFFFFF"});
	for(i=1;i<=4;i++)
	{$(".lb_daos03").eq(2*i+1).css({"background-color":"#F0F2F5"});}
	$(this).css({"background-color":"#418BEF"});
	$(".lb_daos08 img").eq(10).attr("src","./images/011.png");
	$(".sanjiao").hide();
	$(".sanjiao").eq(10).show();
	$(".lb_daos09").css({"color":"#535353"});
	$(".lb_daos09").eq(10).css({"color":"white"});
	
	
	//图片
    $(".lb_daos08 img").eq(1).attr("src","./images/2002.jpg");		
	$(".lb_daos08 img").eq(2).attr("src","./images/2003.jpg");	
    $(".lb_daos08 img").eq(0).attr("src","./images/2001.jpg");		
	$(".lb_daos08 img").eq(4).attr("src","./images/2005.jpg");
    $(".lb_daos08 img").eq(3).attr("src","./images/2004.jpg");		
	$(".lb_daos08 img").eq(5).attr("src","./images/2006.jpg");	
    $(".lb_daos08 img").eq(6).attr("src","./images/2007.jpg");		
	$(".lb_daos08 img").eq(7).attr("src","./images/2008.jpg");
    $(".lb_daos08 img").eq(8).attr("src","./images/2009.jpg");		
	$(".lb_daos08 img").eq(9).attr("src","./images/2010.jpg");
	
	});
	
	for(i=1;i<=4;i++)
	{
	$(".jllb_div1a1").eq(i).hide();	
	$(".jllb_div1a2").eq(i).hide();	
	}

$(".jllb_div1a").mouseover(function(){
		clearInterval(time);
	});
$(".jllb_div1a").mouseout(function(){
		time=setInterval(bofang,2500);
	});	

//品牌导购背景色
$(".jl_div1b_dt5f").eq(1).css({"background-color":"#FF4F4F"});
$(".jl_div1b_dt5f").eq(2).css({"background-color":"#E450BC"});

//边框颜色
$(".jl_div1c1f").eq(1).css({"border-top":"5px solid #FF4F4F"});
$(".jl_div1c1f").eq(2).css({"border-top":"5px solid #E450BC"});

//小边框颜色
for(i=6;i<=11;i++)
{
$(".jl_div1c1f_2 dt").eq(i).css({"border-left":"5px solid #FF4F4F"});
}
for(i=12;i<=17;i++)
{
$(".jl_div1c1f_2 dt").eq(i).css({"border-left":"5px solid #E450BC"});
}
});


var m=1;
var time=setInterval(bofang,2500);	
function bofang()
{   
    if(m>4)
	{m=0;}
	$(".jllb_div1a1").hide();
	$(".jllb_div1a2").hide();
	$(".jllb_div1a3 img").attr("src","./images/dian1.png");	
	$(".jllb_div1a3 img").eq(m).attr("src","./images/dian2.png");	
	$(".jllb_div1a1").eq(m).fadeIn();	
	$(".jllb_div1a2").eq(m).fadeIn();
	m++;

}

function dian(z)
{
	$(".jllb_div1a1").hide();
	$(".jllb_div1a2").hide();
	$(".jllb_div1a3 img").attr("src","./images/dian1.png");	
	$(".jllb_div1a3 img").eq(z).attr("src","./images/dian2.png");	
	$(".jllb_div1a1").eq(z).fadeIn();	
	$(".jllb_div1a2").eq(z).fadeIn();
	m=z+1;	
}
