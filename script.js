let header = document.querySelector('h1');
let dec = document.querySelector('.dec')
let res = document.querySelector('.res')
let inc = document.querySelector('.inc')

//decrase
// function decrease () {
//     header.textContent--

// }
// dec.addEventListener('click', decrease)
// -----or
dec.addEventListener('click', function decrease(){
    header.textContent--
    document.body.style.backgroundColor = 'yellow'
})
let bgr = document.body

inc.addEventListener('click', function increase(){
    header.textContent++
    if(header.textContent > 0){
        bgr.style.backgroundColor = 'red'
    }
    // document.body.style.backgroundColor = 'green'
})
// let increase = () => {
    //     header.textContent *2
    
    // }
    // inc.addEventListener('click', increase)
    
    let reset = () => {
        header.textContent = 0;
        document.body.style.backgroundColor = 'red'
}
res.addEventListener('click', reset)