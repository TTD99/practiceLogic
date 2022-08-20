// Bài 33: Tính S(n) = CanBac2(2+CanBac2(2+….+CanBac2(2 + CanBac2(2)))) có n dấu căn
var promptN = require("prompt-sync")();
var n = promptN("Enter your N: ");

var S = Math.sqrt(2);
for (var i = 2; i <= n; i++) {
  S = Math.sqrt(2 + S);
}

console.log(S);
