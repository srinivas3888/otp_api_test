// import { io } from 'socket.io-client';

const socket = io('http://localhost:3000/');

const msgs = document.getElementById('msgs');
const form = document.getElementById('form');

socket.on('connect', (soc)=>{
    let p = document.createElement('h3');
    p.innerText = `Joined with id: ${soc.id}`;
    msgs.appendChild(p);
})

socket.on('msg', (msg)=>{
    let p = document.createElement('p');
    msg=msg.json();
    p.innerText = msg.msg;
    msgs.appendChild(p);
})

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let formData = {
        "msg":form.value
    };
    formData = JSON.stringify(formData);
    let p = document.createElement('p');
    p.innerText = form.value;
    msgs.appendChild(p);
    
    socket.emit('msg', formData);
})
