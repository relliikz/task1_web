// Import stylesheets
import './style.css';
import { Cookie } from './models/Cookie';

// Create a array/list of cookies named cookies
let Cookies: Cookie[] = [];

document
  .getElementById('changeColour-btn')
  .addEventListener('click', changeColour);
init();

function init() {
  //TODO: add code here
  // create the two cookies
  let cookie1: Cookie = new Cookie('Cookie1', 'red', 0);
  let cookie2: Cookie = new Cookie('Cookie2', 'blue', 30);
  // add them to the array
  Cookies.push(cookie1);
  Cookies.push(cookie2);
  // add them as options in the select/dropdown (cookieSelector) element
  let cookieSelector: HTMLSelectElement = <HTMLSelectElement>(
    document.getElementById('cookieSelector')
  );
  /*   let option1: string = `<option value="0">${cookie1.name}</option>`;
  let option2: string = `<option value ="1">${cookie2.name}</option>`; */

  for (let index in Cookies) {
    let option: string = `<option value="${index}">${Cookies[index].name}</option>`;
    cookieSelector.innerHTML += option;
  }

  /*   cookieSelector.innerHTML += option1;
  cookieSelector.innerHTML += option2; */

  // initialise the cookieColour-inp to the colour of the first cookie created
  let cookieColourInput: HTMLInputElement = <HTMLInputElement>(
    document.getElementById('cookieColour-inp')
  );
  cookieColourInput.value = Cookies[0].colour;

  updateDisplay();
}

//TODO: this function needs to go through the list of cookies and draw them to cookiesDiv
// create the cookies as divs with the class name of cookie - see style.css
// number of chocolatechips needs to be shown on the cookie
function drawCookies() {
  let cookiesDiv: HTMLDivElement = <HTMLDivElement>(
    document.getElementById('cookiesDiv')
  );
  cookiesDiv.innerHTML = '';
  for (let index in Cookies) {
    let newCookie: HTMLDivElement = <HTMLDivElement>(
      document.createElement('div')
    );
    newCookie.className = 'cookie';
    newCookie.innerHTML = Cookies[index].chocolateChipNum.toString();
    newCookie.style.backgroundColor = Cookies[index].colour;
    cookiesDiv.appendChild(newCookie);
  }
}

//TODO: this fuction needs to be triggered by button changeColour-btn
// upon pressing the button it should change the colour of the cookie selected in the dropdown to the colour typed in the input element (cookieColour-inp)
function changeColour() {
  let select: HTMLSelectElement = <HTMLSelectElement>(
    document.getElementById('cookieSelector')
  );
  let colourInp: HTMLInputElement = <HTMLInputElement>(
    document.getElementById('cookieColour-inp')
  );

  Cookies[select.value].colour = colourInp.value;

  updateDisplay();
}

//TODO: this fuction needs to be triggered by button addChocolateChip-btn
// upon pressing the button it should add a chocolate chip to cookies selected from the dropdown
function addChocolateChip() {
  //same as changecolour
  updateDisplay();
}

function updateDisplay() {
  drawCookies();
}
