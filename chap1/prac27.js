// Bài 27: Đếm số lượng “ước số chẵn” của số nguyên dương n
var promptN = require("prompt-sync")();
var n = promptN("Enter your N: ");

var result = 1;
for (var i = 1; i <= n; i++) {
  if (n % i == 0 && i % 2 == 0) {
    result = result * i;
  }
}

console.log(result);
