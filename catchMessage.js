const README = "WORK IN PROGRESS"

console.log("Hi, i'm working!")



function catchMessage() { 
    //message participant-name-container
    const part = document.querySelectorAll(".participant-name");
    let message;
    //check status and run
    part.forEach(span => {
        if(span.innerHTML.toUpperCase().startsWith(name)) {
            let parent = span.parentElement, text;
            // Find parent
            while(!parent.hasAttribute("bb-chat-message")) 
            { parent = parent.parentElement }

            text = findElByLoop(parent.querySelector(".activity-body"), 'child', 3);
            time = findElByLoop(span, 'parent', 3).querySelector('.chat-message__time');
            message = { name: span.innerHTML, msg: text.nodeValue, time: time.innerHTML}

            console.log(message)
        }
    })
    return message;
}



// Look up or down at the DOM by hierarchy to find
// some specific parent or child starting from a
// given element
function findElByLoop (element, hierarchy = 'parent', interations = 1) {
    let result = element;
    if(hierarchy == 'parent') for(let x = interations; x >= 0; x--) 
    { result = result.parentElement }
    if(hierarchy == 'child') for(let x = 0; x <= interations; x++) 
    { result = result.lastChild }
    return result;
}


module.exports = catchMessage