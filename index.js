// Move Dodger Left Code
const dodger = document.getElementById("dodger")

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "")
    const left = parseInt(leftNumbers, 10)
    if (left > 0) {
        dodger.style.left =`${left -1}px`
    }
}
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft()
    }
})

//Move Dodger Right Code
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "")
    const left = parseInt(leftNumbers, 10)
    if (left < 360) {
        dodger.style.left = `${left + 1}px`
    }
}
document.addEvenetListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight()
    }
})