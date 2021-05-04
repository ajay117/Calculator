let displayScreen = document.querySelector('.screen');
let numButtons = document.querySelectorAll('.number');
let actionButtons = document.querySelectorAll('.action');
let clearButton = document.querySelector('.clear-button');
let backspace = document.querySelector('.clear-backspace');
let displayNumber
let numString1 = '';
let numString2 = '';
// let num1 = 0;
// let num2 = 0;
let isClicked = false;
let times = 0;

numButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if(!isClicked) {
            numString1 += e.target.textContent;
            displayScreen.textContent = numString1;
        } else {
            numString2 += e.target.textContent;
            displayScreen.textContent = numString2;
        }
    });
    
});


actionButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        isClicked = true;
        if(numString1 && numString2) {
            if(e.target.textContent === '+') {
                numString1 = add(Number(numString1), Number(numString2));
                displayScreen.textContent = numString1;
                numString2 = '';
            }
        }
    });
});


clearButton.addEventListener('click', () => {
    numString1 = '';
    numString2 = '';
    displayScreen.textContent = '';    
    isClicked = false;
});
    
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