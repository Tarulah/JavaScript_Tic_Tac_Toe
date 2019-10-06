// Your code here!
class Game {

    constructor() {

        this.turn = 1;
        this.gameBoard = document.getElementsByTagName("button");
        this.info = document.getElementById("info");

        for (let i = 0; i < this.gameBoard.length; i++) {

            this.gameBoard[i].addEventListener("click", function (event) {
                mygame.eventHandling(i);
                mygame.turn++;
            });
        }

    }

    eventHandling(index) {

        let button = this.gameBoard[index];

        if ((mygame.turn % 2) === 1) {
            button.textContent = "X";

            if (mygame.checkWin("X") == true) {
                this.info.textContent = "X voitti!";
            }
            else {
                this.info.textContent = "O:n vuoro";
            }
            
        }
        else {
            button.textContent = "O";

            if (mygame.checkWin("O") == true) {
                this.info.textContent = "O voitti!";
            }
            else {
                this.info.textContent = "X:n vuoro";
            }
        }

        button.disabled = true;
    }

    checkWin(pelaaja) {

        let temp = 0;

        for (let i = 0; i < 25; i+=5) {
            for (let j = 0; j < 5; j++) {
                if (this.gameBoard[i + j].textContent === pelaaja) {
                    temp++;
                    if (temp === 5) {
                        return true;
                    }
                }
                else {
                    temp = 0;
                }
            }
        }

        temp = 0;

        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 25; j+=5) {
                if (this.gameBoard[i + j].textContent === pelaaja) {
                    temp += 5;
                    if (temp === 25) {
                        return true;
                    }
                }
                else {
                    temp = 0;
                }
            }
        }

        temp = 0;

        for (let i = 0; i < 5; i++) {
            if (this.gameBoard[i * 6].textContent === pelaaja) {
                temp++;
                if (temp === 5) {
                    return true;
                }
            }
        }

        temp = 0;

        for (let i = 1; i < 6; i++) {
            if (this.gameBoard[i * 4].textContent === pelaaja) {
                temp++;
                if (temp === 5) {
                    return true;
                }
            }
        }        

        return false;
    }
}

let mygame = new Game();
