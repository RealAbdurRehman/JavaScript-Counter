let count = 0;
let countEl = document.getElementById("count-el");
let savedValuesDisplayer = document.getElementById("saved-values");
let clearBtn = document.querySelector(".clear");

function colorUpdater() {
    if (count > 0) {
        countEl.style.color = "rgb(0, 160, 0)";
        countEl.classList.remove("blue", "red");
        countEl.classList.add("green");
    } else if (count < 0) {
        countEl.style.color = "rgb(200, 0, 0)";
        countEl.classList.remove("green", "blue");
        countEl.classList.add("red");
    } else {
        countEl.style.color = "rgb(0, 0, 200)";
        countEl.classList.remove("red", "green");
        countEl.classList.add("blue");
    };
};

function increase() {
    count++;
    countEl.textContent = count;
    colorUpdater();
};

function decrease() {
    count--;
    countEl.textContent = count;
    colorUpdater();
};

function reset() {
    count = 0;
    countEl.textContent = count;
    colorUpdater();
};

function save() {
    let savedValue = `${count}, `;
    if (savedValuesDisplayer.textContent === "None") {
        savedValuesDisplayer.textContent = "";
    };
    savedValuesDisplayer.textContent += savedValue;
};

clearBtn.addEventListener("click", function() {
    savedValuesDisplayer.textContent = "None";
});