const anchor = document.getElementById('btn')
const screen2 = document.getElementById('screen2')


anchor.addEventListener('click',()=>{

    
    screen2.scrollIntoView({
        behavior: "smooth",
        block: "center"
    })
})




