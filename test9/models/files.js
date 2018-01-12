var fs = require('fs');

exports.getAllPhoneName = function (callback) {

    fs.readdir('./uploads', function (err, files) {

        if (err) {
            callback('没有找到该uploads文件', null);
            return;
        }

        var PhoneName = [];//定义一个存文件夹名字的数组

        (function iterator(i) {
            if (i == files.length) {
                //遍历结束时
                console.log(PhoneName);
                callback(null, PhoneName);
                return;
            }
            fs.stat('./uploads/' + files[i], function (err, stats) {
                if (err) {
                    callback('找不到文件' + files[i], null);
                    return;
                }
                if (stats.isDirectory()) {
                    PhoneName.push(files[i]);
                }
                iterator(i + 1);
            });
        })(0);


    })

}



exports.getAllphoto = function (photoName, callback) {

    fs.readdir('./uploads/' + photoName, function (err, files) {

        if (err) {
            callback('没有找到该uploads文件', null);
            return
        }

        var allPhoto = [];//所有图片数组。

        //遍历
        (function iterator(i) {

            if (i == files.length) {
                //遍历结束
                console.log(allPhoto);
                callback(null,allPhoto);
                return;
            }

            fs.stat("./uploads/" + photoName + "/" + files[i], function (err, stats) {
                if (err) {
                    callback("找不到文件" + files[i], null);
                    return;
                }
                if (stats.isFile()) {
                    allPhoto.push(files[i]);
                }
                iterator(i + 1);
            });

        })(0)


    })

}

