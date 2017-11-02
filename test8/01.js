var express = require('express');//引入express框架
var tr = require('Transliteration');


var app = express();

app.get('/:canshu', function (req, res) {
    //var canshu = req.params.canshu;//您好
    //var canshu = req.params.canshu;//您好,world
    var canshu = req.params.canshu;//您好,世界
    console.log(canshu);

    var demo1 = tr.transliterate(canshu);//把传入的中文音译,第一个字母大写。您好 => Nin Hao
    console.log('demo1 ' + demo1);

    var demo2 = tr.transliterate(canshu);//把传入的中文音译。您好,world => Nin Hao,world  单词不音译
    console.log('demo2 ' + demo2);

    var demo3 = tr.transliterate(canshu, { replace: { 您: 'You' } });//可以把您替换成You。您好,世界 => You Hao ,world
    console.log('demo3 ' + demo3);

    var demo4 = tr.transliterate(canshu, { replace: { 您: 'You' }, ignore: ['好'] });//可以把您替换成You。'好'不转音译。您好,世界 => You好,world
    console.log('demo4 ' + demo4);

    var demo5 = tr.transliterate(canshu, { replace: { 您: 'You' }, ignore: ['好'] });//可以把您替换成You。'好'不转音译。您好,世界 => You好,world
    console.log('demo5 ' + demo5);

    tr.transliterate.config({ replace: [['您', 'You']], ignore: ['好'] });//配置默认的音译和忽略名字 ,您好,世界 => You好,world
    var demo6 = tr.transliterate(canshu);
    console.log('demo6 ' + demo6);


    var demo7 = tr.transliterate(canshu, { replace: { 您: 'You' }, ignore: ['好'] });//可以把您替换成You。'好'不转音译。您好,世界 => You好,world
    console.log('demo7 ' + demo7);

    var demo8 = tr.slugify(canshu); //您好,世界 => nin-hao-world
    console.log('demo8 ' + demo8);

    var demo9 = tr.slugify(canshu,{lowercase:false,separator:','}); //您好,世界  => Nin,Hao,Shi,Jie
    console.log('demo9 ' + demo9);

    var demo10 = tr.slugify(canshu,{replace:{'您好':'Hello'},lowercase:false,separator:','}); //您好,世界  => Hello,Shi,Jie
    console.log('demo10 ' + demo10);

    var demo11 = tr.slugify(canshu,{ignore:['您好'],lowercase:false,separator:','}); //您好,世界  => 您好Shi,Jie
    console.log('demo10 ' + demo11);

    console.log(req.route);

    res.send('成功');

})

app.listen(3000, '127.0.0.1');