const quizBox = document.querySelector('.quiz-box')
const questContainer = document.querySelector('.question-container')
const scoredisplay = document.querySelector('.score')
const options = document.querySelectorAll('.opt')
const resetbtn = document.querySelector('.reset')
let lastClicked = null
let submitoption = ''
let index = 0
let score = 0

function selectOption(e) {
  if (lastClicked) {
  lastClicked.classList.remove('clicked')
}
e.target.classList.add('clicked')
lastClicked = e.target
submitoption = e.target
}
 function submit(option) {
   console.log()
   if (option.id != '') {
     option.classList.add('true')
     option.classList.remove('clicked')
     score++
     scoredisplay.textContent =`Score: ${score}/${questContainer.children.length-1}`
   } else {
     option.classList.add('false')
     option.classList.remove('clicked')
     scoredisplay.textContent =`Score: ${score}/${questContainer.children.length-1}`
   }
   index++
   questContainer.style.transform = `translateX( -${index * 100}%)`
   questContainer.style.transition = `0.6s ease`
   submitoption = ''
   lastClicked = null
 }
 for (let i = 1; i <= questContainer.children.length-1; i++) {
  const section = document.querySelector(`.sect${i}`)
  const opts = section.querySelectorAll('.opt')
  const submitbtn = section.querySelector('.btn')
  
  opts.forEach((option) => {
    option.addEventListener('click', (e) => selectOption(e))
  })
  submitbtn.addEventListener('click', () => {
    if (submitoption === '') return
    submit(submitoption)
    
    if (i === questContainer.children.length-1) {
      quizBox.classList.add('finished')
    }
  })
 }
resetbtn.addEventListener('click',()=>{
  index = 0
  score = 0
  lastClicked = null
  quizBox.classList.remove('finished')
  scoredisplay.textContent = `Score: ${score}/${questContainer.children.length-1}`
  options.forEach(option => {
  option.classList.remove('false','true')
})
  questContainer.style.transform = `translateX( -${index * 100}%)`
  questContainer.style.transition = '0s'
})