//random pin generator function
function getPin(){
    const random = Math.random()*1000000;
    const pin = (random + '.').split('.')[0];
    if(pin.length === 6){
        return pin;
    }
    else{
        return getPin();
    }
}
function generateInput(){
    const input = document.getElementById('inputValue');
    input.value = getPin();
}
// all key get by user
const btnContainer = document.getElementById('inputKeys');
btnContainer.addEventListener('click',function(event){
    const digit =  event.target.innerText;
    if(isNaN(digit)){
       if(digit === 'C'){
           document.getElementById('typedInput').value = '';
       }
    }
    else{
        const typeInput = document.getElementById('typedInput');
        typeInput.value = typeInput.value + digit;
    }
})
//verify pin
function verifyPin(){
    const input = document.getElementById('inputValue').value;
    const typeInput = document.getElementById('typedInput').value;

    if(input === typeInput){
        document.getElementById('successPin');
      displayMessage('block','none');

    }
    else{
        document.getElementById('errorPin');
        displayMessage('none','block');
        let trySubmit = Number(document.getElementById('submit-try').textContent -1);
        if(trySubmit >= 0){
            document.getElementById('submit-try').textContent = trySubmit;
        }
        else{
            document.getElementById('submissionerror').style.display = 'block';
            document.getElementById('mainArea').style.display = 'none';
        }
    }
}
//display message
function displayMessage(sMessage, erMessage){
    const successpin = document.getElementById('successPin');
    successpin.style.display = sMessage;
    const errorpin = document.getElementById('errorPin');
    errorpin.style.display = erMessage;

}

//backspace
function backSpace(){
    let currentInput = document.getElementById('typedInput').value;
    document.getElementById('typedInput').value = currentInput.substr(0, currentInput.length -1);
}