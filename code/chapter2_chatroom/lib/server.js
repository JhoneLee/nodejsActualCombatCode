/*
* @Author: liyunjiao
* @Date:   2018-03-28 16:00:07
* @Last Modified by:   liyunjiao
* @Last Modified time: 2018-03-28 16:12:25
*/

import utils from './utils';
import fs from 'fs';
const {sendFile,send404} = utils;
let cache = {};

/**
 * 创建一个静态服务器
 * @param {object} res response对象
 * @param {object} cache 内存缓存对象
 * @param {string} fPath 文件路径
 * @returns void
 */
function serverStatic(res,cache,fPath){
    // 检测缓存中是否有文件路径
    if(cache[fPath]){
        // 使用定义
        sendFile(res,fPath,cache[fPath]);
    } else {
        // 使用fs模块查询文件是否存在存储中
        fs.exists(fPath,(exists)=>{
            if(exists){
                fs.readFile(fPath,(err,data)=>{
                    if(err){
                        send404(res);
                    } else {
                        cache[fPath] = data;
                        sendFile(res,fPath,data);
                    }
                });
            } else {
                // 不存在触发404页面
                send404(res);
            }
        });
    }
}