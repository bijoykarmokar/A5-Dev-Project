document.getElementById("blog-button").addEventListener("click", function () {
  window.location.href = "../BlogPage/index.html";
});

const date = new Date();
console.log(date.getTime())
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
    alert("Board updated successfully.");
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
    par.innerText ="You have completed the task " + heading + " at " + date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true})
    
    par.classList.add(
      "text-xl",
      "font-medium",
      "text-gray-600",
      "bg-slate-100",
      "p-2",
      "mt-10"
    );
    historyDiv.appendChild(par);
    btn.classList.add("disabled");
    btn.disabled = true;
    if(sectionCount ===0){
      alert("Contrates!!! You have completed all the task successfully.");
    }
  });
}
document.getElementById("clear-btn").addEventListener("click", function (e) {
  historyDiv.innerHTML = "";
});
let bgArr=["bg-red-100","bg-green-100","bg-yellow-100","bg-orange-100","bg-blue-100","bg-tomato-100","bg-gray-100","bg-cyan-100","bg-purple-100","bg-pink-100"];

document.getElementById("theme-btn").addEventListener("click", function (e) {
    mainBody.classList.add(`${bgArr[Math.round(Math.random()*9)]}`) 
});
