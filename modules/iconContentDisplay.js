import { contentFrame } from '../module-script.js'

export const weatherDisplay = () => {
   contentFrame.src='https://www.weatherzone.com.au/vic/melbourne/melbourne'
   console.log('go weather');
}




export const amazonDisplay = () => {
   contentFrame.src='https://www.ebay.com.au/'
   console.log('go amazon');
 }
 
