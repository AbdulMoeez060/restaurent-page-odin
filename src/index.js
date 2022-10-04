import './styles/main.css';
import {home,hideHome,showHome} from './pages/home-page';

const website = (()=>{
    var content = document.querySelector('.content');

    function addNav(){

        var nav = document.createElement('div');
        nav.classList.add('nav');
        var logo = document.createElement('p');
        logo.classList.add('logo')
        logo.textContent = "Odin's Inn"

        var list = document.createElement('ul');
        var links = ['Home','Menu','About']
        

        for (let i = 0; i < 3; i++) {
            let line = document.createElement('li');
            let button =  document.createElement('button');
            button.classList.add(links[i])
            let text = document.createTextNode(links[i]);
            button.appendChild(text);
            line.appendChild(button);
            list.appendChild(line);
        }
        
        


        nav.appendChild(logo);
        nav.appendChild(list);

        content.appendChild(nav);
        
    }

    function initializeWebsite(){

        addNav()
    
        content.appendChild(home());

        showHome();
    }

    initializeWebsite();

    

})();