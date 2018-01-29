(function(){
    function Food(option){
        this.map=option.map;//地图对象
        this.color=option.color||'yellow';
        this.x=0; //列数
        this.y=0; //行数
        this.size=option.size||25; //食物的大小

        this.setPos();//随机一次位置
    }
    //渲染
    Food.prototype.render=function(){
        var food=document.createElement('div');
        food.style.background=this.color;
        food.style.width=this.size+'px';
        food.style.height=this.size+'px';
        food.style.position='absolute';
        food.style.left=this.x*this.size+'px';
        food.style.top=this.y*this.size+'px';

        this.map.map.appendChild(food);
        //this.map 是地图对象
        //this.map.map  是地图对象中div标签
    }

    //设置位置
    Food.prototype.setPos=function(){
        this.x=parseInt(Math.random()*this.map.col);
        this.y=parseInt(Math.random()*this.map.row);
    }

    window.Food=Food;
})(window);