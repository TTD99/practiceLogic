// Bài 20: Liệt kê tất cả các “ước số” của số nguyên dương n
var promptN = require("prompt-sync")();
var n = promptN("Enter your N: ");

var result = "";
for (var i = 1; i <= n; i++) {
  if (n % i == 0 && i != n) {
    result = result + i + ",";
  } else if (n % i == 0 && i == n) {
    result = result + i;
  }
}

console.log(result);
