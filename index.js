let roomName = document.getElementById('roomName');
let chatName = document.getElementById('chatName');
let namesForm = document.getElementById('name_roomName');


namesForm.addEventListener('submit', saveNames);
function saveNames(e){
    e.preventDefault();
    let data = {}
    data.Roomname = roomName.value;
    data.username = chatName.value;

    data = JSON.stringify(data);

    localStorage.setItem('user', data);

    window.location.href = window.location.hostname + '/privy/chatRoom.html';
}

let register = document.getElementsByClassName('register');
console.log(register)
let splash = document.getElementById('splash');
    
setTimeout(show_splash, 2000)

function show_splash(){
    splash.style.display='none';
    register[0].style.display='flex';
    register[1].style.display='flex';
}