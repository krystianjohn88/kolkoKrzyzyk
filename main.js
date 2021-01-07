const aFirst = document.querySelector(".b1");
const bFirst = document.querySelector(".b2");
const cFirst = document.querySelector(".b3");

const aSecend = document.querySelector(".b4");
const bSecend = document.querySelector(".b5");
const cSecend = document.querySelector(".b6");

const aTherd = document.querySelector(".b7");
const bTherd = document.querySelector(".b8");
const cTherd = document.querySelector(".b9");
const mainDiv = document.querySelector(".main");
const playBoard = document.querySelector(".playBoard");
const player = document.querySelector(".player> span");

const arrBoard = [aFirst, bFirst, cFirst, aSecend, bSecend, cSecend,
                aTherd, bTherd, cTherd];

let taggle = true;
let counter = 0;
function lineDrow(line1, line2, line3, deg){
    const arrLine = [line1, line2, line3];
    arrLine.forEach((e)=>{
        let elLina = document.createElement("hr");
            elLina.style.transform= `rotate(${deg}deg)`;
        if(deg=='45'||deg=='-45'){
            
            elLina.style.width='57px';
        }
        e.append(elLina);
    })
    }

//let elLina = document.createElement("hr");
//let elLina2 = document.createElement("hr");
//let elLina3 = document.createElement("hr");
function winResult() {
    counter = arrBoard.length;

    function playerWin() {
        if (player.innerHTML === "O") {
            playerWin = 'X'
        } else {
            playerWin = 'O'
        }
        return playerWin;

    };
    player.innerHTML = `Wygrał gracz ${playerWin()}`
    newGameBtn()
} 

function newGameBtn(remis){
    let nGameBnt = document.createElement("button");
    nGameBnt.textContent="Nowa Gra";
    mainDiv.append(nGameBnt);
    nGameBnt.addEventListener('click', (e)=>{
        e.preventDefault;
        counter=0;
        player.innerHTML = "X";
        arrBoard.forEach((e)=>{e.innerHTML=""})
        taggle=true;
        if(remis){
            document.querySelector('h2').innerHTML="Gracz:&nbsp<span>X</span>";
        }
        nGameBnt.remove();
    })
}


function win() {
    if (counter >= 5) {
        if (aFirst.innerHTML === bFirst.innerHTML && bFirst.innerHTML === cFirst.innerHTML && aFirst.innerHTML !== '') {
            winResult();
            lineDrow(aFirst, bFirst, cFirst, 0);
        } else if (
            aSecend.innerHTML !== '' && aSecend.innerHTML === bSecend.innerHTML && bSecend.innerHTML === cSecend.innerHTML) {
            winResult();
            lineDrow(aSecend, bSecend, cSecend, 0);
        } else if (
            aTherd.innerHTML !== '' && aTherd.innerHTML === bTherd.innerHTML && bTherd.innerHTML === cTherd.innerHTML) {
            winResult();
            lineDrow(aTherd, bTherd, cTherd, 0);
        } else if (
            aFirst.innerHTML !== '' && aFirst.innerHTML === aSecend.innerHTML && aTherd.innerHTML === aFirst.innerHTML) {
            winResult();
            lineDrow(aFirst, aSecend, aTherd, 90);
            
        } else if (
            bFirst.innerHTML !== '' && bFirst.innerHTML === bSecend.innerHTML && bTherd.innerHTML === bFirst.innerHTML) {
            winResult();
            lineDrow(bFirst, bSecend, bTherd, 90);
        } else if (
            cFirst.innerHTML !== '' && cFirst.innerHTML === cSecend.innerHTML && cTherd.innerHTML === cFirst.innerHTML) {
            winResult();
            lineDrow(cFirst, cSecend, cTherd, 90);
//            document.querySelectorAll('hr').style.transform(90deg);
        } else if (
            aFirst.innerHTML !== '' && aFirst.innerHTML === bSecend.innerHTML && aFirst.innerHTML === cTherd.innerHTML) {
            winResult();
            lineDrow(aFirst, bSecend, cTherd, 45);
        } else if (
            cFirst.innerHTML !== '' && cFirst.innerHTML === bSecend.innerHTML && cFirst.innerHTML === aTherd.innerHTML
        ) {
            winResult();
            lineDrow(cFirst, bSecend, aTherd, -45);
        }else if (counter == 9) {
            document.querySelector("body > div > h2").innerHTML = 'Remis';
            newGameBtn('remis');
        }


    }
}

function click() {
    if (counter < arrBoard.length && this.innerHTML === '' || this.innerHTML === `<span>X</span>` || this.innerHTML === `<span>O</span>`) {
        if (taggle === true) {
            this.innerHTML = "X";
            player.innerHTML = "O";
            taggle = !taggle;

        } else {
            this.innerHTML = "O";
            player.innerHTML = "X";
            taggle = !taggle;
        }
        counter++
        win();
    }
}

function mouseHover() {
    if (!this.innerHTML && counter < 9) {
        this.innerHTML = `<span>${player.innerHTML}</span>`;
    }
}

function mouseOut() {
    if (this.innerHTML === `<span>${player.innerHTML}</span>`) {
        this.innerHTML = '';
    }
}
for (let i = 0; i < arrBoard.length; i++) {
    arrBoard[i].addEventListener('click', click);
    arrBoard[i].addEventListener('mouseenter', mouseHover);
    arrBoard[i].addEventListener('mouseleave', mouseOut);
}
