let displayScreen = document.querySelector('.screen');      
let numButtons = document.querySelectorAll('.number');      
let actionButtons = document.querySelectorAll('.action');   
let clearButton = document.querySelector('.clear-button');  
let backspace = document.querySelector('.clear-backspace'); 
let numString1 = '';
let numString2 = '';

// Clicking on any action button for the first time will change the variable 'isClicked' to true.
let isClicked = false; 
let times = 0;
let action = '';

//Shows '0' in calculator screen when program starts..
displayScreen.textContent = '0';
numButtons.forEach(btn => {
    btn.addEventListener('click', getNumbers);    
});
actionButtons.forEach(btn => {
    btn.addEventListener('click', getAction);
});
// Clicking on 'clearButton' will reset the calculator to 0.
clearButton.addEventListener('click', clearScreen);
backspace.addEventListener('click', removeCharacterPerClick);



//Function declared for program logic...
function getNumbers(e) {
    if(isClicked) {
        if(!numString2) {
            displayScreen.textContent = '';
        }        
        displayScreen.textContent += e.target.textContent;
        numString2 = Number(displayScreen.textContent);             
       } else {
           if(displayScreen.textContent === '0') {
               displayScreen.textContent = '';
           }
           displayScreen.textContent += e.target.textContent;
       }
}
function getAction(e) {
    if(!isClicked) {
        // displayScreen.textContent = '';
        numString1 = Number(displayScreen.textContent);
        isClicked = true;
        action = e.target.textContent;
    } else {
        if(action === '+') {
            if(numString1 && numString2 && isClicked) {
                numString1 = add(numString1, numString2);
                numString2 = 0;
                displayScreen.textContent = numString1;
                action = e.target.textContent;
            }
        } else if (action === '-') {
            if(numString1 && numString2 && isClicked) {
                numString1 = subtract(numString1, numString2);
                numString2 = 0;
                displayScreen.textContent = numString1;
                action = e.target.textContent;
            }
        }  else if (action === '*') {
            if(numString1 && numString2 && isClicked) {
                numString1 = multiply(numString1, numString2);
                numString2 = 0;
                displayScreen.textContent = numString1;
                action = e.target.textContent;
            }
        }  else if (action === '/') {
            if(numString1 && numString2 && isClicked) {
                numString1 = divide(numString1, numString2);
                numString2 = 0;
                displayScreen.textContent = numString1;
                action = e.target.textContent;
            }
        } else {
            action = e.target.textContent;
        }
    }               
}
function clearScreen() {
    numString1 = '';
    numString2 = '';
    displayScreen.textContent = '0';    
    isClicked = false;
}
function removeCharacterPerClick() {
    let numberInScreen =  displayScreen.textContent;
    displayScreen.textContent =  numberInScreen.slice(0, numberInScreen.length -1);
    numString1 = Number(displayScreen.textContent);
}

//Functions declared for add, subtract, multiply and divide...
function add(...num) {
    let total = 0;
    num.forEach(item => {
      total += item;
});
    return total;
}

function subtract(...num) {
  return num.reduce((acc,curr) => {
      return  acc - curr;
  });
}

function multiply(...num) {
    return num.reduce((acc,curr) => {
        return  acc * curr;
    });
}
function divide(...num) {
    return num.reduce((acc,curr) => {
        return  acc / curr;
    });
}

function operate(operator, num1, num2) {
    if(operator === '+')  {
        return add(num1,num2);
    } else if (operator === '-') {
        return subtract(num1,num2);
    } else if (operator === '*') {
        return multiply(num1,num2);        
    } else {
        return divide(num1,num2);
    }
}