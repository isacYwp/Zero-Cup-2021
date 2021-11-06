# Zero-Cup-2021

&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;——from 2233 team

## 一、介绍

​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;评委您好，我们是队伍`2233`，本队由两个人组成，队员分别为来自计算机学院2021级的俞伟鹏和来自电气与自动化学院2021级的万冠呈，感谢审批我们的拙作(~~其实还好)~~。





## 二、作品简介

​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;我们以主题《电影艺术》创作了这一作品，从世界上第一部电影的诞生到现代电影，这份**html**将带观众走入一个从未了解过的电影世界。我们的作品分为两条主线，分别是电影**技术发展史**和电影**流派发展史**，从时间线的角度解构和挖掘存在于荧幕之后的故事和艺术。

- 该项目开源，git链接：[zero-cuo-2021](https://github.com/41206703/Zero-Cup-2021)





## 三、内容相关

- 作品分为主目录（index）和两个分板块（index1 index2）

- 主目录（index）引入主题和引出两个**分板块**，以及最后的结尾总结。

- 两个分板块分别为**电影技术发展史**和**电影流派发展史**，在主屏幕的第二屏**点击了解更多**就可以观看啦。
- 最后的结尾设计了一点点小心意喔

### index1（电影技术发展史）

​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;从早期的摄影术到现代电影技术，这些隐藏在屏幕背后的付出，作为一个普通观众是很难知晓的，我本人在制作的过程也在学习发展史，还是挺有意思的，每一屏藏着一个相关技术的详细介绍的某乎链接，也代表着一个里程碑和时代，里面。当黑白电影亮起的时候，虽然有一种明显的时代感，但也正是这种时代感，证明了很多人在推动电影技术方面的**努力**。而电影本身，也是和前人对话的一种方式，不是吗？

### index2（电影流派发展史）
&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;从第一个电影流派诞生起，电影就向世界宣告自己不仅仅是记录光影的手段，更是表达思想、传达美的一种艺术。而流派的发展，意味着电影在形式、艺术手法上的不断变化、产生差异；这些形式、手法，是构成我们观感差异的重要因素。我们决定回顾电影流派的发展史，去探寻电影艺术是如何演变，去发现一代代电影人如何从当时的现实生活中吸取灵感、被政治经济文化环境影响，从而塑造了一种流派，留下影史的经典。
​	



## 四、制作相关（使用方式）

 • 我们注意了代码分离规范，将**结构层**，**样式层**，**代码层**完全分离。<br>
 • 同时，为了靠近项目工程化和团队协作性，我们学习了git和github的使用，并且用分支处理解决bug（~~git reset拯救我5h肝的结果~~）。<br>
 • 为了适应不同设备，在css内做了监测**响应式处理**，并且在写html的时候尽量使用相对长度（~~把px一个个手动改成rem好累orz~~），以及总体和局部使用flex布局。

### index（主页面）

- 第一屏可以点击摄像机开始和暂停当时震撼一时的《火车来了》
- 第二屏设置了hover动画和一个挺好看的聚光灯效果（原理实现：使用clip遮罩，并添加动画关键帧）
- 三屏同样使用遮罩，用js监听scroll事件索取函数值，然后返回改变background-position来达到视觉差的效果
- 第四屏也是一个css动画，同时也是我们想说的话。



### index1（电影技术发展史）

- 不同屏幕之间有一个伪元素来做遮罩
- 时间卡片是js模拟的hover效果，点击链接可以跳转到详细的相关介绍
- 响应式



### index2（电影流派发展史）

 - 背景插入了电影`《天堂电影院》`的截图，回应主题
 - 每个流派用一个卡片展示，包含时间、简介、待电影海报的相关推荐
 - 最后包含著名导演的简介
 - 卡片出现的动画通过监听滚动条与卡片位置的关系触法，即实现滚动页面到相应位置才显示相应卡片；导演的简介设计为鼠标悬浮在相应照片上再显示，增添了互动性

## 五、资源及第三方库

### 第三方库

- jquery（用作一些动画和css的js部分）

#### 资料来源

- [首页 - 知乎 (zhihu.com)](https://www.zhihu.com/)
- [B站](https://www.bilibili.com/)
- 百度文库
- 3G壁纸网

## 六、感谢

​	特别感谢为这次比赛创造机会的学长学姐以及老师们，**以练代学**的目的也是达到了，团队合作的感觉，一起交流真的很棒！

​	由于时间仓促和水平有限，不免有bug或者不完善的地方，还请包容一下啦！

​														 				2021.11.6





