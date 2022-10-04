import './styles/main.css';
import {home,hideHome,showHome} from './pages/home-page';
import {menu,showMenu,hideMenu} from './pages/menu-page';
import { about,showAbout,hideAbout } from './pages/contact-page';

const website = (()=>{
    var content = document.querySelector('.content');

    function addNav(){

        var nav = document.createElement('div');
        nav.classList.add('nav');
        var logo = document.createElement('p');
        logo.classList.add('logo')
        logo.classList.add('HomeButton')

        logo.textContent = "Odin's Inn"

        var list = document.createElement('ul');
        var links = ['Home','Menu','About']
        

        for (let i = 0; i < 3; i++) {
            let line = document.createElement('li');
            let button =  document.createElement('button');
            button.classList.add(`${links[i]}Button`)
            let text = document.createTextNode(links[i]);
            button.appendChild(text);
            line.appendChild(button);
            list.appendChild(line);
        }
        
        


        nav.appendChild(logo);
        nav.appendChild(list);

        content.appendChild(nav);
        
    }
    function addEvents(){
        var homeButton = document.querySelectorAll('.HomeButton');

        var menuButton = document.querySelectorAll('.MenuButton');
        var aboutButton = document.querySelector('.AboutButton');
        homeButton[1].classList.add('activate')
        
        homeButton.forEach(button => button.addEventListener('click',manageTabs));
        menuButton.forEach(button => button.addEventListener('click',manageTabs));
        aboutButton.addEventListener('click',manageTabs);

        
    
    }

    function initializeWebsite(){

        addNav()
        content.appendChild(about());
        content.appendChild(menu());
        content.appendChild(home());
        showHome();
        addEvents();
    }

    initializeWebsite();

    function manageTabs(e){
        hideAbout()
        hideHome()
        hideMenu();

        if(e.target.classList.contains('HomeButton')){
            var homeButton = document.querySelectorAll('.HomeButton');
            homeButton[1].classList.add('activate');
            showHome();
        }
        else if(e.target.classList.contains('MenuButton')){
            var menuButton = document.querySelectorAll('.MenuButton');
            menuButton[0].classList.add('activate');
            showMenu();
        }
        else if(e.target.classList.contains('AboutButton')){
            showAbout();
            e.target.classList.add('activate');
        }
    }
    
   
})();
