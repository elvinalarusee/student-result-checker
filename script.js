document.getElementById("checkBtn")
.addEventListener("click", function() {

    let name = document.getElementById("name").value;
    let mark = document.getElementById("mark").value;

    let result;

    if (mark >= 50) {
        result = "Pass";
    } else {
        result = "Fail";
    }

    document.getElementById("result").textContent =
        "Name: " + name +
        " | Mark: " + mark +
        " | Result: " + result;
});