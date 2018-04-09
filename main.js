var spanish = {
    "a": "un",
    "an": "un",
    "the": "el",
    "and": "y",
    "happy": "feliz",
    "holiday": "fiesta",
    "holidays": "fiestas",
    "new": "nuevo",
    "year": "ano",
    "merry": "Feliz",
    "christmas": "navidad",
    "season": "temporada",
    "seasons": "temporadas",
    "greeting": "saludo",
    "greetings": "saludos",
    "hanukkah": "hanukkah",
    "warm": "calentar",
    "wishes": "deseos",
    "kwanzaa": "kwanzaa"
};

var german = {
    "a": "ein",
    "an": "ein",
    "the": "das",
    "and": "und",
    "happy": "glücklich",
    "holiday": "urlaub",
    "holidays": "ferien",
    "new": "neu",
    "year": "jahr",
    "merry": "Fröhliche",
    "christmas": "Weihnachten",
    "season": "jahreszeit",
    "seasons": "jahreszeiten",
    "greeting": "Gruß",
    "greetings": "Gruße",
    "hanukkah": "chanukka",
    "warm": "warm",
    "wishes": "wunsch",
    "kwanzaa": "kwanzaa"
};

var klingon = {
    "a": ".",
    "an": "ghaH",
    "the": ".",
    "and": "je",
    "happy": "quch",
    "holiday": "QI'lop",
    "holidays": "QI'lop",
    "new": "chu'",
    "year": "dis",
    "merry": "Quch",
    "christmas": "QISmaS",
    "season": "maqtagh",
    "seasons": "maqtagh",
    "greeting": "ghah 'ej duvan",
    "greetings": "ghah 'ej duvan",
    "hanukkah": "hanukkah",
    "warm": "warm",
    "wishes": "vIneH",
    "kwanzaa": "kwanzaa"
};
 
const allTheButtons = document.getElementsByClassName('button');
let outputArea = document.getElementById('outputArea');
let input = document.getElementById("inputArea");
let inputValue = [];
let output = [];

for (let i = 0; i < allTheButtons.length; i++) {

    allTheButtons[i].addEventListener('click', e => {
        
        inputValue = input.value.toLowerCase().split(" ");

        if (e.target.id === "spanishBtn") {
            inputValue.forEach((element) => {
                output.push(spanish[element]);
            });
        } else if (e.target.id ==="germanBtn") {
            inputValue.forEach(element => {
                output.push(german[element]);
            });
        } else if (e.target.id === "klingonBtn") {
            inputValue.forEach(element => {
                output.push(klingon[element]);
            });
        }
        outputArea.innerHTML = output;
    });

}

// CLEAR BUTTON
const clearOutput = e => {
    outputArea = " ";
};