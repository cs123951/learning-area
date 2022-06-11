网址：
https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web 

JavaScript学习：
1. async——静态文件外部调用要加上这个
判断是否相等：if(x === 1)


把字符串转化为int：Number(x)
注意，还有一些内置函数：Math，内置函数不是JavaScript的一部分，它们可以理解为浏览器API的一部分。
标准内置对象的列表： https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects 

querySelector() 方法仅仅返回匹配指定选择器的第一个元素
根据元素的标签获取：<p>jkj</p>: document.querySelector("p");
根据元素的class获取：<p class="example">jkj</p>: document.querySelector(".example");

用textContent改变内容：guessShow.textContent = '上次猜的数字：'

常见的获取元素的方法有2大类：
getXXXByXXX 获取的是动态集合，querySelector获取的是静态集合。
简单的说就是，动态就是选出的元素会随文档改变，静态的不会，取出来之后就和文档的改变无关了。

xxxelement.addEventListener('x'), x可以是click, change等等


一些事件：
btn.onfocus及btn.onblur — 颜色将于按钮被置于焦点或解除焦点时改变（尝试使用 Tab 移动至按钮上，然后再移开）。这些通常用于显示有关如何在置于焦点时填写表单字段的信息，或者如果表单字段刚刚填入不正确的值，则显示错误消息。
btn.ondblclick — 颜色将仅于按钮被双击时改变。
window.onkeypress, window.onkeydown, window.onkeyup — 当按钮被按下时颜色会发生改变。keypress 指的是通俗意义上的按下按钮 (按下并松开), 而 keydown 和 keyup 指的是按键动作的一部分，分别指按下和松开。注意如果你将事件处理器添加到按钮本身，它将不会工作 — 我们只能将它添加到代表整个浏览器窗口的 window对象中。
btn.onmouseover 和 btn.onmouseout — 颜色将会在鼠标移入按钮上方时发生改变，或者当它从按钮移出时。


onclick 
onchange事件监听器
select.onchange = function() {
        select.value === 'black' ? update('black','white') : update('white','black');
      }
这里的function叫做匿名函数。
还可以将函数分配为变量的值。
var myGreeting = function() {
  alert('hello');
}
调用时：myGreeting();

addEventListener()函数和事件处理属性是类似的，但是语法略有不同。我们可以重写上面的随机颜色背景代码：
btn.addEventListener('click', bgChange);
或者：
btn.addEventListener('click', function() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
});
给同一个监听器注册多个处理器，要用下面这种方法：
myElement.addEventListener('click', functionA);
myElement.addEventListener('click', functionB);
当元素被点击时两个函数都会工作。

你遇到的大多数事件处理器的事件对象都有可用的标准属性和函数（方法）（请参阅完整列表 Event 对象引用）

事件冒泡和捕捉是两种机制，主要描述当在一个元素上有两个相同类型的事件处理器被激活会发生什么。

默认情况下，所有事件处理程序都是在冒泡阶段注册的，这在大多数情况下更有意义。如果您真的想在捕获阶段注册一个事件，那么您可以通过使用addEventListener()注册您的处理程序，并将可选的第三个属性设置为 true。

关键字"this"指向了当前代码运行时的对象 ( 原文：the current object the code is being written inside )——这里即指 person 对象.
var person = {
        name: ['Bob', 'Smith'],
        age: 32,
        gender: 'male',
        interests: ['music', 'skiing'],
        bi0: function(){
          alert(this.name[0]+' '+ this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
        },
        greeting: function(){
          alert('Hi! I\'m ' + this.name[0] + '.');
        }
      }


