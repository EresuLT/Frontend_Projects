let random = Math.floor(Math.random() * 100) + 1;
console.log(random);
let input = document.getElementById('numInput');
let check = document.getElementById('check-btn')
let result = document.getElementById('results');
const value = []
let i = 0;
input.focus();
input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        check.click();
    }
});

check.addEventListener("click", function () {
    i++;
    let inputValue = parseInt(document.getElementById("numInput").value, 10);
    value.push(inputValue);
    document.getElementById("try").textContent = "Your guess: " + value.join('/');
    if (inputValue > random) {
        result.innerHTML = "You're far away from the number, step down...";
    }
    else if (inputValue < random) {
        result.innerHTML = "You're far away from the number, step up...";
    }
    else if (inputValue === random) {
        alert(" Congrulations! You found the number in " + i + " trying.");
        document.location.reload(true);
    }
    document.getElementById('numInput').value = "";
})