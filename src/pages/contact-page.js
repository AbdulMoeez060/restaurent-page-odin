

function about(){
    var div = document.createElement('div');
    div.classList.add('about')

    var textHeader = document.createElement('h2');
    textHeader.textContent = 'Odins Inn';
    textHeader.classList.add('main-text');
    var text = document.createElement('p');
    text.textContent = "From Odin's Shaggy Beard to Freya's saggy *** and Thor's Hammer, You can find anything you desir.";
    text.classList.add('text');


    div.appendChild(textHeader);
    div.appendChild(text);

    return div;
    
}

function hideAbout(){
    var about = document.querySelector('.about');
    about.classList.remove('active');
}
function showAbout(){
    var about = document.querySelector('.about');
    about.classList.add('active');
}

export {about,showAbout,hideAbout}