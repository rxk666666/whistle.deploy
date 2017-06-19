const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');
const fse = require('fs-extra');
const serveStatic = require('serve-static');
const dirTree = require('directory-tree');

const getFileObj = (filePath) => {
    let obj = Object.create(null);
    filePathArr = filePath.split(path.sep);
    let ret;
    if(filePathArr.length == 1){
        return filePath;
    }else{
        let key = filePathArr.splice(0, 1);
        obj[key] = getFileObj(filePathArr.join(path.sep))
        return obj;
    }

}

const resetPath = (tree, pathDir) => {
    tree.path = path.relative(pathDir, tree.path);
    tree.children && tree.children.forEach((item) => {
        resetPath(item, pathDir)
    });
    return tree;
}

const initUIServer = (app, options) => {

    app.use(serveStatic(path.join(__dirname, '../public')));
    // app.get('/', (req, res, next) => {
    //     res.end('get it');
    // });

    //upload
    const storage = multer.diskStorage({
        destination: function(req, file, cb){
            let dir = path.join(options.storage._files, options.config.storage, (req.query.dir && req.query.dir.replace(/\\/g, path.sep)) || '');
            fse.ensureDir(dir)
            .then(() => {
                cb(null, dir);
            })
            .catch(err => {
                cb(err);
            });
        },
        filename: function(req, file, cb){
            cb(null, file.originalname);
        }
    });

    const upload = multer({
        storage: storage
    }).single('file');

    app.post('/upload', (req, res, next) => {
        upload(req, res, (err) => {
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

    app.get('/cgi-bin/getFiles', (req, res, next) => {
        let dir = path.join(options.storage._files, options.config.storage);

        try{
            let tree = resetPath(dirTree(dir), dir);
            res.json({
                files: tree,
                code: 0
            });
        }catch(e){
            res.json({
                code: -1
            })
        }
        //next();
    });

    app.get('/cgi-bin/getFile', (req, res, next) => {
        let dir = path.join(options.storage._files, options.config.storage);
        fse.readFile(path.join(dir, req.query.filepath), (err, data) => {
            res.json({
                code: 0,
                raw: data.toString('utf8')
            });
        });
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