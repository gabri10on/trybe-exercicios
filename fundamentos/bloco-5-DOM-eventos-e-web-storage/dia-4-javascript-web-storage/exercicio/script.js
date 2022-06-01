if (localStorage.mainBackgroundColor) {
    document.querySelector("main").style.backgroundColor = localStorage.mainBackgroundColor;
}

if (localStorage.mainColor) {
    document.querySelector("main").style.color = localStorage.mainColor;
}

if (localStorage.fontFamilyParagrah) {
    const paragragh = document.querySelectorAll("p")
    for (index = 0; index < paragragh.length; index += 1) {
        paragragh[index] = paragragh[index].style.fontFamily = localStorage.fontFamilyParagrah;
    }
}

if (localStorage.espaçamento) {
    const paragragh = document.querySelectorAll("p")
    for (index = 0; index < paragragh.length; index += 1) {
        paragragh[index] = paragragh[index].style.lineHeight = localStorage.espaçamento;
    }
}

const main = document.querySelector("main");
const greykBackGround = document.getElementsByTagName("li")[0];
greykBackGround.addEventListener("click", bgBlack);
function bgBlack(event) {
    main.style.backgroundColor = "#333"
    saveBGC()
}

const whiteBackGround = document.getElementsByTagName("li")[1];
whiteBackGround.addEventListener("click", bgWhite);
function bgWhite(event) {
    main.style.backgroundColor = "white"
    saveBGC()
}

const yellowBackGround = document.getElementsByTagName("li")[2];
yellowBackGround.addEventListener("click", bgYellow);
function bgYellow(event) {
    main.style.backgroundColor = "yellow"
    saveBGC()
}

const blackColor = document.getElementsByTagName("li")[3];
blackColor.addEventListener("click", colorBlack);
function colorBlack(event) {
    main.style.color = "black"
    saveColor()
}

const redColor = document.getElementsByTagName("li")[4];
redColor.addEventListener("click", colorRed);
function colorRed(event) {
    main.style.color = "red"
    saveColor()
}

const whiteColor = document.getElementsByTagName("li")[5];
whiteColor.addEventListener("click", colorWhite);
function colorWhite(event) {
    main.style.color = "white"
    saveColor()
}

const fonte1 = document.getElementsByTagName("li")[6];
fonte1.addEventListener("click", Times);
function Times(event) {
    const paragragh = document.querySelectorAll("p")
    for (index = 0; index < paragragh.length; index += 1) {
        paragragh[index] = paragragh[index].style.fontFamily = "'Times New Roman', Times, serif";
    }
    saveFonteFamily()
}

const fonte2 = document.getElementsByTagName("li")[7];
fonte2.addEventListener("click", Verdana);
function Verdana(event) {
    const paragragh = document.querySelectorAll("p")
    for (index = 0; index < paragragh.length; index += 1) {
        paragragh[index] = paragragh[index].style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif"
    }
    saveFonteFamily()
}

const fonte3 = document.getElementsByTagName("li")[8];
fonte3.addEventListener("click", Arial);
function Arial(event) {
    const paragragh = document.querySelectorAll("p")
    for (index = 0; index < paragragh.length; index += 1) {
        paragragh[index] = paragragh[index].style.fontFamily = "Arial, Helvetica, sans-serif";
    }
    saveFonteFamily()
}

const e1 = document.getElementsByTagName("li")[9];
e1.addEventListener("click", esp1);
function esp1 (event) {
    const paragragh = document.querySelectorAll("p")
    for (index = 0; index < paragragh.length; index += 1) {
        paragragh[index] = paragragh[index].style.lineHeight = "1.15"
    }
    saveEspaçamento ()
}

const e2 = document.getElementsByTagName("li")[10];
e2.addEventListener("click", esp2);
function esp2 (event) {
    const paragragh = document.querySelectorAll("p")
    for (index = 0; index < paragragh.length; index += 1) {
        paragragh[index] = paragragh[index].style.lineHeight = "1.5"
    }
    saveEspaçamento ()
}

const e3 = document.getElementsByTagName("li")[11];
e3.addEventListener("click", esp3);
function esp3 (event) {
    const paragragh = document.querySelectorAll("p")
    for (index = 0; index < paragragh.length; index += 1) {
        paragragh[index] = paragragh[index].style.lineHeight = "2"
    }
    saveEspaçamento ()
}

function saveBGC() {
    let saveBackgroundColor = document.querySelector("main").style.backgroundColor;
    localStorage.setItem("mainBackgroundColor", saveBackgroundColor);
}

function saveColor() {
    let saveColorParagraph = document.querySelector("main").style.color;
    localStorage.setItem("mainColor", saveColorParagraph);
}

function saveFonteFamily() {
    let saveFontFamilyParagrah = document.querySelector("p").style.fontFamily;
    localStorage.setItem("fontFamilyParagrah", saveFontFamilyParagrah);
}

function saveEspaçamento() {
    let espaçamentoParagraph = document.querySelector("p").style.lineHeight;
    localStorage.setItem("espaçamento",espaçamentoParagraph);
}

