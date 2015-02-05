// JavaScript Document
$right1=$("#right");
$left1=$("#left");
$window1=$(".c1div2");
var lc1 = 0;
var rc1 = 3;
function leftmove()
{
    if (lc1 < 1)
    {
        alert("已经是左边最后一页");
        return;
    }
    lc1--;
    rc1++;
    $window1.animate({left:'+=100%'}, 1000);
    yuandian(lc1);

}
function rightmove()
{

    if (rc1 < 1){
        alert("已经是右边最后一页");
        return;
    }
    lc1++;
    rc1--;
    $window1.animate({left:'-=100%'}, 1000);
    yuandian(lc1);
}
$left1.click(function(){

    leftmove();

});

$right1.click(function(){
    rightmove();
});
