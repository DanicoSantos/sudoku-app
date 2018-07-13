const title = "Sodoku App";
window.document.title = title;

//Square prototype
const square = `
    <div class="square"></div>
`;

//Mini square prototype
const miniSqr = `
    <div class="miniSqr" onClick="nmbrpicker(this)">
        <input type="text">
    </div>
`;
const board = document.getElementById('mainBrd');


//Adds the Squares
for (let i = 0; i < 9; i++) {
    board.innerHTML += square;
}

const sqrClass = document.getElementsByClassName('square');



//Adds the mini squares
for (let i = 0; i < sqrClass.length; i++) {
    for (let j = 0; j < sqrClass.length; j++) {
        sqrClass[i].innerHTML += miniSqr;
    }
}



