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

function restartGame(){
    restart.addEventListener("click", () =>{
    boxes.forEach((e) =>{
        e.innerText = "";
    });
 });
}

const checkWin = () =>{
    for(let pattern of winningPattern){
            let pos1 = boxes[pattern[0]].innerText;
            let pos2 = boxes[pattern[1]].innerText; 
            let pos3 = boxes[pattern[2]].innerText;

            if(pos1 != "" && pos2 != "" && pos3 != ""){
                if(pos1 == pos2 && pos2 == pos3){
                    alert(`Congrats ${pos1} won!`);
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
        checkWin();

    });
});
boxes.forEach((box) =>{
    box.addEventListener("dblclick", () =>{
        box.innerText = "";
    })
})


restartGame();