import currentTime from './modules/top.js'
import { weatherDisplay, amazonDisplay } from './modules/iconContentDisplay.js'




export const contentFrame=document.querySelector('#content-frame')

const timeDisplay = document.querySelector('.time');
const weatherIcon = document.querySelector('.weatherIcon');
// const amazonIcon = document.querySelector('.amazonIcon');
const messageIcon = document.querySelector('.messageIcon');
const backArrow = document.querySelector('.back-symbol');
const mainSection = document.querySelector('.main-section');
const contentDisplay = document.querySelector('.content-display');
const messageDisplaySection = document.querySelector('.message-display');
const messageList = document.querySelector('.message-ul');
const messageDataDisplay = document.getElementById('message-data-display');
const messageItems = document.querySelectorAll('.message-li');

let isViewingMessageList = false;

// show current time on the navbar
timeDisplay.textContent = currentTime()



weatherIcon.addEventListener('click', (e) => {
  e.preventDefault()
  weatherDisplay()
  mainSection.classList.add('noDisplay')
  contentDisplay.classList.remove('noDisplay')
  console.log('weather');
})

// below doesn't work 
// chrome-error://chromewebdata/:1 Refused to display 'https://www.ebay.com.au/' in a frame because it set 'X-Frame-Options' to 'sameorigin'. 

// amazonIcon.addEventListener('click', (e) => {
//   e.preventDefault()
//   amazonDisplay()
//   mainSection.classList.add('noDisplay')
//   contentDisplay.classList.remove('noDisplay')
// })




// Event listener for messageIcon
messageIcon.addEventListener('click', (e) => {
  e.preventDefault();
  mainSection.classList.add('noDisplay');
  contentDisplay.classList.add('noDisplay');
  messageDisplaySection.classList.remove('noDisplay');
  messageDataDisplay.classList.add('noDisplay');
  isViewingMessageList = true;
});



// Event listeners for message list items

messageItems.forEach(item => {
  item.addEventListener('click', () => {
    const messageContent = item.getAttribute('data-message');
    messageDataDisplay.innerHTML = `<p>${messageContent}</p>`;
    messageList.classList.add('noDisplay');
    messageDataDisplay.classList.remove('noDisplay');
  });
});



// Event listener for backArrow
backArrow.addEventListener('click', (e) => {
  e.preventDefault();
  if (isViewingMessageList) {
    if (messageDataDisplay.classList.contains('noDisplay')) {
      // If viewing message list, go back to home page
      mainSection.classList.remove('noDisplay');
      contentDisplay.classList.add('noDisplay');
      messageDisplaySection.classList.add('noDisplay');
      isViewingMessageList = false;
    } else {
      // If viewing message details, go back to message list
      messageDataDisplay.classList.add('noDisplay');
      messageList.classList.remove('noDisplay');
    }
  } else {
    // Default behavior if not viewing message list or details, back to home page
    mainSection.classList.remove('noDisplay');
    contentDisplay.classList.add('noDisplay');
    messageDisplaySection.classList.add('noDisplay');
  }
});
