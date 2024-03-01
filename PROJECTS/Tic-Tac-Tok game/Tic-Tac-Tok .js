let boxes = document.querySelectorAll(".box");
let resetbtm = document.querySelector(".reset");

let turnO = true;
let count = 0;

const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [2, 5, 8],
    [2, 4, 6],
    [1, 4, 7],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {

            box.classList.remove("shadow");
        
        if(turnO == true) {
            box.innerText = 'X';
            turnO = false;
        }
        else {
            box.innerText = 'O';
            turnO = true;
        }

        box.disabled = true;
        
        count++;

        let chek = checkwinner();

        if (count === 9 && !chek) {
            gameDraw();
        }

        // checkwinner();

    });
});

const gameDraw = function() {
    setTimeout(() => {
        alert("The game was Draw!");
        dissabalbtn();
        return true;
    }, 500)
    
    dissabalbtn();
}

let checkwinner = function() {
    for(pattern of winpattern) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != '' && pos2val != '' && pos3val != '') {
            if(pos1val === pos2val && pos2val === pos3val && pos1val === pos3val) {
                // console.log("the playear is win");
                if(pos1val === 'O' && pos2val === 'O' && pos3val === 'O') {
                    console.log("the playear 2 is win");
                    // alert("the playear 2 is win");
                    setTimeout(() => {
                        alert("the playear 2 is win");
                        dissabalbtn();
                        return true;
                    }, 500);
                }
                else {
                    console.log("the playear 1 is win");
                    // alert("the playear 1 is win");
                    setTimeout(() => {
                        alert("the playear 1 is win");
                        dissabalbtn();
                        return true;
                    }, 500);
                }
            }
        }
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
      box.classList.add("shadow");
    }
};

const dissabalbtn = function() {
    for(let box of boxes){
        box.disabled = true;
    }
};

const resetgame = function() {
        turnO = true;
        count = 0;
        enableBoxes();           
}

resetbtm.addEventListener("click", resetgame);