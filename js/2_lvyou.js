

function setTab(name,cursel,n){
	for(i=1;i<=n;i++){
		var menu=document.getElementById(name+i);
		var con=document.getElementById("con_"+name+"_"+i);
		menu.className=i==cursel?"hover":""; //如果i等于cursel，那么className为"hover"，如果不等于则为""
		con.style.display=i==cursel?"block":"none";//如果i等于cursel，那么con的显示方式为"block" 否则为"none"
	}
}


$(function(){     //热销排行的图标的显示影藏
	$("#one1").click(function(){
		$("#imgone").show();
		$("#imgtwo").hide();
		$("#imgthree").hide();
	});
	$("#one2").click(function(){
		$("#imgtwo").show();
		$("#imgthree").hide();
		$("#imgone").hide();
	});
	$("#one3").click(function(){
		$("#imgthree").show();
		$("#imgtwo").hide();
		$("#imgone").hide();
	});
});







































