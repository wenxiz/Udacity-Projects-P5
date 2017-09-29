// 这是我们的玩家要躲避的敌人 
var Enemy = function(x, y, speed) {
    // 要应用到每个敌人的实例的变量写在这里
    // 我们已经提供了一个来帮助你实现更多
    this.x = x;
    this.y = y;
    this.speed = speed || Math.random() * 100 +100;
    // 敌人的图片或者雪碧图，用一个我们提供的工具函数来轻松的加载文件
    this.sprite = 'images/enemy-bug.png';
};

// 定义图片大小
var cell_width = 101;
    cell_height = 83;
// 此为游戏必须的函数，用来更新敌人的位置
// 参数: dt ，表示时间间隙
Enemy.prototype.update = function(dt, x) {
    // 你应该给每一次的移动都乘以 dt 参数，以此来保证游戏在所有的电脑上
    // 都是以同样的速度运行的
    this.x += dt * this.speed
    //敌人不断从屏幕左边出现
    if (this.x >= 5 * cell_width) {
        this.x = -1 * cell_width;
    }
};

// 此为游戏必须的函数，用来在屏幕上画出敌人，
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// 现在实现你自己的玩家类
// 这个类需要一个 update() 函数， render() 函数和一个 handleInput()函数
var Player = function(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
};

// 解决到达河岸再reset，延时出现alert
var count = 0
Player.prototype.update = function(dt) {
    if (this.y === -11) {
        count ++;
        if (count % 5 === 2) {
            alert("You Win!!");
            this.reset();
        }
    } 
};

Player.prototype.reset = function(){
    this.x = 2 * cell_width;
    this.y = 4 * cell_width;
}
// 碰撞检测
Player.prototype.checkCollisions = function () {
    for(var i=0;i<allEnemies.length;i++){
        //首先判断player和enemy是否在同一行（
        if(this.y === allEnemies[i].y){
            //再判断两个图形间的距离
            if((Math.abs(this.x - allEnemies[i].x))<70){
                count ++;
                if (count % 5 === 2) {
                    alert("Oops, you got caught!");
                    this.reset();
                }
                
    // console.log(`checkCollisions() is working: player: ${this.x}, ${this.y}; enemy: ${allEnemies[i].x}, ${allEnemies[i].y}`)
  }
}
}
}



Player.prototype.handleInput = function(movement) {
    switch(movement) {
        case 'left':  
        if (this.x > 0) {
            this.x -= cell_width;}
        break;
        case 'right': 
        if (this.x < 4 * cell_width) {
            this.x += cell_width;}
        break;
        case 'up': 
        if (this.y > 0) {
            this.y -= cell_height;}
        break;
        case 'down': 
        if (this.y < 4 * cell_height) {
            this.y += cell_height;}
        break;
    }
};

//此函数用来屏幕上出现玩家

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// 现在实例化你的所有对象
// 把所有敌人的对象都放进一个叫 allEnemies 的数组里面
// 把玩家对象放进一个叫 player 的变量里面
var allEnemies = [];
// 加入bugs
for (var i=0; i<6; i++){
    var bugs = new Enemy(-1 * cell_width, cell_height*(i%3)+72);
    allEnemies.push(bugs);
}
var player = new Player(2 * cell_width, 4 * cell_width)

// 这段代码监听游戏玩家的键盘点击事件并且代表将按键的关键数字送到 Play.handleInput()
// 方法里面。你不需要再更改这段代码了。
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});