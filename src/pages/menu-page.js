
const menuItems = [
    {
        category: 'Pizza',
        items:[
            {
                name: 'Chicken Tikka',
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                price : "25$"
            },
            {
                name: 'Bihari Kebab',
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                price : "25$"
            },
            {
                name: 'Chicken Fajita',
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                price : "25$"
            },
            {
                name: 'Pepporoni',
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                price : "25$"
            },
            {
                name: 'Tex-Mex',
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                price : "25$"
            },
            {
                name: 'Odin Special',
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                price : "25$"
            },
        ]
    },
    {
        category: 'Burgers',
        items: [
            {
                name: 'Cheesy Chicken',
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                price : "25$"
            },
            {
                name: 'Beast Burger',
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                price : "25$"
            },
            {
                name: 'Daddy of All Burgers',
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                price : "25$"
            },
            {
                name: 'Odins Special',
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                price : "25$"
            },
        ]
    },
    {
        category :'Drinks',
        items:[
            {
                name: 'Coke',
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                price : "25$"
            },
            {
                name: 'Sprite',
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                price : "25$"
            },
            {
                name: 'Fanta',
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                price : "25$"
            },
        ]
    }
]


function menu(){
    var menuPage = document.createElement('div');
    menuPage.classList.add('menu')

    for (let i = 0; i < menuItems.length; i++) {
        
        let category = document.createElement('div');
        category.classList.add('category');
        let text = document.createElement('h2');
        text.textContent = menuItems[i].category;
        category.appendChild(text);


        for (let j = 0; j <  menuItems[i].items.length; j++) {

            let item = document.createElement('div');
            item.classList.add('item');
            
            let name =  document.createElement('h4');
            name.textContent = menuItems[i].items[j].name;
            name.classList.add('item-name');

            let des = document.createElement('p');
            des.textContent = menuItems[i].items[j].desc;
            des.classList.add('item-desc');


            let price = document.createElement('p');
            price.textContent = menuItems[i].items[j].price;
            price.classList.add('item-price');

            item.appendChild(name);
            item.appendChild(des);
            item.appendChild(price);
            category.appendChild(item)

        }

        menuPage.appendChild(category);
        
    }



    return menuPage
}

function hideMenu(){
    var menu = document.querySelector('.menu');
    menu.classList.remove('active');
}
function showMenu(){
    var menu = document.querySelector('.menu');
    menu.classList.add('active');
}

export {menu,showMenu,hideMenu};