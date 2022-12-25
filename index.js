let homescorebtn = document.getElementById("home-score-btn-1")
let homescoreEl= document.getElementById("home-score")
let homescore=0
let guestscorebtn =  document.getElementById("guest-score-btn-1")
let guestscoreEl= document.getElementById("guest-score")
let guestscore=0

function hplus1() {
    homescore+=1
    homescoreEl.textContent=homescore
}

function hplus2() {
    homescore+=2
    homescoreEl.textContent=homescore
}

function hplus3() {
    homescore+=3
    homescoreEl.textContent=homescore
}
function gplus1() {
    guestscore+=1
    guestscoreEl.textContent=guestscore
}

function gplus2() {
    guestscore+=2
    guestscoreEl.textContent=guestscore
}

function gplus3() {
    guestscore+=3
    guestscoreEl.textContent=guestscore
}