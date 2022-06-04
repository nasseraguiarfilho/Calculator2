$(document).ready(function () {
  var num1 = "";

  var num2 = "";

  var operator = null;

  var result = null;

  $(".personalizedButton").on("click", function () {
    var id = $(this).attr("id");

    if (id === "CE") location.reload();

    if (number(id)) {
      numberLogic(id);
    } else symbolLogic(id);
  });

  $(document).keypress(function (e) {
    solve(e.which);
  });

  function number(id) {
    return Number.isInteger(parseInt(id));
  }

  function numberLogic(id) {
    if (!completeTyping(num1)) {
      num1 = num1 + id;

      $("#display").attr("value", num1);
    } else {
      num2 = num2 + id;

      $("#display").attr("value", num2);
    }
  }

  function completeTyping() {
    if (num1 !== 0 && operator !== null) return true;
    else return false;
  }

  function symbolLogic(id) {
    if (id != "=") {
      operator = id;

      $("#display").attr("value", operator);
    } else {
      result = calculate(num1, num2, operator);

      $("#display").attr("value", result);

      num1 = 0;

      num2 = 0;

      operator = null;
    }
  }

  function calculate(n1, n2, op) {
    n1 = parseInt(n1);

    n2 = parseInt(n2);

    switch (op) {
      case "+":
        return n1 + n2;

      case "-":
        return n1 - n2;

      case "*":
        return n1 * n2;

      case "/":
        return n1 / n2;

      default:
        return "Error";
    }
  }

  function solve(key) {
    if (key === 13) {
      symbolLogic("=");
    } else if (key === 43) {
      symbolLogic("+");
    } else if (key === 45) {
      symbolLogic("-");
    } else if (key === 42) {
      symbolLogic("*");
    } else if (key === 47) {
      symbolLogic("/");
    } else if (key === 46) {
      symbolLogic(".");
    } else if (key === 48) {
      numberLogic("0");
    } else if (key === 49) {
      numberLogic("1");
    } else if (key === 50) {
      numberLogic("2");
    } else if (key === 51) {
      numberLogic("3");
    } else if (key === 52) {
      numberLogic("4");
    } else if (key === 53) {
      numberLogic("5");
    } else if (key === 54) {
      numberLogic("6");
    } else if (key === 55) {
      numberLogic("7");
    } else if (key === 56) {
      numberLogic("8");
    } else if (key === 57) {
      numberLogic("9");
    }
  }
});
