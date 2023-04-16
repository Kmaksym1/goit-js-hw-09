function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

  
const startEl = document.querySelector('#start')
const stopEl = document.querySelector('#stop')
startEl.addEventListener('click', onClickStart)
stopEl.addEventListener('click', onClickStop)

let background = null
function onClickStart(){
    background = setInterval(()=>{
    document.body.style.backgroundColor = getRandomHexColor()
},1000)
startEl.style.backgroundColor = 'rgba(200, 200, 198, 0.731)'
stopEl.style.backgroundColor = null
}

function onClickStop (){
    clearInterval(background)
    startEl.style.backgroundColor = null
    stopEl.style.backgroundColor = 'rgba(200, 200, 198, 0.731)'
}
