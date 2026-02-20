// alert("connected");
// get the element and event listening
// example 1
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "the paragraph is changed";
  });
document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
  });

document.getElementById("changeOrder").addEventListener("click", function () {
  let order = document.getElementById("coffeeType");
  order.textContent = "Espresso";
  order.style.backgroundColor = "blue";
});
document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  //   let NewItem = document.createElement("h2");
  //   NewItem.textContent = "new heading added";
  newItem.textContent = "Pizza";
  document.getElementById("shoppingList").appendChild(newItem);
  //   document.getElementById("example-4").appendChild(NewItem);
});
document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let tasklist = document.getElementById("Tasklist");
    tasklist.lastElementChild.remove();
  });
document
  .getElementById("clickMeButton")
  .addEventListener("mouseover", function () {
    alert("mouse hover");
  });
document.getElementById("teaList").addEventListener("click", function (event) {
  alert(event.target.textContent);
});
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    // alert("submitted");
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    document.getElementById(
      "feedbackDisplay"
    ).textContent = `feedback is ${feedback}`;

    // console.log(event.target);
  });
// example 9
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "dom content loaded fully";
});
document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let description = document.getElementById("descriptionText");
    description.classList.toggle("highlight");
  });
// example 10
