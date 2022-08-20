// Bài 28: Cho số nguyên dương n. Tính tổng các ước số nhỏ hơn chính nó
var promptN = require("prompt-sync")();
var n = promptN("Enter your N: ");

var result = 0;
for (var i = 1; i < n; i++) {
  if (n % i == 0) {
    result = result + i;
  }
}

console.log(result);
