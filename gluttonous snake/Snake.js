(function(window){
    function Snake(option){
        this.map=option.map;
        this.direction='left'; //方向
        this.speed=option.speed||1; //速度
        this.size=option.size||25;
        this.body=[
            {x:15,y:4},
            {x:16,y:4},
            {x:17,y:4},
            {x:18,y:4},
        ];
    }

    Snake.prototype={
        constructor:Snake,
        //渲染的方法
        render:function(){
            this.move();
            for (var i = 0; i < this.body.length; i++) {
                var obj = this.body[i];
                var s=document.createElement('div');
                s.style.background='orange';
                if(i==0){
                    s.style.background='red';
                    s.style.zIndex=1;
                }
                s.style.width=this.size+'px';
                s.style.height=this.size+'px';
                s.style.position='absolute';
                s.style.left=obj.x*this.size+'px';
                s.style.top=obj.y*this.size+'px';
                s.style.borderRadius='50%';

                this.map.map.appendChild(s);
            }
        },
        //移动
        move:function(){
            //蛇的身体跟着头动
            //蛇先移动动身体最后移动头部
            //蛇先移动身体，从后向移动
            for(var i=this.body.length-1;i>0;i--){
                var obj=this.body;
                obj[i].x=obj[i-1].x;
                obj[i].y=obj[i-1].y;
            }
            var head=this.body[0];
            //蛇头移动
            switch (this.direction){
                case 'left':
                    head.x-=1;
                    break;
                case 'right':
                    head.x+=1;
                    break;
                case 'up':
                    head.y-=1;
                    break;
                case 'down':
                    head.y+=1;
                    break;
            }

        },
        //吃食物
        eat:function(){
            var  last=this.body[this.body.length-1];//获取蛇最后一个元素
            var  s={
                x:last.x,
                y:last.y
            }
          this.body.push(s); //在最后最近一个盒子
        }

    }

    window.Snake=Snake;
})(window);
