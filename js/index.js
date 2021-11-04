/*
 * @Author: your name
 * @Date: 2021-11-02 20:17:12
 * @LastEditTime: 2021-11-02 20:17:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Zero-Cup-2021\js\index.js
 */

function playpause(){
    if(document.querySelector("#s1video").paused){
        document.querySelector("#s1video").play();
    }else document.querySelector("#s1video").pause();
}
