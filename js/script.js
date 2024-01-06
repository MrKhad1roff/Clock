// let x = 0;
// let stop;
// function rec (){
//     console.log(x++)
// //    if(x <= 10){
// //       rec()
// //    }

//   stop =   setTimeout(() => {
//         rec();
//         if(x == 20){
//             clearInterval(stop)
//         }

//     }, 1000);
// }

// rec()

// function hello (){
//     console.log('hello')
// }

// setTimeout(hello,1000);



// let date = new Date();

// let day = new Date().getDay();

// let dayDate = new Date().getDate();

// let month = new Date().getMonth();

// let year = new Date().getFullYear()

// let hour = new Date().getHours();

// let minut = new Date().getMinutes();

// let sec = new Date().getSeconds();


// console.log(sec)



let hours = document.querySelector('.hours')
let minutes = document.querySelector('.minutes')

// minutes.innerHTML = new Date().getMinutes()

let h = document.querySelector('.h')
let m = document.querySelector('.m')
let s = document.querySelector('.s')


function clock () {
    let time = new Date();

    let hour = new Date().getHours();

    let minut = new Date().getMinutes();

    let sec = new Date().getSeconds();

    hours.innerText = hour;
    minutes.innerText = minut

    if(minut < 10){
        minutes.innerHTML = "0" + minut
    }else {
        minutes.innerHTML = minut
    }

    if(hour < 10){
        hours.innerHTML = "0" + hour
    }else {
        hours.innerHTML = hour
    }

    s.style.transform = `rotate(${sec * 6}deg)`
    m.style.transform = `rotate(${minut * 6}deg)`
    h.style.transform = `rotate(${hour * 30}deg)`

   setTimeout(() => {
    clock()
   }, 1000);
}

clock()


let tabsItem = [...document.querySelectorAll('.tabsItem')];
let tabsContentItem = [...document.querySelectorAll('.tabsContentItem')];
// 
// console.log(tabsItem)
// 
for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener('click',function() {
     for (let k = 0; k < tabsContentItem.length; k++) {
       tabsItem[k].classList.remove('active')
       tabsContentItem[k].classList.remove('active')
     }
     tabsItem[i].classList.add('active')
     tabsContentItem[i].classList.add('active')
    })
    
}




let stopWatchHours = document.querySelector('.stopwatch__hours')
let stopWatchMinutes = document.querySelector('.stopwatch__minutes')
let stopWatchSeconds = document.querySelector('.stopwatch__seconds')
let stopWatchBtn = document.querySelector('.stopwatch__btn')
let tabsLinkSpan = document.querySelector('.tabsLink__span')

let stop;


stopWatchBtn.addEventListener('click',function(){
    if(this.innerHTML === 'start'){
        this.innerHTML='stop'
        tabsLinkSpan.classList.add('active')
        startTimer()
    }else if (this.innerHTML === 'stop'){
        tabsLinkSpan.classList.remove('active')
        this.innerHTML= 'clear'
        tabsLinkSpan.classList.add('active_clear')
        clearInterval(stop)
    }else if (this.innerHTML === 'clear'){
        this.innerHTML = 'start'
        tabsLinkSpan.classList.remove('active_clear')

        stopWatchHours.innerHTML = 0
        stopWatchMinutes.innerHTML = 0
        stopWatchSeconds.innerHTML = 0
    }
})


function startTimer(){
    stopWatchSeconds.innerHTML++

    if(stopWatchSeconds.innerHTML > 59){
        stopWatchSeconds.innerHTML = 0
        stopWatchMinutes.innerHTML++

        if(stopWatchMinutes.innerHTML>59){
            stopWatchMinutes.innerHTML = 0
            stopWatchHours.innerHTML++
        }
    }


    stop = setTimeout(() => {
        startTimer()
    }, 1000);
}









