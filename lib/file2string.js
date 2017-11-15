/**
 * Created by wuqingkai on 17/3/30.
 */
var pomelo  = require('pomelo');
var fs      = require('fs');
var path    = require('path');
var logger  = require('pomelo-logger').getLogger("pomelo");

var config  = '/config/file2string/config';  // 配置文件位置

var File2String = function() {
    this.fileString = {};
    var self = this;
    var fileDir = require(path.join(pomelo.app.getBase(), config))[pomelo.app.get('env')];
    var filePaths = path.join(pomelo.app.getBase(), fileDir);
    fs.readdirSync(filePaths).forEach(function(file) {
        var filePath = path.join(filePaths, file);
        var fileName = path.basename(filePath).split('.')[0];
        if (!fileName)
            return;
        self.fileString[fileName] = fs.readFileSync(filePath, {encoding:'utf-8'});
    });
};

File2String.prototype.getFileString = function(key) {
    return this.fileString[key];
};

module.exports = new File2String();