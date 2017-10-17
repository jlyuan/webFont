/**
 * Created by jlyuan on 2016/11/7.
 */
$(function(){
    // 切换搜索框
    var arrText = [
        '例如：荷棠鱼坊烧鱼 或 樱花日本料理',
        '例如：昌平区育新站龙旗广场2号楼609室',
        '例如：万达影院双人情侣券',
        '例如：东莞出事了，大老虎是谁？',
        '例如：北京初春降雪，天气变幻莫测'
    ];
    var oTxt = $("#search .form .text1");
    var _index=0;
    $('#search .menu li').click(function(){
        //alert($(this).index());
         _index=$(this).index();
        $('#search .menu li').removeClass("active").addClass("gradient");
        $(this).addClass("active").removeClass("gradient");
        oTxt.val(arrText[_index]);
    });
    oTxt.val(arrText[_index]);
    oTxt.focus(function(){
        if(oTxt.val()==arrText[_index]){
            oTxt.val('');
        }
    });
    oTxt.blur(function(){
        if(oTxt.val()==""){
            oTxt.val(arrText[_index]);
        }
    });

})

//update文字弹性滑动
$(function(){
    //update 数据
    var data=[{"name":"萱萱1","time":"3分钟前","title":"写了一篇新文章：那些灿烂华美的瞬间…","url":"#"},
        {"name":"萱萱2","time":"8分钟前","title":"写了一篇新文章：那些灿烂华美的瞬间…","url":"#"},
        {"name":"小灰灰2","time":"32分钟前","title":"写了一篇新文章：那些灿烂华美的瞬间…","url":"#"},
        {"name":"小灰灰2","time":"48分钟前","title":"写了一篇新文章：那些灿烂华美的瞬间…","url":"#"},
        {"name":"萱萱3","time":"11分钟前","title":"写了一篇新文章：那些灿烂华美的瞬间…","url":"#"},
        {"name":"萱萱4","time":"32分钟前","title":"写了一篇新文章：那些灿烂华美的瞬间…","url":"#"},];

    var oUl=$(".update ul");
    var str="";
     for(var i=0;i<data.length;i++){
          str+='<li><a href='+data[i].url+'><strong>'+data[i].name+'</strong><span>'+data[i].time+
              '</span>'+data[i].title+'</a></li>';
     }
    oUl.html(str);
    //数据上移动一行更新
    var uH=30;//li及ul的高度
    var k=0;
    $("#updateUpBtn").click(function(){
        doMove(1);
    });
    $("#updateDownBtn").click(function(){
        doMove(-1);
    });
    function doMove(n){
        k+=n;
        if(k>data.length-1){
            k=0;
        }
        if(k<0){
            k=data.length-1;
        }
        oUl.animate({"top":-k*uH},500,'swing')
    }
    var updateTimer=setInterval(function(){
        doMove(1);
    },1800);
})
//tab选项卡
/*
$(function(){
    $(".tabCon1").hide().eq(0).show();
    $(".tabNav1 li").click(function(){
        $(".tabNav1 li").removeClass("active").addClass("gradient");
        $(".tabNav1 li").find("a").removeClass("triangle_down_red").addClass("triangle_down_grey");
        $(this).addClass("active").removeClass("gradient");
        $(this).find('a').removeClass("triangle_down_grey").addClass('triangle_down_red');
        $(".tabCon1").hide().eq($(this).index()).show();
    });
});*/
$(function(){
    fnTab($(".tabNav1"),$(".tabCon1"));
    fnTab($(".tabNav2"),$(".tabCon2"));
    fnTab($(".tabNav3"),$(".tabCon3"));
    fnTab($(".tabNav4"),$(".tabCon4"));
    function fnTab(tabNav,tabCon){
        tabCon.hide().eq(0).show();
        tabNav.children().click(function(){
            tabNav.children().removeClass("active").addClass("gradient");
            tabNav.children().find("a").removeClass("triangle_down_red").addClass("triangle_down_grey");
            $(this).addClass("active").removeClass("gradient");
            $(this).find('a').removeClass("triangle_down_grey").addClass('triangle_down_red');
            tabCon.hide().eq($(this).index()).show();
        });
    }
});

//BBS论坛hover事件,及HOT 红人骚客hover事件；
$(function(){
 $(".bbs li").hover(function(){
     $(".bbs li").removeClass("active");
     $(this).addClass("active");
 });
    $(".hot_pic li").hover(function(){
        $(".hot_pic li").removeClass("active");
        $(this).addClass("active");
    });
});

//精彩推荐部分，自动播放的焦点图
$(function(){
    var pic=$("#picPlay ul li img");
    var img=$("#picPlay div img");
    var oP=$("#picPlay div p");
    var arr = [ '人像摄影中的光影感','爸爸去哪儿啦~','娇柔妩媚、美艳大方' ];
    //点击换图
    pic.click(function(){
       // alert($(this).attr("src"));
        img.attr("src",$(this).attr("src"));
        $(this).parent().siblings().removeClass("active");
        $(this).parent().addClass("active");
        oP.html(arr[$(this).parent().index()]);
    });
    //定时播放图片
    var len=0;
    var autoPlayPic=setInterval(function(){
        oP.html(arr[len]);
        var oLi=$($("#picPlay ul li")[len]);
        //$("#picPlay ul li")[len]获取的是DOM对象需要转换后才能使用find()函数
        var path=oLi.find("img").attr("src");
       // alert(path);
        img.attr("src",path);
        oLi.siblings().removeClass("active");
        oLi.addClass("active")
        len++;
        if(len>$("#picPlay ul li").length-1){
            len=0;
        }

    },3000);
});