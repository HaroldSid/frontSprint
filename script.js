//!!!!!!! outils

const randomN = (min, max) => {
    let n;
    n = Math.round(Math.random() * (max - min) + min);
    return n;
}

//!!!!!!! Dates
let today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;

dateN = Date.now();
let time = Math.floor(Date.now() / 1000);
let sec = time % 60;
let min = ((time -sec) / 60) % 60;
let hour = (((time - sec - 60 * min) / 60) / 60) % 24;

// Anchorage (USA) UTC−8
const timeAnc = document.querySelector(".anchorage")

const timeAncRel = () => {
    console.log(hour + "h" + min + "m" + sec + "s");
    console.log(today)
}

setInterval(timeAncRel, 1000);
//Reykjavik (Iceland) UTC+0

//Brussel UTC+2

//Saint-Petersburg (Russia) UTC+3


//!!!!!!! Moles

// const holes = document.querySelectorAll(".hole");
// const score = document.querySelector(".score");
// const difficulty = document.querySelectorAll(".difficulty")
// const nMole = 9;
// let difficult = 2000;
// let points = 0;

// const moleAp = (nMole) => {
//     const ran = randomN(0, nMole - 1);
//     console.log(holes[ran].style.backgroundColor);
//     if (holes[ran].style.backgroundColor == "white") {
//         holes[ran].style.backgroundColor = 'red'
//         setTimeout(() => { holes[ran].style.backgroundColor = 'white' }, difficult)
//     }
//     else {
//         moleAp(nMole);
//     }
// }

// const moleHi = (mole) => {
//     ;
// }

// const addPoint = (e) => {
//     if (e.target.style.backgroundColor == 'red') {
//         points++;
//         e.target.style.backgroundColor = 'white';
//     }
//     else {
//         points--;
//     }
//     score.textContent = `Score : ${points}`;
// }

// const changeDif = (e) => {
//     const butDif = e.target;
//     if (butDif.classList.contains("easy")) {
//         difficult = 2000;
//     }
//     else if (butDif.classList.contains("medium")) {
//         difficult = 1000;
//     }
//     else if (butDif.classList.contains("hard")) {
//         difficult = 500;
//     }
// }

// for (let hole of holes) {
//     hole.style.backgroundColor = 'white';
//     hole.addEventListener("click", addPoint);
// }

// for (let dif of difficulty) {
//     dif.addEventListener("click", changeDif)
// }

// setInterval(() => {moleAp(nMole)}, 1000);


// !!!!!!! Timeout intervals exercices 1 and 2

// const wordB = "ok";
// let i = 0; 
// let interval;
// const buttonType = document.createElement("button");
// const output = document.createElement("h2");
// const elaspeT = document.createElement("p");
// const initTime = Date.now();

// buttonType.textContent = wordB;

// document.body.append(buttonType);
// document.body.append(output);
// document.body.append(elaspeT);

// const typeWryter = (word) => {
//     if (i < word.length){
//         output.textContent += word[i];
//         i++;
//     }
//     else {
//         clearInterval(interval);
//         i = 0;
//     }
// }

// const getElapsedTime = () => {
//     return Number((Date.now() - initTime) / 1000).toFixed(0);
// }

// const elapseTimer = () => {
//     let sec = getElapsedTime();
//     let min = 0;
//     while (sec >= 10) {
//         sec -= 10;
//         min++;
//     }
//     if (min != 0) {
//         elaspeT.textContent = min + ' min' + sec + ' s';
//     }
//     else {
//         elaspeT.textContent = sec + ' s';
//     }
// }


// buttonType.addEventListener("click", () => { interval = setInterval(() => { typeWryter(wordB) }, 1000) });

// setInterval(elapseTimer, 1000);