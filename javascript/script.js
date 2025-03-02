document.getElementById("blog-button").addEventListener("click", function () {
  window.location.href = "/Blog.html";
});

const date = new Date();
const fixDate = document.getElementById("fix-date");
fixDate.innerText = date.toDateString();

const totalButton = document.querySelectorAll(".total-btn");
let headerCountElement = document.getElementById("count-increased");
let sectionCountElement = document.getElementById("count-decreased");
let historyDiv = document.getElementById("history-title");
const mainBody = document.getElementById("main-body");

for (let i = 0; i < totalButton.length; i++) {
  let button = totalButton[i];
  button.addEventListener("click", function (e) {
    let headerCount = parseInt(headerCountElement.innerText);
    let sectionCount = parseInt(sectionCountElement.innerText);

    headerCount++;
    if (sectionCount != 0) {
      sectionCount--;
    }
    headerCountElement.innerText = headerCount;
    sectionCountElement.innerText = sectionCount;

    const btn = document.getElementById(`${e.target.id}`);
    const heading = document.getElementById(`title-${e.target.id}`).innerText;
    const par = document.createElement("p");
    par.innerText = heading;
    par.classList.add(
      "text-xl",
      "font-bold",
      "text-gray-300",
      "bg-slate-100",
      "p-2"
    );
    historyDiv.appendChild(par);
    btn.classList.add("disabled");
    btn.disabled = true;
  });
}

