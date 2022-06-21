let ratingItem = document.querySelectorAll(".rating-item");
let ratingNumber = "";
// console.log(ratingItem);
// map throught the rating items and add event listeners
ratingItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("selected")) {
      item.classList.remove("selected");
    } else {
      // remove active class from previous siblings
      let activeSiblings = document.querySelectorAll(".rating-item.selected");
      activeSiblings.forEach((sibling) => sibling.classList.remove("selected"));
      item.classList.add("selected");
      //   console.log(item.innerHTML);
      ratingNumber = item.innerHTML;
    }
  });
});

let submitButton = document.querySelector(".button");

// console.log(submitButton);

submitButton.addEventListener("click", () => {
  document.querySelector(".show").style.display = "none";
  document.querySelector(".hide").style.display = "block";
  console.log(ratingNumber);

  document.querySelector(
    ".result"
  ).innerHTML = `<p>You selected ${ratingNumber} out of 5</p>`;
});
