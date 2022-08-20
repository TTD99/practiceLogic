// Bài 23: Đếm số lượng “ước số” của số nguyên dương n
var promptN = require("prompt-sync")();
var n = promptN("Enter your N: ");

var result = 0;
for (var i = 1; i <= n; i++) {
  if (n % i == 0) {
    result++;
  }
}

console.log(result);
