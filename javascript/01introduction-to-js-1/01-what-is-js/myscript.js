
function alertMessage(){
    let ele = document.createElement('p');
    ele.textContent = '你电击了这个按钮';
    document.body.appendChild(ele);
}

const buttons = document.querySelectorAll('button')
for(let i = 0; i<buttons.length; i++){
    buttons[i].addEventListener('click', alertMessage);
}