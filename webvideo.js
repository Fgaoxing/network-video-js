function vqq() {
    var vqqs = document.getElementsByTagName('vqq');
    for (var i = 0; i < videos.length; i++) {
        var type = vqqs[i].getAttribute('type');
        var ID = vqqs[i].getAttribute('ID');
        var width = vqqs[i].getAttribute('width');
        var height = vqqs[i].getAttribute('height');
        var vqqJson={
            player: '<iframe height=720 width=1280 frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid='+ID+'" allowFullScreen="true" width="`+width+`" height="`+height+`"></iframe>',
        }
        videos[i].innerHTML = vqqJson[type];
    }
}

function bili() {
    //遍历所有的bili标签
    var bilis = document.getElementsByTagName('bili');
    //遍历所有的bili标签
    for (var i = 0; i < bilis.length; i++) {
        var type = bilis[i].getAttribute('type');
        var width = bilis[i].getAttribute('width');
        var height = bilis[i].getAttribute('height');
        var BiliJson = {
            player: {
                className: 'bili-player', js: function () {
                    if (bilis[i].getAttribute('bv')) {
                        bilis[i].innerHTML = `<iframe src="//player.bilibili.com/player.html?bvid=` + bilis[i].getAttribute('bv') + `" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" high_quality="1" danmaku="1" width="`+width+`" height="`+height+`"></iframe>`
                    } else if (bilis[i].getAttribute('aid')) {
                        bilis[i].innerHTML = `<iframe src="//player.bilibili.com/player.html?aid=` + bilis[i].getAttribute('aid') + `" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" high_quality="1" danmaku="1" width="`+width+`" height="`+height+`"> </iframe>`
                    } else if (bilis[i].getAttribute('cid')) {
                        bilis[i].innerHTML = `<iframe src="//player.bilibili.com/player.html?cid=` + bilis[i].getAttribute('cid') + `" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" high_quality="1" danmaku="1" width="`+width+`" height="`+height+`"> </iframe>`
                    } else if (bilis[i].getAttribute('url')) {
                            if (bilis[i].getAttribute('url').indexOf('BV')<=0) {
                                bilis[i].setAttribute('bv','BV'+bilis[i].getAttribute('url').split('?')[0].split('BV')[1]);
                                BiliJson[type].js()
                            } else {
                                bilis[i].setAttribute('av','av'+bilis[i].getAttribute('url').split('?')[0].split('av')[1]);
                                BiliJson[type].js()
                            }
                    } else {
                        print_err('你需要一个参数，av、bv或cid', bilis[i]);
                    }
                }
            }
        }
        if (BiliJson[type].js){
            BiliJson[type].js()
        } else {
            bilis[i].innerHTML = BiliJson[type].html;
        }
    }
}


//页面加载后运行
//<webvideo type="tenc" ID=""></tenc>

if (window.onload) {
    window.onload += function () {
        vqq();
        bili();
    }
} else {
    window.onload = function() {
       vqq();
        bili();
    }
}
