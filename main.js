let chat = document.querySelector('.chat');
let myForm = document.querySelector('#form');
let Message = document.getElementById('message');
let chatroomName = document.getElementById('chatroomName');
let userName = document.getElementById('userName');
let settingsIcon = document.getElementById('settingsIcon');
let chatroomSettings = document.getElementById('chatroom');
let displayPicture = document.getElementById('display_pictureText');
let user = JSON.parse(localStorage.getItem('user'));
let chatroom_Main = document.querySelector('.chatRoom__Main');
let deleteChatBtn = document.querySelectorAll('.delete_chat');



chat.scrollTo(0, chat.scrollHeight);

chatroomName.innerText = user.Roomname;
let dp = user.Roomname.split('');
displayPicture.innerText = dp[0];
// Adding name + typing to the header
Message.setAttribute('oninput', 'typing()');
function typing() {
    userName.innerText = user.username + ' is typing...';
}



//adding text to the chat section
myForm.addEventListener('submit', function (e) {
    e.preventDefault();
    //getting time the chat i sbeing sent in real-time
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let ampm;
    if (hour <= 12) {
        ampm = 'AM';
    } else {
        ampm = 'PM';
        hour = hour - 12;
    }
    let time = hour.toString() + ':' + minute.toString() + ampm;
    let newMessage = `
    <div class="chatBox sender">
        <p>
            ${Message.value}
            <span>
                ${time}
             </span>
        </p>
        <i class="ri-delete-bin-5-line delete_chat"></i>
    </div>
    `


    if (Message.value !== '') {
        chat.innerHTML += newMessage;
        Message.value = '';
        chat.scrollTo(0, chat.scrollHeight);
        //resetting the header to null when the chat has been added
        userName.innerText = '';
        //deleting chats at interval when it's on
        delete_();
        hidechat_();
        deleteChatBtn = document.querySelectorAll('.delete_chat');
        deleteChatBtn.forEach(e => {
            e.setAttribute('onclick', 'deleteChat(this)')
        })
    }
    console.log(deleteChatBtn)

})
// to open and close the settings tab
settingsIcon.addEventListener('click', openSettings);
function openSettings(e) {
    e.preventDefault();
    if (chatroomSettings.style.display == 'none') {
        chatroomSettings.style.display = 'flex';
    } else {
        chatroomSettings.style.display = 'none';
    }
    // settingsIcon.removeEventListener('click', openSettings);
}

//media query

if (window.innerWidth <= 600) {
    settingsIcon.addEventListener('click', openSettings_);
}
function openSettings_() {
    if (chatroomSettings.style.display = 'none') {
        console.log('hey')
        chatroom_Main.style.display = 'none';
        chatroomSettings.style.display = 'flex';
    } else {
        chatroom_Main.style.display = 'flex';
    }
}

//declaring settings variables
let hideChat = document.getElementById('hideChat');
let deleteAll = document.getElementById('deleteAll');
let deleteInterval = document.getElementById('deleteInterval');

//function to hide the chat
hideChat.setAttribute('onchange', 'hidechat_()');
function hidechat_() {
    let senderChat = document.querySelectorAll('.sender');

    if (hideChat.checked == true) {
        senderChat.forEach(e => {
            e.style.display = 'none'
        })
    } else {
        senderChat.forEach(e => {
            e.style.display = 'flex'
        })
    }
}

//function to delete all chats
deleteAll.setAttribute('onchange', 'deleteAll_()');
function deleteAll_() {
    let chats = document.querySelectorAll('.chatBox');
    if (deleteAll.checked == true) {
        chats.forEach(e => {
            e.remove();
        })
        setTimeout((e => {
            deleteAll.checked = false;
        }), 500)
    }
}

//declaring interval variables
let seconds = document.getElementById('seconds_value');
seconds.innerText = 0;
let add = document.getElementById('add');
let reduce = document.getElementById('reduce');

// function to delete chats at an interval
deleteInterval.setAttribute('onchange', 'delete_()');
function delete_() {

    if (deleteInterval.checked == true && seconds.innerText > 0) {
        let chats = document.querySelectorAll('.chatBox');
        setTimeout((e => {
            chats.forEach(e => {
                e.remove();
            })
        }), (seconds.innerText * 1000))
    } else if (seconds.innerText == 0) {
        deleteInterval.checked = false;
    }
}

// increase and reduce interval
add.setAttribute('onclick', 'add_()');
reduce.setAttribute('onclick', 'reduce_()');

//function to increase the interval
function add_() {
    seconds.innerText++
}

//function to decrease interval
function reduce_() {
    if (seconds.innerText == 0) {

    }
    else {
        seconds.innerText--
    }
}


let close = document.querySelector('.close');
let close_ = document.getElementById('close')

close_.setAttribute('onclick', '_close()');

function _close() {
    chatroomSettings.style.display = 'none';
    chatroom_Main.style.display = 'flex';
}


// delete chat button
deleteChatBtn = document.querySelectorAll('.delete_chat');
deleteChatBtn.forEach(e => {
    e.setAttribute('onclick', 'deleteChat(this)')
})
function deleteChat(e) {
    e.parentElement.remove(e);

}