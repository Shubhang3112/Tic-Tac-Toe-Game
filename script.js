let player=1;
let board = [0,0,0,0,0,0,0,0,0];
let ct=0;
let winConditions=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
let isWin=() => {
    let win;
    for (const winCondition of winConditions) {
        win=1;
        for (const symbol of winCondition) {
            // console.log(winCondition);
            if (board[symbol]!=player) {
                win=0;
                break;
            }     
        }
        if(win==1)break;
    }
    console.log(win);
    if(win==1)return true;
    else return false;
}
function click(i){
    ct++;
    board[i]=player;
    console.log(board);
    let parentDiv = buttons[i].parentElement;
    parentDiv.removeChild(buttons[i]);
    buttons[i].style.display='none';   
    // let symbol= document.createElement("h3");
    let symbol=parentDiv;
    if (player==1) {
        symbol.innerText="X";
    } else {
        symbol.innerText="0"
    }
    symbol.classList.add("symbol");
    // parentDiv.appendChild(symbol);    
    console.log(symbol.classList);
    if (isWin(player)) {
        // document.getElementById("body").style.visibility="hidden";
        // alert(`Player ${player} has won`);
        for(let i=0;i<9;i++){
            buttons[i].style.display='none';   
        }
        document.querySelector("#textbox").innerText=`Player ${player} has won`;
        return;
    }
    if (player==1) {
        document.querySelector("#textbox").innerText=" Player 2, Please make your move";
        player=2;
    } else {
        document.querySelector("#textbox").innerText=" Player 1, Please make your move";
        player=1;
    }
    // buttons[i].removeEventListener(click);
    if (ct==9) {
        document.querySelector("#textbox").innerText="It's a Draw";
        
    }
}
let buttons=document.querySelectorAll(".button");
console.log(buttons);
for (let i=0;i<9;i++) {
    // let button = document.getElementById(`button${i+1}`);
    buttons[i].onclick = function() {click(i)};
}