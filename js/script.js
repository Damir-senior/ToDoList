const btn = document.querySelector("#btn");
const input = document.querySelector("#input");
const push = document.querySelector(".forms");

btn.addEventListener("click", function () {
  let pushedItems = document.createElement("div");
  pushedItems.className = "form-items";
  push.appendChild(pushedItems);
  pushedItems.innerText = input.value;
  input.value = "";
  pushedItems.addEventListener("click", function () {
    pushedItems.remove();
  });
});
