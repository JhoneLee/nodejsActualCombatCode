/*
* @Author: liyunjiao
* @Date:   2018-03-28 15:42:05
* @Last Modified by:   liyunjiao
* @Last Modified time: 2018-03-28 15:51:13
*/

import http from 'http';
import mime from 'mime';
import fs from 'fs';
import path from 'path';

// 404 页面处理
function send404(res){
    res.writeHead(404,{
        'Content-Type':'text/plain'
    });
    res.write('404 page');
    res.end();
}

// 文件数据服务函数
function sendFile(res,fpath,fcontent){
    res.writeHead(200,{
        'Content-Type':mime.lookup(path.basename(fpath))
    });
    res.end(fcontent);
}