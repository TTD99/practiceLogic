// Bài 29: Tìm ước số lẻ lớn nhất của số nguyên dương n. Ví dụ n = 100 ước lẻ lớn nhất là 25
var promptN = require("prompt-sync")();
var n = promptN("Enter your N: ");

var max = 0;
for (var i = 1; i < n; i++) {
  if (n % i == 0 && i % 2 != 0) {
    max = i;
  }
}

console.log(max);
