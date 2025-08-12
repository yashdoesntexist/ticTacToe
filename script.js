let boxes = document.querySelectorAll(".tab");
let restart = document.querySelector(".refresh");

let assignTurn = true;

const winningPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(assignTurn === true){
            box.innerText = "X";
            assignTurn = false;
        } else if(assignTurn === false){
            box.innerText = "O";
            assignTurn = true;
        } else{
            console.log("I should not be here");
        }
    });
});
boxes.forEach((box) =>{
    box.addEventListener("dblclick", () =>{
        box.innerText = "";
    })
})
restart.addEventListener("click", () =>{
    boxes.forEach((e) =>{
        e.innerText = "";
    });
 });