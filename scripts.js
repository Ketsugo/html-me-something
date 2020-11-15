let homeButton = document.getElementById('home-button');
let page1Button = document.getElementById('page-1-button');
let page2Button = document.getElementById('page-2-button');
let page3Button = document.getElementById('page-3-button');
let page4Button = document.getElementById('page-4-button');

let terminalContainer = document.getElementById('main-terminal');

let homeContent = document.getElementById('landing');
let page1Content = document.getElementById('content-page-1');
let page2Content = document.getElementById('content-page-2');
let page3Content = document.getElementById('content-page-3');
let page4Content = document.getElementById('content-page-4');

function changeContent(button) {
    if(button === homeButton){
        terminalContainer.innerHTML = homeContent.innerHTML;
    }
    else if(button === page1Button){
        terminalContainer.innerHTML = page1Content.innerHTML;
    }
    else if(button === page2Button){
        terminalContainer.innerHTML = page2Content.innerHTML;
    }
    else if(button === page3Button){
        terminalContainer.innerHTML = page3Content.innerHTML;
    }
    else if(button === page4Button){
        terminalContainer.innerHTML = page4Content.innerHTML;
    }
}

window.addEventListener("load", function(){
    terminalContainer.innerHTML = homeContent.innerHTML;
});

homeButton.addEventListener('click', () => changeContent(homeButton));
page1Button.addEventListener('click',  () => changeContent(page1Button));
page2Button.addEventListener('click',  () => changeContent(page2Button));
page3Button.addEventListener('click',  () => changeContent(page3Button));
page4Button.addEventListener('click',  () => changeContent(page4Button));