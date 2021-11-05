/*
 * @Author: your name
 * @Date: 2021-11-02 20:17:12
 * @LastEditTime: 2021-11-05 16:55:01
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
  let scrollY = window.scrollY - 2*winh -30
  console.log("hi");
  console.log();
  if (scroll <= 1430) {
    $('.background').css('-webkit-background-clip','');
    $('.background').css('-webkit-text-fill-color','');
  }
  else if (scrollY !== 0) {
    $('.background').css('-webkit-background-clip','text');
    $('.background').css('-webkit-text-fill-color','transparent');
    background.style.backgroundPosition = `calc(50% + ${scrollY}px) calc(50% + ${scrollY}px )`;
  } else {
    background.style.backgroundPosition = "";
  }
  if (scroll <= 1548) {
   
    $('.letter1').css('opacity', '0');
    $('.letter2').css('opacity', '0');
    $('.letter3').css('opacity', '0');
  } else {
   console.log('yoooooooooooooooooooooooooo!')
   $('.letter1').css('opacity', '1');
   $('.letter2').css('opacity', '1');
   $('.letter3').css('opacity', '1');
  }
});



}
