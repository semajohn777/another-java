//A1
// const BILL = 430;
// const TIP = BILL <= 300 && BILL >= 50? BILL * 0.15 : BILL *0.2;
// console.log(TIP); 

// console.log(`BILL was ${BILL} tip was ${TIP}, and total was ${BILL + TIP}`);


//document, Object ModeL
// document.body.style.backgroundColor = 'green';
// document.body.style.color = 'yellow';
// // document.getElementById('btn').style.color = 'red'
// let btn = document.getElementById('btn')
// btn.style.color = 'red'

//so let go into it property
//the process of reaching and selecting element is call qurrying the DOM(document object model), we have several ways of querrying the DOM
//getElementById('element')-- make sure d id matches
//we can assign to a variable or just go strainght using document.getElementById continuesy
//let do bacis tins, so we understand cox we will go into complex situations we would in turn need the basic things you've learnt


//lets select the <h1> tag
// document.getElementById('title').style.color = 'red'
// let title =document.getElementById('title')
// title.style.color = 'green'

//lets select d btn
// let btn = document.getElementById('btn')
// btn.style.backgroundColor = 'yellow'
// btn.style.color = 'brown'
// btn.style.fontSize = '60px'
// btn.style.padding = '2em'

// get element by tags name('tagName')
//HTML- collection = array-like Object
//index, length propreties, but not all array method can work(cant use for each)
const header = document.getElementsByTagName('h2');
header[0].style.color = 'blue';

const listItem = document.getElementsByTagName('li')
// listItem.style.color = 'grey'

let correction = [...listItem]
correction.forEach((items)=>{
    console.log(items);
    items.style.color = 'green'


})

//listItems.style.color = 'grey'
//getElementByName (;className')
//with class mate we can select multiple elements, we wud get a nodelist
// select the element or grp oof element u want
//Decide d effect u want 2d selection

// let itemListed = document.getElementsByClassName('special')
// console.log(itemListed);
// itemListed[2].style.color = 'violet'

// //our last tow metods (selector)
// //select the element of grp u want
// //Decicde d effect u want 2 apply to the selection


// //qurryselector('any css selector)-- select simgle element
// //qurryselectorAll('all the css selector)-- select all, forEach wud work here

// const anotherItem = document.querySelector('#Result')
// anotherItem.style.backgroundColor = 'red'

// const singleItems = document.querySelector('.special')
// singleItems.style.color = 'white'

// // const single = document.querySelectorAll('h1')
// // single[1].style.color = 'green'




// //querry sellector all('any css selector)
// const list = document.querySelectorAll('.special')
// list.forEach(function(item){
//     item.style.color = 'yellow'
// })

// //innerTexp
// let para = document.querySelector('p')
// para.innerText += ' today'
// console.log(para.innerText)
// para.style.color = 'red';

// //textContent
// let _header = document.querySelector('h5')

// console.log(_header.textContent);
// console.log(_header.innerText);
// //innerHTML
// let change = document.querySelector('.html')
// change.innerHTML = '<h1>we don finally change am</h1>'


// // changing attribute
// const link = document.querySelector('a')
// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.facebook.com')
// link.innerText = 'link to facebook'

// const first = document.getElementById('first')
// let second = document.getElementById('second')
// let third = document.getElementById('third')

// const classValue = second.className
// console.log(classValue);

// //classlist
// second.classList.add('colors')
// third.classList.add('colors')
// second.classList.remove('colors')

// //let cheq if am elment has a class sing contains
// let result = third.classList.contains('colors') 
// if(result){
//     console.log('hello world');
// }else{
//     console.log('donsnt have d class');
// }

// let talk = result ? 'hello world' : 'doesnt have d class'
// console.log(talk);

//Events
// select the element
//addEventListerner
//wht event, what to do
 const btn =document.querySelector('.btn')
 const heading = document.querySelector('h2')
 function changeColors(){
    let hasclass = heading.classList.contains('red')
    if(hasclass){
        heading.classList.remove('red')
 }else{
    heading.classList.add('red')
 }
 }


 btn.addEventListener('click', changeColors)
    