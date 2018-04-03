/*
* @Author: liyunjiao
* @Date:   2018-03-28 15:42:05
* @Last Modified by:   liyunjiao
* @Last Modified time: 2018-03-29 13:21:07
*/

import http from 'http';
import mime from 'mime'; // 2.0版本
import fs from 'fs';
import path from 'path';
import utils from './utils';
import serverObj from './server';
import socket from './socketChat';
// 创建一个静态服务器
let cache = {};
let __dirname = path.resolve('./code/chapter2_chatroom/lib');
let server = http.createServer((req,res)=>{
    let filePath = null;
    if(req.url == '/'){
        filePath = path.resolve(__dirname,'../public/index.html');
    } else {
        filePath = path.resolve(__dirname,'../public'+req.url);
    }
    serverObj.serverStatic(res,cache,filePath);
});
// socket监听
socket.listen(server);
// 启动服务器
server.listen(3033,()=>{
    console.log('server open');
})