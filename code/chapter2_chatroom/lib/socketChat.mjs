
import socketio from 'socket.io';

let io = {};

let guestNumber = 1; // 用户连接参数

function listen(server){
    io = socketio(server);
    io.on('connection',(socket)=>{
        guestNumber = assignGuestName(); //注册加入连线的用户名

        joinRoom() //加入聊天室

        handleMessageBroadcasting(); // 处理用户广播信息指令

        handleNameChangeAttemptes(); // 处理更改用户名

        handleRoomJoining(); // 处理加入聊天室指令

        handleRoomCreating(); // 处理用户创建聊天室指令
        // 监听进入聊天室事件
        socket.on('rooms',(msg)=>{
            console.log(msg);
        });

        handleClientDisconnection(); // 处理用户离线
    });
} 