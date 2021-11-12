/*
 * @Author: your name
 * @Date: 2021-11-02 20:17:12
 * @LastEditTime: 2021-11-10 16:26:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Zero-Cup-2021\js\index.js
 */

function playpause(){
  if(document.querySelector("#s1video").paused){
      document.querySelector("#s1video").play();
  }else document.querySelector("#s1video").pause();
}
window.onload = function() {


const background = document.querySelector(".background");

document.addEventListener("scroll", () => {
  // console.log($(window).height())
  let winh = $(window).height()
  console.log(window.scrollY)
  let scroll = window.scrollY
  let scrollY = window.scrollY - 5*winh
  console.log("hi");
  console.log();
  let point = 1430 + winh*3
  if (scroll <= point) {
    $('.background').css('-webkit-background-clip','');
    $('.background').css('-webkit-text-fill-color','');
  }
  else if (scrollY !== 0) {
    $('.background').css('-webkit-background-clip','text');
    $('.background').css('-webkit-text-fill-color','transparent');
    background.style.backgroundPosition = `calc(50% - 0.4rem + ${scrollY}px) calc(50% - 0.4rem + ${scrollY}px )`;
  } else {
    background.style.backgroundPosition = "";
  }
  if (scroll <= (point + 120)) {
   
    $('.letter1').css('opacity', '0');
    $('.letter2').css('opacity', '0');
    $('.letter3').css('opacity', '0');
  } else {
   $('.letter1').css('opacity', '1');
   $('.letter2').css('opacity', '1');
   $('.letter3').css('opacity', '1');
  }
});



}

$(document).ready(function(){
    $(".vidtitle").delay(2500).fadeIn("slow");
    $(".vidintro").delay(3000).fadeIn("slow");
})

$(".desc1").click(function(){
  $(".mov1").animate({height:"78vh"});
  $(".mov1").addClass("nofilter")
  $(".mov1 .intro p").fadeIn("slow");
  $(".desc1").fadeOut("slow");
})
$(".desc2").click(function(){
  $(".mov2").animate({height:"78vh",marginTop:"2rem"});
  $(".mov2").addClass("nofilter")
  $(".mov2 .intro p").fadeIn("slow");
  $(".desc2").fadeOut("slow");
})
$(".desc3").click(function(){
  $(".mov3").animate({height:"93vh"});
  $(".mov3").addClass("nofilter")
  $(".mov3 .intro p").fadeIn("slow");
  $(".desc3").fadeOut("slow");
})
$(".desc4").click(function(){
  $(".mov4").animate({height:"70vh",marginTop:"9rem"});
  $(".mov4").addClass("nofilter")
  $(".mov4 .intro p").fadeIn("slow");
  $(".desc4").fadeOut("slow");
})