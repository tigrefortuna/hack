
sinalBtn = document.getElementById("greenButton");
normalValue = document.getElementById("normal-value");
turboValue = document.getElementById("turbo-value");
validateValue = document.getElementById("validate-value");
accuracyText = document.getElementById("accuracy-value");
timer = 0;
validateTimer = 0;
accuracyCalcule= function() {
    let value = Math.floor(Math.random() * (90 - 70 + 1)) + 70;
    accuracyText.textContent = `${value}% de Acerto`
}
accuracyCalcule();

accuracyValue = setInterval(function () {
    accuracyCalcule()
},1000*60*2)

startTimer = function () {
    let button = sinalBtn;
    clearInterval(validateTimer);
    if (!button.disabled) {
        
        button.disabled = true;
        let seconds = 60;
        let validateSeconds = 120;
        normalValue.textContent = Math.ceil(Math.random() * 12);
        turboValue.textContent = Math.ceil(Math.random() * 12);
        updateButtonText(seconds);
        updateValidateText(validateSeconds);

        validateTimer = setInterval(function () {
            validateSeconds--

            if (validateSeconds < 0) {
                clearInterval(validateTimer);
                validateValue.textContent = "00:00:00";
                normalValue.textContent = "--";
                turboValue.textContent = "--";
            }
            else {
                updateValidateText(validateSeconds);
            }
        }, 1000)

        timer = setInterval(function () {
            seconds--;

            if (seconds < 0) {
                clearInterval(timer);
                button.disabled = false;
                button.textContent = 'Gerar Sinal';
            } else {
                updateButtonText(seconds);
            }
        },1000);
    }
}

sinalBtn.addEventListener("click", startTimer.bind());

updateValidateText = function (seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;

    validateValue.textContent = `00:${padZero(minutes)}:${padZero(remainingSeconds)}`;
}


updateButtonText= function(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;

    sinalBtn.textContent = `${padZero(minutes)}:${padZero(remainingSeconds)}`;
}

function padZero(number) {
    return number < 10 ? '0' + number : number;
}