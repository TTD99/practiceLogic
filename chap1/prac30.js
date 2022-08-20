// Bài 30: Cho số nguyên dương n. Kiểm tra xem n có phải là số hoàn thiện hay không
var promptN = require("prompt-sync")();
var n = promptN("Enter your N: ");

var result = 0;
for (var i = 1; i < n; i++) {
  if (n % i == 0) {
    result = result + i;
  }
}

if (result == n) {
  console.log("This is perfect number");
} else {
  console.log("This is not perfect number");
}
