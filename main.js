let text = document.querySelector('.textToAl')
let button = document.querySelector('.showText')

button.onclick = function(){
    alert(text.value)
}

let XAndY = document.querySelector('.XAndY')

function printMousePos(event) {
    XAndY.innerHTML =
      "X: " + event.clientX +
      " Y: " + event.clientY;
  }
  
  document.addEventListener("mousemove", printMousePos);


// let showBtn = document.createElement('button')
// showBtn.textContent = 'show'
// document.body.append(showBtn)
// let show = document.body.button

// object.onclick = function(){myScript};

let url = document.querySelector('.urlToPhoto')
let button2 = document.querySelector('.showPhoto')
let img = document.querySelector('.img')

button2.onclick = function(){
    img.src = url.value
}

let removeBtn = document.querySelector('.remove')
let list = [1,2,3,4,5]
console.log(list)
removeBtn.onclick =
function removeNumFromList(){
    list.pop()
    console.log(list)
}

function changeColor(color){
    document.body.style.backgroundColor = color
}

let black = document.querySelector('.black')
let green = document.querySelector('.green')
let blue = document.querySelector('.blue')
let red = document.querySelector('.red')

red.onclick = function(){
    changeColor(this.textContent)
}

green.onclick = function(){
    changeColor(this.textContent)
}

blue.onclick = function(){
    changeColor(this.textContent)
}

black.onclick = function(){
    changeColor(this.textContent)
    let h1 = document.querySelectorAll('.headers')
    h1.forEach(function(element){element.style.color = 'yellow'})
}

let colorsList = ['red', 'yellow', 'brown', 'green']
let colorDiv = document.querySelector('.discotec')

function randomColor(){
  let posOnArr = Math.floor(Math.random(4)*4)
  return colorsList[posOnArr]
}

function changeDiscotecColor(){
let color = randomColor()
console.log(color)
    colorDiv.style.backgroundColor = color
}

setInterval(changeDiscotecColor, 2000)