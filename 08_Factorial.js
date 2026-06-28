// ==========================================================
// Phase 1 - Math + Recursion
// Topic: Factorial (Iterative vs Recursive)
// ==========================================================



// ==========================================================
// What is Factorial?
// ==========================================================

// The factorial of a non-negative integer n
// is the product of all positive integers
// from 1 to n.

// Formula:
//
// n! = n × (n - 1) × (n - 2) × ... × 1

// Examples:
//
// 5! = 5 × 4 × 3 × 2 × 1 = 120
//
// 4! = 4 × 3 × 2 × 1 = 24
//
// 3! = 3 × 2 × 1 = 6
//
// 1! = 1
//
// 0! = 1



// ==========================================================
// Iterative Approach
// ==========================================================

// Logic:
//
// Start with result = 1.
//
// Multiply result by every number
// from 1 to n.

function factorialIterative(n) {

    let result = 1;

    for (let i = 1; i <= n; i++) {

        result *= i;

    }

    return result;

}

console.log(factorialIterative(5));

// Output:
// 120



// ==========================================================
// Dry Run (Iterative)
// ==========================================================

/*

n = 5

result = 1

i = 1
result = 1 × 1 = 1

i = 2
result = 1 × 2 = 2

i = 3
result = 2 × 3 = 6

i = 4
result = 6 × 4 = 24

i = 5
result = 24 × 5 = 120

Answer = 120

*/



// ==========================================================
// Recursive Approach
// ==========================================================

// Logic:
//
// Base Case:
//
// factorial(0) = 1
//
// Recursive Case:
//
// factorial(n) = n × factorial(n - 1)

function factorialRecursive(n) {

    if (n === 0) {

        return 1;

    }

    return n * factorialRecursive(n - 1);

}

console.log(factorialRecursive(5));

// Output:
// 120



// ==========================================================
// Dry Run (Recursive)
// ==========================================================

/*

factorial(5)

↓

5 × factorial(4)

↓

5 × 4 × factorial(3)

↓

5 × 4 × 3 × factorial(2)

↓

5 × 4 × 3 × 2 × factorial(1)

↓

5 × 4 × 3 × 2 × 1 × factorial(0)

↓

Base Case

factorial(0) = 1

↓

Return

1

↓

2

↓

6

↓

24

↓

120

Answer = 120

*/



// ==========================================================
// Time Complexity
// ==========================================================

// Iterative
//
// Time Complexity = O(n)


// Recursive
//
// Time Complexity = O(n)



// ==========================================================
// Space Complexity
// ==========================================================

// Iterative
//
// Space Complexity = O(1)


// Recursive
//
// Space Complexity = O(n)
//
// Because every function call
// is stored in the Call Stack.



// ==========================================================
// Comparison
// ==========================================================

/*

Iterative

✔ Faster
✔ Uses less memory
✔ No Call Stack overhead


Recursive

✔ Shorter code
✔ Easier to understand mathematically
✔ Best for recursive problems
✘ Uses extra memory

*/



// ==========================================================
// Real-World Use Cases
// ==========================================================

// ✔ Counting permutations and combinations
// ✔ Probability and statistics
// ✔ Dynamic Programming problems
// ✔ Recursive algorithm practice
// ✔ Mathematical computations



// ==========================================================
// Interview Questions
// ==========================================================

/*

Q1. What is a factorial?

Answer:
The product of all positive integers
from 1 to n.

Example:
5! = 120


------------------------------------------------------


Q2. What is 0!?

Answer:

0! = 1


------------------------------------------------------


Q3. Which approach is better?

Answer:

Iterative is usually better because
it uses O(1) extra space.

Recursive is easier to write and understand
but uses O(n) stack space.


------------------------------------------------------


Q4. Time Complexity?

Answer:

Iterative = O(n)

Recursive = O(n)


------------------------------------------------------


Q5. Space Complexity?

Answer:

Iterative = O(1)

Recursive = O(n)

*/
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(4));

/*
factorial(4)

↓

4 × factorial(3)

↓

4 × 3 × factorial(2)

↓

4 × 3 × 2 × factorial(1)

↓

4 × 3 × 2 × 1 × factorial(0)

↓

1

↓

1

↓

2

↓

6

↓

24
*/