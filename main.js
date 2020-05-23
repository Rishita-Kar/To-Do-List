const input = document.getElementById("input");
const list = document.getElementById("list");

input.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    addNewItem();
  }
});

function addNewItem () {
  const li = document.createElement("li");
  li.textContent = input.value;
  li.addEventListener("click", removeItem);
  list.appendChild(li);
  input.value = "";
}

function removeItem (e) {
  list.removeChild(e.target);
}
