let RandomNum = Math.floor(Math.random() * 10) + 1;
let i = 3;

let boolean = false;
let lblH1 = document.getElementById("h1Lbl");
lblH1.innerHTML =`<div class="alert alert-primary" role="alert">
                You have 3 chances
            </div>` ;
function clickAction() {

    if (boolean != true) {
        
        let inputText = document.getElementById("txtNum");

        GuessNum = inputText.value;

        if (RandomNum < GuessNum) {
            document.getElementById("img").innerHTML = '<img src="img/try-again-never-again.gif" class="card-img-top" alt="" srcset="">';
            lblH1.innerHTML = `<div class="alert alert-warning" role="alert">
                Your Guessesd Number is higher than Random Number!!You have ${i} chances
            </div>`;


        }
        else if (RandomNum > GuessNum) {
            document.getElementById("img").innerHTML = '<img src="img/try-again-never-again.gif" class="card-img-top" alt="" srcset="">';
            lblH1.innerHTML = `<div class="alert alert-warning" role="alert">
                Your Guessesd Number is Lower than Random Number!!You have ${i} chances
            </div>`;

        }
        else if (RandomNum == GuessNum) {
            document.getElementById("img").innerHTML = '<img src="img/200.webp" class="card-img-top" alt="" srcset="">';
            lblH1.innerHTML = `<div class="alert alert-success" role="alert">
                Your Guessesd Number is correct
            </div>`;
            boolean=true;
            return;


        }
        if (i <= 0) {
            if (RandomNum < GuessNum) {
                document.getElementById("img").innerHTML = '<img src="img/gameover.gif" class="card-img-top" alt="" srcset="">';
                lblH1.innerHTML = `<div class="alert alert-dark" role="alert">
                Your game over.Random number is ${RandomNum}
            </div>`;
                return;

            }
            else if (RandomNum > GuessNum) {
                document.getElementById("img").innerHTML = '<img src="img/gameover.gif" class="card-img-top" alt="" srcset="">';
                lblH1.innerHTML = `<div class="alert alert-dark" role="alert">
                Your game over.Random number is ${RandomNum}
            </div>`;
                return;
            }
            else if (RandomNum == GuessNum) {
                document.getElementById("img").innerHTML = '<img src="img/200.webp" class="card-img-top" alt="" srcset="">';
                lblH1.innerHTML = `<div class="alert alert-success" role="alert">
                Your Guessesd Number is correct
            </div>`;
                boolean=true;
                return;


            }


        }


        i--;
    }
    else if(boolean == true){
        lblH1.innerHTML = "You won.If you want to restart the game,Restart this website";
    }

}

