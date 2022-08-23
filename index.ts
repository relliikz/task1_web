// Import stylesheets
import './style.css';
import { Cookie } from './models/Cookie';

// Create a array/list of cookies named cookies
const Cookies: Cookie[] = [];


function init() {
  //TODO: add code here
  // create the two cookies
  const cookie1: Cookie = new Cookie('cookie1', 'red', 0);
  const cookie2: Cookie = new Cookie('cookie2', 'blue', 30);
  // add them to the array
  Cookies.push(cookie1);
  Cookies.push(cookie2);
  // add them as options in the select/dropdown (cookieSelector) element
  const cookieSelector: HTMLSelectElement = <HTMLSelectElement>document.getElementById('cookieSelector');
  cookieSelector.add(new Option(cookie1.name, cookie1.name));
 


  // initialise the cookieColour-inp to the colour of the first cookie created
  const cookieColourInput: HTMLInputElement = <HTMLInputElement>document.getElementById('cookieColour-inp');
  cookieColourInput.value = cookie1.colour;



  updateDisplay();
}

//TODO: this function needs to go through the list of cookies and draw them to cookiesDiv
// create the cookies as divs with the class name of cookie - see style.css
// number of chocolatechips needs to be shown on the cookie
function drawCookies() {

}

//TODO: this fuction needs to be triggered by button changeColour-btn
// upon pressing the button it should change the colour of the cookie selected in the dropdown to the colour typed in the input element (cookieColour-inp)
function changeColour() {

  updateDisplay();
}

//TODO: this fuction needs to be triggered by button addChocolateChip-btn
// upon pressing the button it should add a chocolate chip to cookies selected from the dropdown
function addChocolateChip() {

  updateDisplay();
}

function updateDisplay() {

  drawCookies();
}