
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
    return menuPage
}

export default menu;