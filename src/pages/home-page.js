
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


    div.appendChild(textHeader);
    div.appendChild(text);
    div.appendChild(button);

    return div;

}

export default home;