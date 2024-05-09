const openPopUp = document.getElementById("AddActivity_pop_up");
const closePopUp = document.getElementById("pop_up_close");
const popUp = document.getElementById("pop_up");

openPopUp.addEventListener("click", function (event) {
  event.preventDefault();
  popUp.classList.add("active");
});

closePopUp.addEventListener("click", () => {
  // window.location.href = "../Pages/Activity.html";
  popUp.classList.remove("active");
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    popUp.classList.remove("active");
  }
});
