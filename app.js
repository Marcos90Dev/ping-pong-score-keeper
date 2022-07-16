const btnPlayerOne = document.querySelector("#btnPlayerOne");
const btnPlayerTwo = document.querySelector("#btnPlayerTwo");
const btnScoreReset = document.querySelector("#btnScoreReset");
const spanPlayerOneScore = document.querySelector(".spanPlayerOneScore");
const spanPlayerTwoScore = document.querySelector(".spanPlayerTwoScore");
const selectPlayingTo = document.querySelector("#score-select")

let playerOneScore = 0;
let playerTwoScore = 0;
let playingToValue = parseInt(selectPlayingTo.value);

function changePlayingToValue() {
    playingToValue = parseInt(selectPlayingTo.value);
    spanPlayerOneScore.textContent = playerOneScore;
    selectPlayingTo.disabled = true;
}

function btnPlayerOneClick() {
    playerOneScore++
    spanPlayerOneScore.textContent = playerOneScore;
    winCheck();
}
function btnPlayerTwoClick() {
    playerTwoScore++
    spanPlayerTwoScore.textContent = playerTwoScore;
    winCheck();
}
function btnScoreResetClick() {
    spanPlayerOneScore.textContent = 0;
    spanPlayerTwoScore.textContent = 0;
    playerOneScore = 0;
    playerTwoScore = 0;
    btnPlayerOne.disabled = false;
    btnPlayerTwo.disabled = false;
    selectPlayingTo.disabled = false;
    spanPlayerOneScore.classList.remove("has-text-success", "has-text-danger");
    spanPlayerTwoScore.classList.remove("has-text-success", "has-text-danger");
}

function winCheck() {
    if (playerOneScore === playingToValue) {
        btnPlayerOne.disabled = true;
        btnPlayerTwo.disabled = true;
        spanPlayerOneScore.classList.add("has-text-success");
        spanPlayerTwoScore.classList.add("has-text-danger");
    } else if (playerTwoScore === playingToValue) {
        btnPlayerOne.disabled = true;
        btnPlayerTwo.disabled = true;
        spanPlayerOneScore.classList.add("has-text-danger");
        spanPlayerTwoScore.classList.add("has-text-success");
    }
}


btnPlayerOne.addEventListener("click", btnPlayerOneClick);
btnPlayerTwo.addEventListener("click", btnPlayerTwoClick);
btnScoreReset.addEventListener("click", btnScoreResetClick);
selectPlayingTo.addEventListener("change", changePlayingToValue)