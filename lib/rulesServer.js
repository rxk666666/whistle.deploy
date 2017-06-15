const express = require('express');
const app = express();
const path = require('path');
module.exports = function(server, options) {
    /*
    * options包含一些自定义的头部字段名称及配置信息，后面单独统一讲
    * server是whistle传给插件的http.Server对象，
    * 开发者通过监听server的相关事件处理whistle转发过来的请求
    */
    console.log('----rule server----');
    server.on('request', app);
    app.use(function(req, res, next) {
        let rule = decodeURIComponent(req.headers[options.CUR_RULE_HEADER]);
        
        rule = rule.replace(/(^|\s)deploy:\/\//, '$1xfile://' + path.join(options.storage._files, options.config.storage + path.sep));
        res.end(rule);
	});
};