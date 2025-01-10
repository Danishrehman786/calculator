function btncalculator(newChar) {
    let cal = document.getElementById("cal");
    let lastChar = cal.value.slice(-1);
    if ((lastChar === "+" || lastChar === "-") && (newChar === "+" || newChar === "-")) {
        cal.value = cal.value.slice(0, -1) + newChar;
    }

    else if (newChar == "=") {
        cal.value = eval(cal.value)
    }

    else if (newChar === "CE") {
        cal.value = "";
    }
    else if (newChar === "C") {
        cal.value = "";
    }
    else if (newChar === "ARROW") {
        cal.value = cal.value.slice(0, -1);
    }
    else if (newChar === "%") {
        cal.value = eval(cal.value) / 100;
    }
    else {

        cal.value += newChar;
    }

}