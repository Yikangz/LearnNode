
var file = require('../models/files.js');
var formidable = require('formidable');
var moment = require('moment');
var path = require('path');
var fs = require('fs');

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
        if (err) {
            //res.render("err");
            next();
            return;
        }

        res.render("photo", {
            "PhoneName": phoneName,
            'images': imagerArray
        });

    });

}

//显示上传文件夹
exports.showUpDir = function (req, res) {
    file.getAllPhoneName(function (err, dirName) {
        res.render("up", {
            dirname: dirName
        })
    });
}

exports.doPost = function (req, res) {
    //定义一个新的form
    var form = new formidable.IncomingForm();
    form.uploadDir = path.normalize(__dirname + '/../temp/');

    form.parse(req, function (err, fields, files, next) {
        console.log('1111' + fields);
        console.log('2222' + files);
        if (err) {
            next();
            return;
        }

        //判断文件大小
        var size = parseInt(files.tupian.size);
        console.log('size' + size);
        if (size > 2000000) {
            res.send('图片尺寸过大,需小于2M');
            fs.unlink(files.tupian.path);
            return;
        }
        var times = moment().format('YYYYMMDDHHmmss');
        var random = parseInt(Math.random() * 89999 + 10000);
        var extname = path.extname(files.tupian.name);

        var wenjianjia = fields.wenjianjia;
        //  console.log('we'+wenjianjia);
        var oldpath = files.tupian.path;
        //console.log('paths'+oldpath);
        var newpath = path.normalize(__dirname + '/../uploads/' + wenjianjia + '/' + times + random + extname);
        // console.log(newpath);

        fs.rename(oldpath, newpath, function (err) {
            if (err) {
                res.send('改名失败');
                return;
            }
            res.send('上传成功');
           
        })

    });
    //console.log('paths'+paths);
    return;
}