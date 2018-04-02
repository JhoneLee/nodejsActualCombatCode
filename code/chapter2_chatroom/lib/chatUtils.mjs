
/**
 * 管理用户名
 * @param {object} socket socket对象
 * @param {number} guestNumber 连接用户数
 * @param {object} nickNames 用户昵称表
 * @param {array} nameUsed 注册昵称列表
 * @returns {number} guestNumber
 */
function assignGuestName(socket,guestNumber,nickNames,nameUsed){
    let name = `guest${guestNumber}`; // 分配默认用户名
    console.log(socket.id); 
    nickNames[socket.id] = name; // 存储昵称表
    socket.emit('nameResult',{
        success:true,
        name
    }) // 触发 nameResult事件
    nameUsed.push(name);
    return guestNumber+1;
}



export default {
    assignGuestName
}