import currentTime from './modules/top.js'
import weatherDisplay from './modules/weatherDisplay.js'
import amazonDisplay from './modules/amazonDisplay.js'

const timeDisplay = document.querySelector('.time')
const weatherIcon = document.querySelector('.weatherIcon')
const amazonIcon=document.querySelector('.amazonIcon')

timeDisplay.textContent = currentTime()

weatherIcon.addEventListener('click', () => {
  weatherDisplay()
})


amazonIcon.addEventListener('click', () => {
  amazonDisplay()
})