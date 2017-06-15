const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');
const fse = require('fs-extra');

const initUIServer = (app, options) => {

    app.get('/', (req, res, next) => {
        res.end('get it');
    });

    //upload
    const storage = multer.diskStorage({
        destination: function(req, file, cb){
            let dir = path.join(options.storage._files, options.config.storage, req.query.dir || '');
            fse.ensureDir(dir)
            .then(() => {
                cb(null, dir);
            })
            .catch(err => {
                cb(err);
            });
        },
        filename: function(req, file, cb){
            console.log(file);
            cb(null, file.originalname);
        }
    });

    const upload = multer({
        storage: storage
    }).single('file');

    app.post('/upload', (req, res, next) => {
        upload(req, res, (err) => {
            console.log(req.query);
            if(err){
                res.json({
                    code: -1
                });
            } else {
                res.json({
                    code: 0
                })
            }
        })
    });
}
module.exports = function(server, options) {
    /*
    * options包含一些自定义的头部字段名称及配置信息，后面单独统一讲
    * server是whistle传给插件的http.Server对象，
    * 开发者通过监听server的相关事件处理whistle转发过来的请求
    */
    server.on('request', app);
    initUIServer(app, options);
};