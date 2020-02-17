
class Ring {
    constructor(selector,){

        this.step = 0.1;
        this.time = 100;
        this.maxSize = 30;
        this.minSize = 5;
        this.hideClass = 'intro__ring--hide'

        this.src = document.querySelector(selector);

        this.checkRadius = ()=>{
            return parseFloat(this.src.getAttribute('r'));
        };

        this.fadeOut = ()=>{
            this.src.classList.add(this.hideClass)
        }

        this.fadeIn = ()=>{
            this.src.classList.remove(this.hideClass)
        }

        this.fadeStatus = ()=>{
            
        }

        this.setRadius = (value)=>{
            this.src.setAttribute('r', (value) + '%')
        };
        this.sizeUp = (value)=>{
            let currentRadius = this.checkRadius();
            this.src.setAttribute('r', (currentRadius + value) + '%')
        };
        this.interval = (func, time)=>{
            setInterval(func, time)
        };
    }
}

const Ring1 = new Ring('.intro__ring__1');
const Ring2 = new Ring('.intro__ring__2');
const Ring3 = new Ring('.intro__ring__3');
const Ring4 = new Ring('.intro__ring__4');


let interval1 = setInterval(()=>{

    checkRingAnimation(Ring1, 6, 20, 13, 15, 0.096)
    
    
    
    checkRingAnimation(Ring2, 6, 50, 13, 45, 0.078)
    

    checkRingAnimation(Ring3, 6, 70, 13, 65, 0.037)

    checkRingAnimation(Ring4, 6, 100, 13, 95, 0.02)

},40)


function checkRingAnimation ( Ring, startSize, endSize, fadeIn=10, fadeOut=90, step=0.1){
    
    if(Ring.checkRadius() <= fadeIn){
        Ring.fadeIn()
    }

    Ring.sizeUp(step)

    if(Ring.checkRadius() >= fadeOut){
        Ring.fadeOut()
    }

    if(Ring.checkRadius() >= endSize){
        Ring.setRadius(startSize);
    }
}







 