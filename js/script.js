
sinalBtn = document.getElementById("greenButton");
normalValue = document.getElementById("normal-value");
turboValue = document.getElementById("turbo-value");
ValidityValue = document.getElementById("Validity-value");
accuracyText = document.getElementById("accuracy-value");
timer = 0;
ValidityTimer = 0;
window.scrollTo(0, document.body.scrollHeight/6);
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
accuracyCalcule= function() {
    let value = getRandomInt(70, 92);
    accuracyText.textContent = `${value}% 自信 (de Acerto)`
}
accuracyCalcule();

accuracyValue = setInterval(function () {
    accuracyCalcule()
},1000*60*2)
startTimer = function () {
    let button = sinalBtn;
    clearInterval(ValidityTimer);
    if (!button.disabled) {
        button.style.backgroundColor = "grey";

        button.disabled = true;
        let seconds = 60;
        let ValiditySeconds = 120;

        normalValue.textContent = `${getRandomInt(5, 12)}x`;
        turboValue.textContent = `${getRandomInt(6, 12)}x`;
        updateButtonText(seconds);
        updateValidityText(ValiditySeconds);

        ValidityTimer = setInterval(function () {
            ValiditySeconds--

            if (ValiditySeconds < 0) {
                clearInterval(ValidityTimer);
                ValidityValue.textContent = "00:00:00";
                normalValue.textContent = "--";
                turboValue.textContent = "--";
            }
            else {
                updateValidityText(ValiditySeconds);
            }
        }, 1000)

        timer = setInterval(function () {
            seconds--;

            if (seconds < 0) {
                clearInterval(timer);
                button.disabled = false;
                button.style.backgroundColor = "#4caf50";

                button.textContent = '新分析 Novo Sinal';
            } else {
                updateButtonText(seconds);
            }
        },1000);
    }
}

sinalBtn.addEventListener("click", startTimer.bind());

updateValidityText = function (seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;

    ValidityValue.textContent = `00:${padZero(minutes)}:${padZero(remainingSeconds)}`;
}


updateButtonText= function(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;

    sinalBtn.textContent = `${padZero(minutes)}:${padZero(remainingSeconds)}`;
}

function padZero(number) {
    return number < 10 ? '0' + number : number;
}