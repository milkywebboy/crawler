var req = require('request');
var conf = require('config');
var options = {
    url: conf.url + "?key=" + conf.key + "&cx=" + conf.cx + "&q=" + encodeURIComponent(conf.q),//設定ファイルから各パラメータを取得し、URLを生成している
    method: 'GET',//GETでリクエスト
    json: true//これでJSONをパースしてくれる
}
req(options, function (error, response, body) {
    if (error) {
        console.log('Error: ' + error.message);
        return;
    }
    var items  = body.items;
    for (var i in items) {
        var itemLink = items[i].displayLink;
        var strLink= String(itemLink);
        var itemTitle = items[i].title;
        var strTitle = String(itemTitle);
        if(strLink.indexOf('tabelog.com') != -1 ){
            console.log(conf.q + "の食べログは\nURL:" + strLink + "です。\n" + "タイトル：" + strTitle)
        }
    }
})