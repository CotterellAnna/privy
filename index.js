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

    let localServer = '127.0.0.1:5501';
    let current_href = window.location.href;
    let current_pathname = window.location.pathname;

    if(window.location.href.includes(localServer)) {
        window.location.href = window.location.href.replace(current_pathname, '/chatRoom.html');
    }else{
        window.location.href = window.location.href.replace(current_pathname, `${current_pathname}chatRoom.html`);
    }    
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