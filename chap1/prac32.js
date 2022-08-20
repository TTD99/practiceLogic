// Bài 32: Cho số nguyên dương n. Kiểm tra xem n có phải là số chính phương hay không
var promptN = require("prompt-sync")();
var n = promptN("Enter your N: ");

var sqrtN = Math.sqrt(n);
if (sqrtN == parseInt(sqrtN)) {
  console.log("This is square number");
} else {
  console.log("This is not square number");
}
