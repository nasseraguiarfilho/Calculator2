$("document").ready(function () {
  var num1 = 0;
  var num2 = 0;
  var operator = null;
  var result = null;

  $(".personalizedButton").on("click", function () {
    var id = $(this).attr("id");

    if (Number.isInteger(parseInt(id))) {
      if (!finishTypingNumber(num1)) {
        if (num1 === 0) {
          num1 = id;
          $("#display").attr("value", num1);
        } else {
          num1 = num1 + id;
          $("#display").attr("value", num1);
        }
      } else {
        if (num2 === 0) {
          num2 = id;
          $("#display").attr("value", num2);
        } else {
          num2 = num2 + id;
          $("#display").attr("value", num2);
        }
      }
    } else {
      if (id != "=") {
        operator = id;
        $("#display").text(operator);
        $("#display").attr("value", operator);
      } else {
        result = calculate(num1, num2, operator);
        $("#display").attr("value", result);
        num1 = 0;
        num2 = 0;
        operator = null;
      }
    }

    if (id == "CE") {
      location.reload();
    }
  });

  function finishTypingNumber(n) {
    return operator != null && n != 0;
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
});
