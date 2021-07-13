// const firstname = prompt("Siapa nama depanmu?");
// const lastname = prompt("Siapa nama belakangmu?");
// const language = prompt("Bisa Berbahasa apa?");

// const user = {
//     name: {
//         first : firstname,
//         last : lastname,

//     },
//     lang : language
// };

// if(user.lang === "English"){
// alert("Nice to meet you "+ user.name.first + " " +  user.name.last);
// }
// else if(user.lang === "French"){
//     alert("Ravi de vous rencontrer " + user.name.first+ " " + user.name.last);
// }
// else if(user.lang === "Japanese"){
//     alert("Hajimemashite, "+ user.name.first + " " + user.name.last);

// }
// else{
//     alert("Senang bertemu dengan Anda "+ user.name.first + " "+ user.name.last);
// }
    
console.log("Selamat Anda Berhasil Menggunakan JavaScript pada Website");

const calculator = {
    displayNumber : '0', 
    operator : null,
    firstNumber : null,
    waitingForSecondNumber : false,
    op : 0
};


function updateDisplay(){
    document.querySelector(".displayNumber").innerText = calculator.displayNumber;

}

function clearCalculator(){
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.waitingForSecondNumber = false;
    calculator.op = 0;
    
}

function inputDigit(digit){
    if(calculator.displayNumber == '0'){
        calculator.displayNumber = digit;
    }
    else{
        calculator.displayNumber += digit;
    }

}

function inverseNumber(){
    if(calculator.displayNumber == '0'){
        return;
    }
    calculator.displayNumber = calculator.displayNumber*-1;
}

function handlerOperator(operator){
    calculator.op +=1;
if(!calculator.waitingForSecondNumber){
if(calculator.op == 0){
    alert("Masukkan angka dulu");
}
    calculator.operator = operator;
// calculator.waitingForSecondNumber = true;
calculator.firstNumber = calculator.displayNumber;

calculator.displayNumber = '0';

}
else{
    
    alert("Operator sudah ditetapkan");
}
}

function performCalculation(){
    if(calculator.firstNumber == null || calculator.operator == null){
        alert("Anda belum menetapkan operator");
        return;
    }

    let result = 0;
    calculator.waitingForSecondNumber = false;
    if(calculator.operator == "+"){
        result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
    }
    else{
        result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
    }
    const history = {
        firstNumber: calculator.firstNumber,
        secondNumber:calculator.displayNumber,
        operator: calculator.operator,
        result:result
    
    }

    putHistory(history);

    calculator.displayNumber = result;
    renderhistory();
}


const buttons = document.querySelectorAll(".button")
for(let button of buttons){
    button.addEventListener('click', function(event){
        
//mendapatkan objek elemen yang diklik

        const target = event.target;

        if(target.classList.contains('clear')){
            clearCalculator();
            updateDisplay();
            return;
        }

        if(target.classList.contains('negative')){
            inverseNumber();
            updateDisplay();
            return;
        }

        if(target.classList.contains('equals')){
            performCalculation();
            updateDisplay();
            return;
        }
        if(target.classList.contains('operator')){
            handlerOperator(target.innerText);
            return;
        }


        inputDigit(target.innerText);
        updateDisplay();

    });
}

