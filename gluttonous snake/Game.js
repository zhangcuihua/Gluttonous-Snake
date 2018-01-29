(function(){
    function Game(){
        //游戏对象用于所有的 游戏相关的对象
        this.version=1.0;
        this.map=new Map({color:'#daa520'}); //地图
        this.food=new Food({map:this.map}); //食物
        this.snake=new Snake({map:this.map}); //蛇
        this.timer=null;//定义定时器的变量

    }

    Game.prototype={
        constructor:Game,
        gameStart:function(){
            //渲染地图
            this.map.render();//地图值渲染一次
            //用户控制
            this.userControl();
            var that=this;//缓存游戏对象
            //定时器控制游戏对象
            this.timer=setInterval(function(){
                that.map.map.innerHTML='';//清空地图
                //渲染食物和蛇
                that.render();
                //碰撞检测
                that.impact();
                //判断游戏是否结束
                that.gameOver();
            },300);

        },
        //渲染
        render:function(){
            this.snake.render();
            this.food.render();
        },
        //碰撞检测
        impact:function(){
            var head=this.snake.body[0];
            if(head.x==this.food.x&&head.y==this.food.y){
                this.snake.eat();//蛇吃食物
                this.food.setPos();//食物随机位置
            }
        },
        //游戏是否结束
        gameOver:function(){
            var head=this.snake.body[0]; //蛇头
            if(head.x<0||head.y<0||head.x>this.map.col-1||head.y>this.map.row-1){
                clearInterval(this.timer);//停止定时器
                alert('gameOver !');
            }
        },
        //用户控制
        userControl:function(){
            var that=this;
            window.onkeydown=function(e){
                var code=e.keyCode;
                switch (code){
                    case 37:
                        that.snake.direction='left';
                        break;
                    case 38:
                        that.snake.direction='up';
                        break;
                    case 39:
                        that.snake.direction='right';
                        break;
                    case 40:
                        that.snake.direction='down';
                        break;
                }
            }
        }
    }



    window.Game=Game;
})(window);


