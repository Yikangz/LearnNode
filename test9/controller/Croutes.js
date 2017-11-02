
var file = require('../models/files.js');

exports.showIndex = function (req, res, next) {

    //小图标去掉
    if (req.url == '/favicon.ico') {
        return;
    }

    file.getAllPhoneName(function (err, phoneName) {
        if (err) {
            //res.render('err');
            next();
            return;
        }
        res.render("index", {
            "PhoneArray": phoneName
        });
    })


}

exports.showPhone = function (req, res, next) {
 
    if (req.url == '/favicon.ico') {
        return;
    }

    //遍历相册中所有图片
    var phoneName = req.params.xiangce;
   // console.log('11111'+phoneName);
    file.getAllphoto(phoneName, function (err, imagerArray) {
        if (err){
            //res.render("err");
            next();
            return ;
        }

        res.render("photo", {
            "PhoneName": phoneName,
            'images':imagerArray
        });
        
    });




}
