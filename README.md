# MongoDB $inc Operator Error: Using Strings Instead of Numbers

This repository demonstrates an uncommon error when using the `$inc` operator in MongoDB update queries. The error arises when using strings instead of numbers as the increment value.

## Bug

The bug involves using a string ('1') as the increment value with the `$inc` operator in a MongoDB update query. This results in string concatenation instead of numerical incrementation.

## Solution

The solution is to ensure the increment value is a number, not a string.  The correct usage is to pass a numerical value to the `$inc` operator.

## How to reproduce the bug

1.  Ensure you have MongoDB installed and running.
2.  Create a collection named `myCollection` with at least one document containing a numerical field.
3.  Execute the incorrect update query from `bug.js`.
4. Observe the unexpected result; the field will have '1' appended to its existing value rather than being incremented by 1.

## How to fix the bug

1. Replace the string in the `$inc` operator with a number. Refer to the corrected query in `bugSolution.js`
2. Re-run the updated query.