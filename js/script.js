const container = document.getElementById('container');
let color = "blue";
let root = document.documentElement;

function createGrid(size = 16) {

    let cell;
    let cellSize = 520/size;
    container.style.gridTemplateColumns = "repeat(" + size + ","+cellSize+"px)";
    container.style.gridTemplateRows = "repeat(" + size + ","+cellSize+"px)";
    for (let i = 0; i < size*size; i++) {
        cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
}

function randomColor() {
    let letters = "0123456789ABCDF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

function setColor(colorChoice){
    if(colorChoice == "black"){
       color = "black";    
    }
    if(colorChoice == "white"){
        color = "white";
    }
    if(colorChoice == "random"){
        color = "random";
    }
}

function mouseOverCells() {

 let cells = Array.from(document.querySelectorAll('.cell'));
    cells.forEach(function (e) {
        e.addEventListener("mouseover", function () {
            e.classList.add("chosen");
            if(color!= "random"){
                e.style.backgroundColor = color+"";
            }else{
                e.style.backgroundColor = randomColor();
            }  
        });
    });
}

function changeGridSize() {

    let btn = document.querySelector(".btn");
    
    btn.addEventListener("click", () => {
        deleteCells();
        let no = prompt("Choose number between 2 and 100");
        if (no <= 1 || no >= 101) {
            alert("You must choose between 2 and 100");
            createGrid();
            mouseOverCells();
        } else if (no === '' || no === null) {
            alert("You must choose between 2 and 100");
            createGrid();
        } else {
            createGrid(no);
            mouseOverCells();
        }
    });
}

function deleteCells(){
    let cells = Array.from(document.querySelectorAll(".cell"));
    cells.forEach(cell => container.removeChild(cell));
}

function reset() {
    let btn = document.getElementById("reset");
    btn.addEventListener("click", () =>  location.reload());
}

function initialize() {
    createGrid();
    changeGridSize();
    reset();
    mouseOverCells();
}
initialize();

