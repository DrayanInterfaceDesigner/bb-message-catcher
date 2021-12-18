const target = document.getElementById('chat-channel-history'),
options = { childList: true, subtree: true },
message = require('./catchMessage.js'),
writeMessage = require('./writeMessage.js'),
file = './history.json'

// Initializes the program
function observeChat(file, message) {
    observer = new MutationObserver(()=> { writeMessage(file, message) })
    observer.observe(target, options)
}

observeChat(file, message.catchMessage())