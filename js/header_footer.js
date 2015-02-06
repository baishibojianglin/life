// JavaScript Document

$(function(){
//导航第一部分
$("#h1 span").eq(0).addClass('h1_span1');
$("#h1 a").addClass('h1_span2');
$("#h2 span").eq(0).css({"margin-top":"1px"});
$("#h2 a").addClass('h1_span2');
$("#h2 span").eq(4).css({"color":"#999"});
$("#h2").addClass('bor');
//城市
$("#h2 span").eq(1).mouseover(function(){
  $("#h2 dd").eq(0).show();
  $("#h2").eq(0).css({"border-color":"#ccc","background-color":"#fff"});
});
$("#h2 dd").eq(0).mouseover(function(){
  $("#h2 dd").eq(0).show();
  //$("#h2").eq(0).css({"border-color":"transparent","background-color":"#F0F2F5"});
});
});












