class Screen {
    constructor(startPoint,DOMid,isWhite=false){
        
        this.start = startPoint;
        this.src = document.getElementById(DOMid);
        this.isWhite = isWhite;
        this.run = ()=>{
            this.src.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
            });
        }
    }
}

class AnchorBar {
    constructor(){
        this.src = document.querySelector('.nav-scroll');
        this.colorClass = 'nav-scroll--black';
        this.changeColor = (isWhite) =>{

            let isBlack = this.src.classList.contains(this.colorClass);

            if(!isWhite){
                if(isBlack){
                    this.chahgeWhite();
                }   
            } else {
                if(!isBlack){
                    this.changeBlack();
                }  
            }

        }
        
        this.changeBlack = ()=>{
            this.src.classList.add(this.colorClass);
        };

        this.chahgeWhite = () =>{
            this.src.classList.remove(this.colorClass);
        };
    }
}

class Anchor {
    constructor(number,className) {
        this.number = number;
        this.src = document.querySelectorAll('.' + className)[number];
        this.src.addEventListener('click',()=>{
            Screens[this.number].run();
            this.activeElem(Screens[this.number].isWhite);
        })

        this.activeClass = 'nav-scroll__item--active';
        this.activeElem = (NavBarColor = true,)=>{
            for(let i = 0; i < Ancors.length; i++){
                if(i == this.number){
                    Ancors[i].src.classList.add(this.activeClass);
                } else {
                    Ancors[i].src.classList.remove(this.activeClass);
                }    
            }
            NavBar.changeColor(NavBarColor);
            // MainHeader.changeColor(!changeColor)
        };

    }
}
class Header {
    constructor(){
        this.src = document.querySelector('.header');

        this.colorClass = 'header--white';
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        this.changeColor = (isWhite) =>{

            let isBlack = this.src.classList.contains(this.colorClass);

            if(!isWhite){
                if(isBlack){
                    this.chahgeWhite();
                }   
            } else {
                if(!isBlack){
                    this.changeBlack();
                }  
            }

        }
        
        this.changeBlack = ()=>{
            this.src.classList.add(this.colorClass);
        };

        this.chahgeWhite = () =>{
            this.src.classList.remove(this.colorClass);
        };

    }
}

const NavBar = new AnchorBar;
const MainHeader = new Header;


const scrollItems = document.querySelectorAll('.nav-scroll__item');
const scrollScreen = [
    {'startPoint': 0  , 'DOMid':'screen--1',},
    {'startPoint': 100, 'DOMid':'screen--2','isWhite':true},
    {'startPoint': 145, 'DOMid':'screen--3',},
    {'startPoint': 225, 'DOMid':'screen--4','isWhite':true},
];
const Screens = new Array;
const Ancors = new Array;

for(let i = 0; i < scrollScreen.length; i++){
    let start = scrollScreen[i]['startPoint'];
    let id = scrollScreen[i]['DOMid'];
    let color = scrollScreen[i]['isWhite']
    Screens[i] = new Screen(start, id, color)
}


for(let i = 0; i < scrollItems.length; i++){
    Ancors[i] = new Anchor(i,'nav-scroll__item');
    
}









// const screens = [
//     {start:0,},
//     {start:100},
//     {start:145},
//     {start:225}
// ]

    
    // screen2.scrollIntoView({
    //     behavior: "smooth",
    //     block: "center"
    // })





