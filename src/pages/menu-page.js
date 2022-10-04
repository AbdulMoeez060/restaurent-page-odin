
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
        
        let category = document.createElement('h3');
        category.classList.add('category');
        category.textContent = menuItems[i].category;


        for (let j = 0; j <  menuItems[i].items.length; j++) {
            
            let name =  document.createElement('h4');
            name.textContent = menuItems[i].items[j].name;
            name.classList.add('item-name');

            let des = document.createElement('p');
            des.textContent = menuItems[i].items[j].desc;
            des.classList.add('item-desc');


            let price = document.createElement('p');
            price.textContent = menuItems[i].items[j].price;
            price.classList.add('item-price');

            category.appendChild(name);
            category.appendChild(des);
            category.appendChild(price);

        }

        menuPage.appendChild(category);
        
    }



    return menuPage
}

export default menu;