const german = {
    "Dinosaurs": "Dinosaurier"
}

const inputBox = document.getElementById('toTranslate');
const spanishBtn = document.getElementById('spanish');
const germanBtn = document.getElementById('german');
const klingonBtn = document.getElementById('klingon');
const outputBox = document.getElementById('translated');

// germanBtn.addEventListener('click', (e) => {
//     console.log("my event", e);
//     const userInput = inputBox.value.toLowercase();
//     let domOutput = german[userInput];
//     outputBox.innerHTML = domOutput;
// })

const allMyButtons = document.getElementsByClassName(translator);

for (let i = 0; i < allMyButtons.length; i++) {
    allMyButtons[i].addEventListener('click', (e) => {
        const userInput = inputBox.value.toLowercase();
        let domOutput = '';
        if (e.target.id === 'spanish') {
            domOutput = spanish[userInput];
        } else if (e.target.id === 'german') {
            domOutput = german[userInput];
        } else {
            domOutput = klingon[userInput];
        }
        outputBox.innerHTML = domOutput;
    })
}