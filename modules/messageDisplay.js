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
      </head>
      <body class="message-body">
        <h1 class="message-h1">Messages</h1>
        <ul class="message-ul">
          <li class="message-li">
            <img class="message-img" src="./src/icons/circle.png" alt="circle">
            <div>
              <h4>name</h4>
              <p class="message-text">message</p>
              <p class="message-date">date</p>
            </div>
          </li>
          <li class="message-li">
            <img class="message-img" src="./src/icons/circle.png" alt="circle">
            <div>
              <h4>name</h4>
              <p class="message-text">message</p>
              <p class="message-date">date</p>
            </div>
          </li>
          <li class="message-li">
            <img class="message-img" src="./src/icons/circle.png" alt="circle">
            <div>
              <h4>name</h4>
              <p class="message-text">message</p>
              <p class="message-date">date</p>
            </div>
          </li>
          <li class="message-li">
            <img class="message-img" src="./src/icons/circle.png" alt="circle">
            <div>
              <h4>name</h4>
              <p class="message-text">message</p>
              <p class="message-date">date</p>
            </div>
          </li>
          <li class="message-li">
            <img class="message-img" src="./src/icons/circle.png" alt="circle">
            <div>
              <h4>name</h4>
              <p class="message-text">message</p>
              <p class="message-date">date</p>
            </div>
          </li>
          <li class="message-li">
            <img class="message-img" src="./src/icons/circle.png" alt="circle">
            <div>
              <h4>name</h4>
              <p class="message-text">message</p>
              <p class="message-date">date</p>
            </div>
          </li>
        </ul>
      </body>
      </html>
    `);
    doc.close();
  } else {
    console.error('Iframe element not found');
  }
};