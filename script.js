let displayScreen = document.querySelector('.screen');
let numButtons = document.querySelectorAll('.number');
let actionButtons = document.querySelectorAll('.action');
let clearButton = document.querySelector('.clear-button');
let backspace = document.querySelector('.clear-backspace');
let displayNumber
let numString1 = '';
let numString2 = '';
let num2;
let num1;
let isClicked = false;
let times = 0;

numButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
         if(isClicked) {
             if(!numString2) {
                 displayScreen.textContent = '';
             }
             displayScreen.textContent += e.target.textContent;
             numString2 = Number(displayScreen.textContent);             
            } else {
                displayScreen.textContent += e.target.textContent;
            }
    });
    
});


actionButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if(!isClicked) {
            numString1 = Number(displayScreen.textContent);
            isClicked = true;
        }
        if(numString1 && numString2 && isClicked) {
            numString1 = add(numString1, numString2);
            numString2 = 0;
            displayScreen.textContent = numString1;
        }        
    });
});


clearButton.addEventListener('click', () => {
    numString1 = '';
    numString2 = '';
    displayScreen.textContent = '';    
    isClicked = false;
});

backspace.addEventListener('click', (e) => {
    let numberInScreen =  displayScreen.textContent;
    displayScreen.textContent =  numberInScreen.slice(0, numberInScreen.length -1);
    numString1 = Number(displayScreen.textContent);
});
    

//Functions...
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