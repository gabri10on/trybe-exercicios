function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};
  
createDaysOfTheWeek();
  
// Escreva seu código abaixo.

//Ex1
function createDaysOfTheMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const daysContainer = document.querySelector("#days");

    for (index = 0 ; index < dezDaysList.length ; index += 1) {
        let daysUnity = dezDaysList[index];
        
        let daysUnityLi = document.createElement("li");
        daysUnityLi.innerText = daysUnity;
        daysUnityLi.className = "day";
        

        daysContainer.appendChild(daysUnityLi);
    }

    const day24 = document.querySelectorAll("#days li")[25];
    day24.className = "day holiday";

    const day25 = document.querySelectorAll("#days li")[26];
    day25.className = "day holiday friday";

    const day31 = document.querySelectorAll("#days li")[32];
    day31.className = "day holiday";

    const day4 = document.querySelectorAll("#days li")[5];
    day4.className = "day friday";

    const day11 = document.querySelectorAll("#days li")[12];
    day11.className = "day friday";

    const day18 = document.querySelectorAll("#days li")[19];
    day18.className = "day friday";
}
createDaysOfTheMonth();

//Ex2
const button = document.createElement("button");

function addButton(buttonName) {
    const buttonContainer = document.querySelector(".buttons-container");
    buttonContainer.appendChild(button);
    button.innerText = buttonName;
    button.id = "btn-holiday";
}
addButton("Feriados");

//Ex3
button.addEventListener("click", addColor);

function addColor(event) {
    const holiday1 = document.querySelectorAll(".holiday")
    if (holiday1[1].style.backgroundColor !== "white"){
        for (index = 0; index < holiday1.length; index += 1) {
            const holiday2 = holiday1[index]
            holiday2.style.backgroundColor = "white";
        } 
    }
    else {
        for (index = 0; index < holiday1.length; index += 1) {
            const holiday2 = holiday1[index]
            holiday2.style.backgroundColor = "#eee";
        } 
    }
}

//Ex4
const button2 = document.createElement("button");

function addButton2(buttonName2) {
    const buttonContainer2 = document.querySelector(".buttons-container");
    buttonContainer2.appendChild(button2);
    button2.innerText = buttonName2;
    button2.id = "btn-friday";
}
addButton2("Sexta-feira");

//Ex5
button2.addEventListener("click", mudançaDeTexto);

function mudançaDeTexto(event) {
    const friday1 = document.querySelectorAll(".friday")
    if (friday1[0].innerText === "4"){
        for (index = 0; index < friday1.length; index += 1) {
            const friday2 = friday1[index]
            friday2.innerText = "SEXTOU!";
        } 
    }
    else {
        document.querySelectorAll(".friday")[0].innerText = "4";
        document.querySelectorAll(".friday")[1].innerText = "11";
        document.querySelectorAll(".friday")[2].innerText = "18";
        document.querySelectorAll(".friday")[3].innerText = "25";
    }
}

//Ex6
const dayNumber = document.querySelectorAll(".day");
for (index = 0; index < dayNumber.length; index += 1) {
    const dayLi = dayNumber[index];
    dayLi.addEventListener("mouseover", zoomOn);
    dayLi.addEventListener("mouseleave", zoomOf);
}

function zoomOn(event) {
    event.target.style.fontSize = "25px"
}

function zoomOf(mudarFonte2) {
    event.target.style.fontSize = "20px"
}

//Ex7
function addTarefa(tarefa) {
    const adcionarTarefa = document.createElement("span");
    const spanContainer = document.getElementsByClassName("my-tasks")[0];
    spanContainer.appendChild(adcionarTarefa);
    adcionarTarefa.innerText = tarefa;
}
addTarefa("Projeto")

//Ex8
function addCor(cor) {
    const adicionarCor = document.createElement("div");
    const corContainer = document.getElementsByClassName("my-tasks")[0];
    corContainer.appendChild(adicionarCor);
    adicionarCor.style.backgroundColor = cor;
    adicionarCor.className = "task";
}
addCor("blue")

//Ex9
const clickDiv = document.querySelectorAll(".my-tasks div")[0];

clickDiv.addEventListener("click", divEvent);

function divEvent(event) {
    if (clickDiv.className !== ("task task-selected")) {
        event.target.className = ("task task-selected")
    }
    else (
        event.target.className = ("task")
    )
}

//Ex10
const dayLength = document.querySelectorAll(".day")
for (index = 0; index < dayLength.length; index += 1) {
    const dayListClick = dayLength[index]
    dayListClick.addEventListener("click", dayClick)
}

function dayClick(event) {
    const backgroundColor = document.querySelectorAll(".my-tasks div")[0].style.backgroundColor;
    if (event.target.style.color !== backgroundColor) {
        event.target.style.color = backgroundColor
    }
    else {
        event.target.style.color = "rgb(119,119,119)"
    }
}