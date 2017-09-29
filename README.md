
前端纳米学位街机游戏克隆项目
===============================

学生应该用这个[评审标准](https://review.udacity.com/#!/rubrics/499/view))来自我检查自己提交的代码。 确认自己写的函数要是**面向对象的** -  要么是类函数（就像函数 Player 和 Enemy）要么是类的原型链上的函数比如 Enemy.prototype.checkCollisions ， 在类函数里面或者类的原型链函数里面适当的使用关键词 'this' 来引用调用该函数的对象实例。最后保证你的**readme.md**文件要写明关于如何运行和如何玩你的街机游戏的指引。

关于如何开始这个项目的更详细的指导，可以查阅这份[指南](https://gdgdocs.org/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true)。

如何加载游戏：
===============================
用浏览器打开index.html文件

如何进行游戏：
===============================
1. 游戏获胜的途径是通过控制小人避开虫子到达河岸
2. 玩家可以通过控制方向键（up, down, left, right）控制小人移动
3. 游戏中一旦小人碰到虫子，小人位置重置，浏览器提示"Oops, you got caught!" 进行新一轮游戏
4. 玩家成功控制小人到达河岸，浏览器会提示“You Win！” 并进行新一轮游戏