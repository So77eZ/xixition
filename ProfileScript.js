const AchiveAdd = document.getElementById("AchiveAdd");
const EventAdd = document.getElementById("EventAdd");

AchiveAdd.addEventListener("click", function (event) {
  event.preventDefault();
  AchiveAdd.classList.add("Added");
  alert("Achive");
});

EventAdd.addEventListener("click", function (event) {
  event.preventDefault();
  EventAdd.classList.add("Added");
  alert("Event");
});
