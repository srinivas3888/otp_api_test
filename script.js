// import { io } from 'socket.io-client';

const socket = io('http://localhost:3000/');

const msgs = document.getElementById('msgs');
const form = document.getElementById('form');

socket.on('connect', (soc)=>{
    const p = document.createElement('h3');
    p.innerText = `Joined with id: ${soc.id}`;
    msgs.appendChild(p);
})

socket.on('msg', (msg)=>{
    const p = document.createElement('p');
    p.innerText = msg;
    msgs.appendChild(p);
})

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const p = document.createElement('p');
    p.innerText = form.value;
    msgs.appendChild(p);

    const f={
        "msg":form.value
        };
    
    socket.emit('msg', JSON.Stringify(f));
})
