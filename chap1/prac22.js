// Bài 22:Tính tích tất cả các “ước số” của số nguyên dương n
var promptN = require("prompt-sync")();
var n = promptN("Enter your N: ");

var result = 1;
for (var i = 1; i <= n; i++) {
  if (n % i == 0) {
    result = result * i;
  }
}

console.log(result);
