// --------counter------------
const count = document.querySelector("#count");
const increment = document.querySelector("#increment");
const decrement = document.querySelector("#decrement");
const reset = document.querySelector("#reset");

increment.addEventListener("click", function() {
  count.innerText = Number(count.innerText) + 1;
});

decrement.addEventListener("click", function() {
  if (Number(count.innerText) === 0) {
    alert("Unavailable");
  } else {
    count.innerText = Number(count.innerText) - 1;
  }
});

reset.addEventListener("click", function() {
  count.innerText = 0;
});
