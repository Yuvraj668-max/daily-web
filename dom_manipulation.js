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
  newItem.textContent = "Pizza";
  document.getElementById("shoppingList").appendChild(newItem);
});
document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let tasklist = document.getElementById("Tasklist");
    tasklist.lastElementChild.remove();
  });
