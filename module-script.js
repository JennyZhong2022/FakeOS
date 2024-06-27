import currentTime from './modules/top.js'
import { weatherDisplay, amazonDisplay } from './modules/iconContentDisplay.js'
import { loadIframeContent } from './modules/messageDisplay.js';


export const messageFrame = document.getElementById('message-frame')


const timeDisplay = document.querySelector('.time')

export const contentFrame=document.querySelector('#content-frame')

const weatherIcon = document.querySelector('.weatherIcon')
const amazonIcon = document.querySelector('.amazonIcon')
const messageIcon=document.querySelector('.messageIcon')

const mainSection = document.querySelector('.main-section');
const backArrow=document.querySelector('.back-symbol')
const contentDisplay=document.querySelector('.content-display')
const messageDisplay = document.querySelector('.message-display')



timeDisplay.textContent = currentTime()



weatherIcon.addEventListener('click', (e) => {
  e.preventDefault()
  weatherDisplay()
  mainSection.classList.add('noDisplay')
  contentDisplay.classList.remove('noDisplay')
})

backArrow.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('back');
  mainSection.classList.remove('noDisplay')
  contentDisplay.classList.add('noDisplay')
  messageDisplay.classList.add('noDisplay')
})



// below doesn't work 
// chrome-error://chromewebdata/:1 Refused to display 'https://www.ebay.com.au/' in a frame because it set 'X-Frame-Options' to 'sameorigin'. 

amazonIcon.addEventListener('click', (e) => {
  e.preventDefault()
  amazonDisplay()
  mainSection.classList.add('noDisplay')
  contentDisplay.classList.remove('noDisplay')
})

messageIcon.addEventListener('click', (e) => {
  e.preventDefault()
  messageDisplay.classList.remove('noDisplay')
  mainSection.classList.add('noDisplay')
  console.log('yyyy');
})

document.addEventListener('DOMContentLoaded', () => {
  loadIframeContent();
});