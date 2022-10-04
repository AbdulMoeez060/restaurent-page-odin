

const home = ()=>{
    var div = document.createElement('div');
    div.classList.add('home');
    var textHeader = document.createElement('h2');
    textHeader.textContent = 'delicious mythical food';
    textHeader.classList.add('main-text');
    var text = document.createElement('p');
    text.textContent = 'MAKING DELICIOUS NORDIC FOOD SINCE VIKING AGE';
    text.classList.add('text');

    var button = document.createElement('button');
    button.textContent = 'See Menu'
    button.classList.add('MenuButton');


    div.appendChild(textHeader);
    div.appendChild(text);
    div.appendChild(button);

    return div;

}

function hideHome(){
    var home = document.querySelector('.home');
    var homeButton = document.querySelectorAll('.HomeButton');
    homeButton[1].classList.remove('activate');
    home.classList.remove('active');
}
function showHome(){
    var home = document.querySelector('.home');
    
    home.classList.add('active');
}



export {home,hideHome,showHome};