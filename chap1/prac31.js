// Bài 31: Cho số nguyên dương n. Kiểm tra xem n có phải là số nguyên tố hay không
var promptN = require("prompt-sync")();
var n = promptN("Enter your N: ");

var result = [];
for (var i = 1; i <= n; i++) {
  if (n % i == 0) {
    result.push(i);
  }
}

if (result.length == 2) {
  console.log("This is Prime number");
} else {
  console.log("This is not Prime number");
}
