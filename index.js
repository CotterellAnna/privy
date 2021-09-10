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

    let current_href = window.location.href;
    let current_pathname = window.location.pathname;

    if(current_pathname[current_pathname.length - 1] == '/')
    current_pathname = current_pathname.replace(current_pathname.length - 1, '');

    window.location.href = window.location.href.replace(current_href, `${current_pathname}/chatRoom.html`);
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