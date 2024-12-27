# Unexpected Type Coercion in JavaScript

This example demonstrates a common pitfall in JavaScript: unexpected type coercion when performing arithmetic operations on variables of different types.

## The Problem
JavaScript's dynamic typing system can lead to implicit type conversions that may not always produce the expected results, particularly when adding numbers and strings.

In the provided example, the `foo` function adds a number (1) and a string ("2"). Due to JavaScript's type coercion rules, the result is string concatenation ("12"), not the expected numerical addition (3).

## The Solution
To ensure proper numerical addition, you should explicitly convert the operands to numbers using functions like `parseInt()` or `parseFloat()`. The `bar` function in the example showcases this approach, using `parseInt()` to convert both operands to numbers before performing the addition. This produces the correct numerical sum.