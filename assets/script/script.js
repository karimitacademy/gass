const inp = document.querySelector('.guess__inp')
const btn = document.querySelector('.guess__btn')
const previous = document.querySelector('.guess__previous')
const answer = document.querySelector('.guess__answer')
const restartBtn = document.querySelector('.guess__restart')

let attempt = 5

const randomNumber = Math.round(Math.random() * 100)
console.log(randomNumber)

btn.addEventListener('click', () => {
  if (attempt) {
    if (randomNumber === +inp.value) {
      answer.innerText = 'Вы победили!'
      restartBtn.style.display = 'block'
      btn.disabled = true
    } else if (randomNumber > +inp.value) {
      answer.innerText = 'Загаданное число больше'
    } else {
      answer.innerText = 'Загаданное число меньше'
    }
    previous.innerText += ` ${inp.value} `
    attempt--
  } else {
    answer.innerText = `Game over! Загаданное число - ${randomNumber}`
    restartBtn.style.display = 'block'
    restartBtn.style.color = 'while'
    btn.disabled = true
  }
})

restartBtn.addEventListener('click', () => {
  window.location.reload();
})

const h1 = document.querySelector('h1')

const color = ['red', 'blue', 'green']
let i = 1

setInterval(() => {
  h1.style.backgroundColor = color[i++]
  if (i === 3) {
  i = 0
  }
}, 500)









// const a = '5'
// console.log(typeof +a)
// console.log(typeof Number (a))
// console.log(typeof a)
