let scoreEl = document.getElementById("score-el");
let scoreElG = document.getElementById("score-el-g");
let score = 0;
let scoreG = 0;

function plusOne() {
    score += 1;
    scoreEl.textContent = score;
}

function plusTwo() {
    score += 2;
    scoreEl.textContent = score;
}

function plusThree() {
    score += 3;
    scoreEl.textContent = score;
}

function plusOneG() {
    scoreG += 1;
    scoreElG.textContent = scoreG;
}

function plusTwoG() {
    scoreG += 2;
    scoreElG.textContent = scoreG;
}

function plusThreeG() {
    scoreG += 3;
    scoreElG.textContent = scoreG;
}