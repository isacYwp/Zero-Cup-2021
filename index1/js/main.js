/*
 * @Author: your name
 * @Date: 2021-11-04 08:18:30
 * @LastEditTime: 2021-11-04 19:08:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Editfun
 * @FilePath: \Zero-Cup-2021\index1\js\main.js
 */
// let contents = document.querySelectorAll('.content');
// for (item of contents) {
//     item.onmouseover = function() {
//         this.style.opacity = '1';
//         this.style.visibility = "visible";
//         console.log("1")
//     }
// }
// console.log("hi");

// $('.timecard').hover(function(){
//     $('i')
// }
// )

$(".timecard").hover(function (e) {
    console.log(e);
    console.log(e.currentTarget.classList[1]);
    $(".content." + e.currentTarget.classList[1]).addClass("hover");
    console.log(e.currentTarget.classList);
}, function (e) {
    $(".content."+ e.currentTarget.classList[1]).removeClass("hover");
});


$(".timecard:odd").css("right","-140vh");