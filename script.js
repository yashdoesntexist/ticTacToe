let boxes = document.querySelectorAll(".tab");
let restart = document.querySelector(".refresh");
let result = document.querySelector(".alert");

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
let count = 0;

function checkDraw(){
    if(count == 9){
        boxes.forEach((e)=>{
        e.innerText = "";
        result.innerText="Last game was a draw"
        count=0;
    });
    }
}



const checkWin = () =>{
    for(let pattern of winningPattern){
            let pos1 = boxes[pattern[0]].innerText;
            let pos2 = boxes[pattern[1]].innerText; 
            let pos3 = boxes[pattern[2]].innerText;

            if(pos1 != "" && pos2 != "" && pos3 != ""){
                if(pos1 == pos2 && pos2 == pos3){
                    result.innerText = `Congrats ${pos1} won the last game!`;
                    count = 0;
                    boxes.forEach((e)=>{
                        e.innerText= "";
                    });
                    
                }
                
            }


    }
}

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
        count++;
        checkWin();
        checkDraw();
        console.log(count);

    });
});

function restartGame(){
    restart.addEventListener("click", () =>{
    count = 0;
    result.innerText ="";
    boxes.forEach((e) =>{
        e.innerText = "";
    });
 });
}
// used for debugging only 
// boxes.forEach((box) =>{
//     box.addEventListener("dblclick", () =>{
//         box.innerText = "";
//     });
// })


restartGame();
