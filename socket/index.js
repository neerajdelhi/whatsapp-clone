import { Server } from "socket.io";
import user from "../server/model/User";

const io = new Server(2000,{
    cors:{
        origin: "http://localhost:3000"
    }
});

let users = [];
const addUser = (userData, socketId) => {
    !users.some(user => user.sub == userData.sub ) && users.push({ ...userData, socketId })
}

const getUsers = (userId) => {
    return user.find(user => user.sub === userId );
}

io.on('connection', (socket) => {
    console.log('user connected');

    socket.on('addusers',userData => {
        addUser(userData, socket.io);
        io.emit('getUsers', users);
    });

    socket.on('sendMessage', data => {
        const user = getUsers(data.receiverId);
        io.to(user.socketId).emit('getMessage',data);
    })
});