//沙箱模式保护插件数据安全
(function(window){

    function Map(option){
        this.color=option.color||'#ccc';
        this.row=option.row||20;
        this.col=option.col||30;
        this.size=option.size||25; //行高和列宽相同
        this.map=null;
    }

    Map.prototype.render=function(){
        var div=document.createElement('div');//创建地图的div标签
        this.map=div;//地图的标签
        div.style.position='relative';
        div.style.background=this.color;
        div.style.width=this.col*this.size+'px';
        div.style.height=this.row*this.size+'px';
        window.document.body.appendChild(div);
    };

    window.Map=Map;

})(window);
