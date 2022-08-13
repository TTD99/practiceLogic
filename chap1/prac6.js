var prompt = require("prompt-sync")();
var n = prompt("Enter your N: ");
var result = 0;
for (var i = 1; i <= n; i++) {
  result += (1 / i) * (i + 1);
}

console.log(result);
