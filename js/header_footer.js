// JavaScript Document
function city(a)
{
//$("#h2 span a").eq(0).text($(a).text());
alert("对不起，目前除成都市外,其他市县暂未开通");
}
function area(a)
{
$("#h2 span a").eq(1).text($(a).text());
}

$(function(){
//导航第一部分
$("#h1 span").eq(0).addClass('h1_span1');
$("#h1 span").eq(1).css({"margin-top":"1px"});
$("#h1 a").addClass('h1_span1');
$("#h2 span").eq(0).css({"margin-top":"1px"});
$("#h2 a").addClass('h1_span2');
$("#h2 span").eq(4).css({"color":"#999"});
$("#h2").addClass('bor');
$("#h4 span").eq(2).addClass('h1_span1');
$("#h6 img").css({'height':'11px'});
$("#h7 span").eq(1).addClass('h1_span1');
//城市
$("#h2 span").eq(1).mouseover(function(){
  $("#h2 dd").eq(0).show();
  $("#h2").css({"border-color":"#ccc","background-color":"#fff"});
});
$("#h2 span").eq(1).mouseout(function(){
  $("#h2 dd").eq(0).hide();
  $("#h2").css({"border-color":"transparent","background-color":"#F0F2F5"});
});
$("#h2 dd").eq(0).mouseover(function(){
  $("#h2 dd").eq(0).show();
  $("#h2").css({"border-color":"#ccc","background-color":"#fff"});
});
$("#h2 dd").eq(0).mouseout(function(){
  $("#h2 dd").eq(0).hide();
  $("#h2").css({"border-color":"transparent","background-color":"#F0F2F5"});
});
//区县
$("#h2 span").eq(3).mouseover(function(){
  $("#h2 dd").eq(1).show();
  $("#h2").css({"border-color":"#ccc","background-color":"#fff"});
});
$("#h2 span").eq(3).mouseout(function(){
  $("#h2 dd").eq(1).hide();
  $("#h2").css({"border-color":"transparent","background-color":"#F0F2F5"});
});
$("#h2 dd").eq(1).mouseover(function(){
  $("#h2 dd").eq(1).show();
  $("#h2").css({"border-color":"#ccc","background-color":"#fff"});
});
$("#h2 dd").eq(1).mouseout(function(){
  $("#h2 dd").eq(1).hide();
  $("#h2").css({"border-color":"transparent","background-color":"#F0F2F5"});
});

//我的账户
$("#h4 span").eq(1).mouseover(function(){
  $("#h4 dd").show();
  $("#h4").css({"border-color":"#000","background-color":"#fff"});
});
$("#h4 span").eq(1).mouseout(function(){
  $("#h4 dd").hide();
  $("#h4").css({"border-color":"transparent","background-color":"#F0F2F5"});
});
$("#h4 dd").mouseover(function(){
  $("#h4 dd").show();
  $("#h4").css({"border-color":"#000","background-color":"#fff"});
});
$("#h4 dd").mouseout(function(){
  $("#h4 dd").hide();
  $("#h4").css({"border-color":"transparent","background-color":"#F0F2F5"});
});
//网站导航
$("#h7 span").eq(0).mouseover(function(){
  $("#h7 div").show();
  $("#h7").css({"border-color":"#CCC","background-color":"#fff"});
});
$("#h7 span").eq(0).mouseout(function(){
  $("#h7 div").hide();
  $("#h7").css({"border-color":"transparent","background-color":"#F0F2F5"});
});
$("#h7 div").mouseover(function(){
  $("#h7 div").show();
  $("#h7").css({"border-color":"#CCC","background-color":"#fff"});
});
$("#h7 div").mouseout(function(){
  $("#h7 div").hide();
  $("#h7").css({"border-color":"transparent","background-color":"#F0F2F5"});
});
});












