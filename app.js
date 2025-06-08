let RandomNum = Math.floor(Math.random() * 10) + 1;
let i = 3;
console.log(RandomNum);
let lblH1 = document.getElementById("h1Lbl");
let inputText = document.getElementById("txtNum");
let GuessNum;

function clickAction() {
    GuessNum=inputText.value;
    if (i>0) {
        if (RandomNum < GuessNum) {
            document.getElementById("img").innerHTML = '<img src="img/try-again-never-again.gif" class="card-img-top" alt="" srcset="">';
            lblH1.innerHTML = `Your Guess Number is higher than Random Number!!You have ${i} chances`;


        }
        else if (RandomNum > GuessNum) {
            document.getElementById("img").innerHTML = '<img src="img/try-again-never-again.gif" class="card-img-top" alt="" srcset="">';
            lblH1.innerHTML = `Your Guess Number is Lower than Random Number!!You have ${i} chances`;

        }
        else if (RandomNum == GuessNum) {
            document.getElementById("img").innerHTML = '<img src="img/200.webp" class="card-img-top" alt="" srcset="">';
            lblH1.innerHTML = "Your Guess Number is correct";
            boolean=true;
            return;


        }
    }
    if (i == 0) {
            if (RandomNum < GuessNum) {
                document.getElementById("img").innerHTML = '<img src="img/gameover.gif" class="card-img-top" alt="" srcset="">';
                lblH1.innerHTML = "Game over,You have no chances";
                

            }
            else if (RandomNum > GuessNum) {
                document.getElementById("img").innerHTML = '<img src="img/gameover.gif" class="card-img-top" alt="" srcset="">';
                lblH1.innerHTML = "Game over,You have no chances";
                
            }
            else if (RandomNum == GuessNum) {
                document.getElementById("img").innerHTML = '<img src="img/200.webp" class="card-img-top" alt="" srcset="">';
                lblH1.innerHTML = "Your Guess Number is correct";
                
                return;
            }

    }
    if (i <= -1) {
            document.getElementById("img").innerHTML = '<img src="img/gameover.gif" class="card-img-top" alt="" srcset="">';
            lblH1.innerHTML = "Game over,You have no chances";
            return;
    }   
    i--;

}

