let string = "";
let midString = "";
let resString = "";
let dummy1 = "";
let dummy2 = "";
document.querySelector(".exp").innerHTML = string;
document.querySelector(".result").innerHTML = string;
document.querySelector(".mid-calc").innerHTML = string;
let buttons = document.querySelectorAll(".btn");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (event) => {
    pressedButton = event.target.innerHTML;
    if (pressedButton === "C") {
      try {
        eval(resString);
        string = "";
        dummy1 = "";
        dummy2 = "";
        resString = "";
        midString = "";
        document.querySelector(".result").innerHTML = string;
      } catch (error) {
        string = "";
        dummy1 = "";
        dummy2 = "";
        resString = "";
        document.querySelector(".result").innerHTML = string;
      }
    } else if (pressedButton === "AC") {
      string = "";
      midString = "";
      resString = "";
      dummy1 = "";
      dummy2 = "";
      document.querySelector(".exp").innerHTML = string;
      document.querySelector(".result").innerHTML = string;
      document.querySelector(".mid-calc").innerHTML = string;
    } else if (pressedButton === "=") {
      try {
        resString = midString + string;
        document.querySelector(".exp").innerHTML = resString;
        resString = eval(resString);
        document.querySelector(".result").innerHTML = resString;
        dummy1 = resString;
        document.querySelector(".mid-calc").innerHTML = "";
      } catch (error) {
        string = "Error";
        document.querySelector(".result").innerHTML = string;
      }
    } else {
      if (
        pressedButton === "+" ||
        pressedButton === "-" ||
        pressedButton === "X" ||
        pressedButton === "*" ||
        pressedButton === "/" ||
        pressedButton === "%"
      ) {
        if (resString === "") {
          dummy1 = eval(midString + string);
          document.querySelector(".mid-calc").innerHTML = dummy1;
          midString = midString + string + pressedButton;
          document.querySelector(".result").innerHTML = "";
          document.querySelector(".exp").innerHTML = midString;
          dummy2 = "";
          string = "";
        } else {
          midString = dummy1 + pressedButton;
          document.querySelector(".exp").innerHTML = midString;
          document.querySelector(".result").innerHTML = "";
          resString = "";
          string = "";
        }
      } else {
        if (resString === "") {
          string = string + pressedButton;
          document.querySelector(".result").innerHTML = dummy2 + string;
        } else {
          string = dummy1 + pressedButton;
          document.querySelector(".result").innerHTML = string;
          midString = dummy1 + pressedButton;
          dummy2 = string;
          string = "";
          resString = "";
        }
      }
    }
  });
});
