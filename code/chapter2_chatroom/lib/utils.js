/*
* @Author: liyunjiao
* @Date:   2018-03-28 15:57:36
* @Last Modified by:   liyunjiao
* @Last Modified time: 2018-03-28 16:09:09
*/

import http from 'http';
import mime from 'mime'; // 2.0版本
import fs from 'fs';
import path from 'path';

/* 
    mime 2.0变化：https://www.npmjs.com/package/mime
    1.查看类型 lookup 变为 getType
    2.extension 变为 getExtension
    3.移除了 charset 和 load 方法
*/



/**
 * 404 页面处理
 * @param {object} res response对象
 * @returns void
 */
export function send404(res){
    res.writeHead(404,{
        'Content-Type':'text/plain'
    });
    res.write('404 page');
    res.end();
}


/**
 * 根据文件类型发送文件
 * @param {object} res response对象
 * @param {string} fPath 文件路径
 * @param {object} fcontent 文件数据流
 * @returns void
 */
export function sendFile(res,fpath,fcontent){
    res.writeHead(200,{
        'Content-Type':mime.getType(path.basename(fpath))
    });
    res.end(fcontent);
}

export default {
    send404,
    sendFile
}