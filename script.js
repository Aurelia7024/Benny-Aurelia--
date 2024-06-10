document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('login').classList.add('hidden');
    document.getElementById('chat').classList.remove('hidden');
});

document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const messageInput = document.getElementById('messageInput');
    const messageList = document.getElementById('messageList');
    const newMessage = document.createElement('div');
    newMessage.textContent = messageInput.value;
    messageList.appendChild(newMessage);
    messageInput.value = '';
});