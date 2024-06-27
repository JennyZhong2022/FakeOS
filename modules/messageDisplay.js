import { messageFrame } from '../module-script.js'

export const loadIframeContent = () => {
  if (messageFrame) {
    const doc = messageFrame.contentDocument || messageFrame.contentWindow.document;
    doc.open();
    doc.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Iframe Content</title>
        <link rel="stylesheet" href="./iframe-style.css">
        <style>
          .hidden {
            display: none;
          }
          .message-display {
            padding: 20px;
            font-size: 1.2em;
          }
        </style>
      </head>
      <body class="message-body">
        <h1 class="message-h1">Messages</h1>
        <ul class="message-ul">
          <li class="message-li" data-message="Hey, how are you?">
            <img class="message-img" src="./src/icons/circle.png" alt="circle">
            <div>
              <h4>John Doe</h4>
              <p class="message-text">Hey, how are you?</p>
              <p class="message-date">2024-06-26</p>
            </div>
          </li>
          <li class="message-li" data-message="Don't forget the meeting at 3 PM.">
            <img class="message-img" src="./src/icons/circle.png" alt="circle">
            <div>
              <h4>Jane Smith</h4>
              <p class="message-text">Don't forget the meeting at 3 PM.</p>
              <p class="message-date">2024-06-25</p>
            </div>
          </li>
          <li class="message-li" data-message="Can we reschedule our call?">
            <img class="message-img" src="./src/icons/circle.png" alt="circle">
            <div>
              <h4>Bob Johnson</h4>
              <p class="message-text">Can we reschedule our call?</p>
              <p class="message-date">2024-06-24</p>
            </div>
          </li>
          <li class="message-li" data-message="Great job on the project!">
            <img class="message-img" src="./src/icons/circle.png" alt="circle">
            <div>
              <h4>Alice Brown</h4>
              <p class="message-text">Great job on the project!</p>
              <p class="message-date">2024-06-23</p>
            </div>
          </li>
          <li class="message-li" data-message="Happy Birthday!">
            <img class="message-img" src="./src/icons/circle.png" alt="circle">
            <div>
              <h4>Chris Davis</h4>
              <p class="message-text">Happy Birthday!</p>
              <p class="message-date">2024-06-22</p>
            </div>
          </li>
          <li class="message-li" data-message="Let's catch up soon.">
            <img class="message-img" src="./src/icons/circle.png" alt="circle">
            <div>
              <h4>Patricia Wilson</h4>
              <p class="message-text">Let's catch up soon.</p>
              <p class="message-date">2024-06-21</p>
            </div>
          </li>
          <li class="message-li" data-message="Check out this link I sent you.">
            <img class="message-img" src="./src/icons/circle.png" alt="circle">
            <div>
              <h4>David Lee</h4>
              <p class="message-text">Check out this link I sent you.</p>
              <p class="message-date">2024-06-20</p>
            </div>
          </li>
          <li class="message-li" data-message="I'll be there in 10 minutes.">
            <img class="message-img" src="./src/icons/circle.png" alt="circle">
            <div>
              <h4>Emily Clark</h4>
              <p class="message-text">I'll be there in 10 minutes.</p>
              <p class="message-date">2024-06-19</p>
            </div>
          </li>
        </ul>
        <div id="message-display" class="message-display hidden"></div>
        <script>
          window.addEventListener('load', () => {
            let isViewingMessageList = false;
            const messageItems = document.querySelectorAll('.message-li');
            const messageDisplay = document.getElementById('message-display');
            const messageList = document.querySelector('.message-ul');
            const backArrow = parent.document.querySelector('.back-symbol');
            const messageDisplaySection = parent.document.querySelector('.message-display');
            const messageIcon = parent.document.querySelector('.messageIcon');

            messageItems.forEach(item => {
              item.addEventListener('click', () => {
                messageDisplay.textContent = item.getAttribute('data-message');
                messageList.classList.add('hidden');
                messageDisplay.classList.remove('hidden');
                isViewingMessageList = true;
              });
            });

            messageIcon.addEventListener('click', () => {
              messageDisplaySection.classList.remove('noDisplay');
              messageList.classList.remove('hidden');
              messageDisplay.classList.add('hidden');
              isViewingMessageList = true;
            });

            backArrow.addEventListener('click', (e) => {
              e.preventDefault();
              if (isViewingMessageList) {
                if (messageDisplay.classList.contains('hidden')) {
                  // If viewing message list, go back to home page
                  console.log('back to home');
                  const mainSection = parent.document.querySelector('.main-section');
                  const contentDisplay = parent.document.querySelector('.content-display');
                  mainSection.classList.remove('noDisplay');
                  contentDisplay.classList.add('noDisplay');
                  messageDisplaySection.classList.add('noDisplay'); // Hide the message-display section
                  messageList.classList.add('hidden'); // Ensure the message list is hidden
                  isViewingMessageList = false;
                } else {
                  // If viewing message details, go back to message list
                  messageDisplay.classList.add('hidden');
                  messageList.classList.remove('hidden');
                }
              } else {
                // Default behavior if not viewing message list or details
                console.log('back to home');
                const mainSection = parent.document.querySelector('.main-section');
                const contentDisplay = parent.document.querySelector('.content-display');
                mainSection.classList.remove('noDisplay');
                contentDisplay.classList.add('noDisplay');
                messageDisplaySection.classList.add('noDisplay'); // Hide the message-display section
              }
            });
          });
        </script>
      </body>
      </html>
    `);
    doc.close();
  } else {
    console.error('Iframe element not found');
  }
};