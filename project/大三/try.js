/*$(document).ready(function() {
    $("[class*=look]").css("background","red");
    $("[class~=look]").css("width","200px");
    alert("hello world");
});
$(function() {
    alert("hello again");
});*/

/*(function() {
	var what = "dsad";
var a = 30 + null;
    var b = 30 + undefined;
    if(0 == null){
    	console.log("dsadadadsadadsad");
    }
    	console.log(a,b);

    })();*/
/*    var a = "+000200px";
    var b = 100;
    var c = true;
    var d = [1,2,3];
    var e = "11px";
    a = parseInt(a);
    b = String(b);
    c = c.toString();
    d = d.toString();
    e = e.toString();
    console.log(a,typeof a);
    console.log(b,typeof b);
    console.log(c,typeof c);
    console.log(d,typeof d);
    console.log(e,typeof e);*/
   
/*   console.log(typeof foo,foo);

   var foo = 0;
   console.log(typeof foo,foo);

   function foo() {console.log(1);};
   console.log(typeof foo,foo);

   var foo = 2;
   console.log(typeof foo,foo);

   function foo() {console.log(3);};
   console.log(typeof foo,foo);*/
/*   var parent = function () {
    var len = 9;

for (var i =0; i < len; i++) {
	window.onload = function() {
		console.log(i);  // 全都为9
}
     var x = function(){
     	console.log(i);
     }();

}
};
parent();*/
  (function() {

/*    var ul = $("div ul");
    var li = ul.find("li");
    var str = "+" + "200px";
    li.animate({"top":str},1000)
    console.log(ul.css("top"));*/
   /* var ul = document.getElementsByTagName("ul")[0];
    var li = document.getElementsByTagName("li")[0];
    console.log($("img")[0].src);*/
/*    $(".twl p:nth-of-type(3)").css({
  "width": "100px",
  "height": "100px",
  "background": "blue"
});*/


var obj1 = {name:"rock",age:20,sex:"man"};
var obj2 = {name:"twl",age:[1,2]};
var obj3 = $.extend(obj1,obj2);
console.log(obj1,obj2,obj3);
obj1.name = "rock";
console.log(obj2.name);

    

  })();


