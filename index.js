const dodger = document.querySelector("#dodger");
dodger.style.background = "#ff69b4";
dodger.style.bottom = "100px";
dodger.style.left = "0px";

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft()
  } else if(event.key === "ArrowRight"){
    moveDodgerRight()
  }
});
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left;
  const left = parseInt(leftNumbers, 10);

//   if (left <0 ) {
    dodger.style.left = `${left - 1}px`;
//   }
}
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left < 40 ) {
    dodger.style.left = `${left + 1}px`;
  }

}