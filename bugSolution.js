function foo(a, b) {
  return a + b;
}

console.log(foo(1, "2")); // Output: "12"

function bar(a, b) {
  return parseInt(a) + parseInt(b);
}

console.log(bar(1, "2")); // Output: 3

//More robust solution handling potential errors
function addNumbers(a, b) {
  const numA = parseFloat(a);
  const numB = parseFloat(b);

  if (isNaN(numA) || isNaN(numB)) {
    return "Invalid input: Operands must be numbers or numeric strings";
  }

  return numA + numB;
}
console.log(addNumbers(1, "2")); // Output: 3
console.log(addNumbers("1.5", "2.5")); // Output: 4
console.log(addNumbers("abc", 2)); //Output: Invalid input: Operands must be numbers or numeric strings
