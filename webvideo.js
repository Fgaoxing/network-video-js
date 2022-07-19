function webvideo_view() {
    var videos = document.getElementsByTagName('webvideo');
    for (var i = 0; i < videos.length; i++) {
        var type = videos[i].getAttribute('type');
        var ID = videos[i].getAttribute('ID');
        videosJson={
            bilibili: '<iframe height=720 width=1280 src="https://player.bilibili.com/player.html?aid=301012336&bvid='+ID+'&cid=777039405&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>',
            tenc: '<iframe height=720 width=1280 frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid='+ID+'" allowFullScreen="true"></iframe>',
            youku: "<iframe height=720 width=1280 src='https://player.youku.com/embed/"+ID+" frameborder=0 'allowfullscreen'></iframe>"
        }
        videos[i].innerHTML = videosJson[type];
    }
}


//页面加载后运行
//<webvideo type="tenc" ID=""></tenc>

if (window.onload) {
    window.onload += function () {
        webvideo_view()
    }
}

else {
    window.onload = function() {
        webvideo_view()
    }
}