/*
 * @Author: your name
 * @Date: 2021-11-02 20:17:12
 * @LastEditTime: 2021-11-10 12:31:22
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
  let scrollY = window.scrollY - 4*winh
  console.log("hi");
  console.log();
  let point = 1430 + winh*2
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
    $(".vidtitle").delay(1500).fadeIn("slow");
    $(".vidintro").delay(2000).fadeIn("slow");
})