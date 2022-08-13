var prompt = require("prompt-sync")();
var n = prompt("Enter your N: ");
var result = 0;
for (var i = 1; i <= n; i++) {
  result += i * i;
}

console.log(result);
