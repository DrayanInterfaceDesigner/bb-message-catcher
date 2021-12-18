
// Observer para plataforma de aulas "Blackboard", que deleta as mensagens
// dos usuários desejados (local only), basicamente uma ferramenta para bloquear
// pessoas, já que a plataforma não fornece.


// Por fazer:
//criar lista de pessoas que é mostrada toda vez :D
//lista com ADD ou DEL
//salvar todo esse código no localStorage
//rodar esse localStorage com eval();
//esse eval(local) é ativado ao clicar em ferramentas, e aparecerá como opção (ou onload por extension)
//botão sempre presente
//create list and permission


// Use eraserInit('SOME CHAT PERSON'S NAME')
// ===================================== THE MAIN FUNCTION IS eraserInit(string), do not call eraser! ==================================================

const target = document.getElementById('chat-channel-history'),
options = { childList: true, subtree: true };

// Turn on the log to see the erased messages
// If log's true, you will be able to see what was erased
let config = { active: true, log: false };


// Initializes the program
function eraserInit(name = '') {
    if(name == '') return undefined;
    name = name.toUpperCase()
    eraser(name)
    observer = new MutationObserver(()=> { eraser(name) })
    observer.observe(target, options)
    return name;
}

// erases the person's comment
function eraser(name) { 
    //message participant-name-container
    const part = document.querySelectorAll(".participant-name");
    //check status and run
    if(config.active) {
        part.forEach(span => {
            if(span.innerHTML.toUpperCase().startsWith(name)) {
                let parent = span.parentElement, message, table;
                // Find parent
                while(!parent.hasAttribute("bb-chat-message")) 
                { parent = parent.parentElement }
                //Console message if on
                if(config.log) {

                    message = findElByLoop(parent.querySelector(".activity-body"), 'child', 3);
                    time = findElByLoop(span, 'parent', 3).querySelector('.chat-message__time');
                    table = { name: span.innerHTML, msg: message.nodeValue, time: time.innerHTML}
                    console.table(table)
                }
                //Remove parent
                parent.remove();
            }
        })
    }
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



//SIMPLIFYED VERSION -- RECOMMENDED /////////////////////////////////////

// const target = document.getElementById('chat-channel-history'),
// options = { childList: true, subtree: true };

// function eraser(name) { 
//     const part = document.querySelectorAll(".participant-name");
//     part.forEach(span => {
//         if(span.innerHTML.startsWith(name)) {
//             let parent = span.parentElement
//             while(!parent.hasAttribute("bb-chat-message")) 
//             { parent = parent.parentElement }
//             parent.remove();
//         }
//     })
// }

// function eraserInit(name = '') {
//     if(name == '') return undefined;
//     eraser(name)
//     observer = new MutationObserver(()=> { eraser(name) })
//     observer.observe(target, options)
// }



//   NON-COMMENTED VERSION
// const target = document.getElementById('chat-channel-history'),
// options = { childList: true, subtree: true };
// let config = { active: true, log: false };

// function eraser(name) {
//     const part = document.querySelectorAll(".participant-name");
//     if(config.active) {
//         part.forEach(span => {
//             if(span.innerHTML.toUpperCase().startsWith(name)) {
//                 let parent = span.parentElement, message, table;
//                 while(!parent.hasAttribute("bb-chat-message")) 
//                 { parent = parent.parentElement }
//                 if(config.log) {

//                     message = findElByLoop(parent.querySelector(".activity-body"), 'child', 3);
//                     time = findElByLoop(span, 'parent', 3).querySelector('.chat-message__time');
//                     table = { name: span.innerHTML, msg: message.nodeValue, time: time.innerHTML}
//                     console.table(table)
//                 }
//                 parent.remove();
//             }
//         })
//     }
// }

// function eraserInit(name = '') {
//     if(name == '') return undefined;
//     name = name.toUpperCase()
//     eraser(name)
//     observer = new MutationObserver(()=> { eraser(name) })
//     observer.observe(target, options)
//     return name;
// }

// function findElByLoop (element, hierarchy = 'parent', interations = 1) {
//     let result = element;
//     if(hierarchy == 'parent') for(let x = interations; x >= 0; x--) 
//     { result = result.parentElement }
//     if(hierarchy == 'child') for(let x = 0; x <= interations; x++) 
//     { result = result.lastChild }
//     return result;
// }