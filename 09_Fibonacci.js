// ==========================================================
// Phase 1 - Math + Recursion
// Topic: Fibonacci (Recursive)
// ==========================================================



// ==========================================================
// What is the Fibonacci Series?
// ==========================================================

// The Fibonacci series is a sequence
// in which each number is the sum
// of the previous two numbers.

// Formula:
//
// F(n) = F(n-1) + F(n-2)

// Base Cases:
//
// F(0) = 0
// F(1) = 1

// Example:
//
// 0, 1, 1, 2, 3, 5, 8, 13, 21, ...



// ==========================================================
// Recursive Logic
// ==========================================================

// Step 1:
// If n is 0, return 0.
//
// Step 2:
// If n is 1, return 1.
//
// Step 3:
// Otherwise,
// return fibonacci(n-1) + fibonacci(n-2).



// ==========================================================
// Recursive Code
// ==========================================================

function fibonacci(n) {

    // Base Cases
    if (n === 0) return 0;

    if (n === 1) return 1;

    // Recursive Call
    return fibonacci(n - 1) + fibonacci(n - 2);

}

console.log(fibonacci(6));

// Output:
// 8



// ==========================================================
// Dry Run
// ==========================================================

/*

Input

n = 6

fibonacci(6)

↓

fibonacci(5) + fibonacci(4)

↓

( fibonacci(4) + fibonacci(3) )
+
( fibonacci(3) + fibonacci(2) )

↓

Continue until

fibonacci(1)
fibonacci(0)

Then return upward.

Final Answer = 8

*/



// ==========================================================
// Recursion Tree
// ==========================================================

/*

                 fib(5)

          /                  \

      fib(4)               fib(3)

     /      \             /      \

 fib(3)   fib(2)     fib(2)    fib(1)

 /    \     /   \      /   \

2      1   1     0    1     0

 / \

1   0


Notice:

fib(3) is calculated multiple times.

fib(2) is calculated multiple times.

This repeated work makes recursion slow.

*/



// ==========================================================
// Why is Recursive Fibonacci Slow?
// ==========================================================

// The same subproblems are solved
// again and again.

// Example:
//
// fib(5)
//
// computes
//
// fib(3)
//
// more than once.
//
// This repeated computation
// increases execution time.



// ==========================================================
// Time Complexity
// ==========================================================

// Time Complexity = O(2ⁿ)

// Because every function call
// creates two more recursive calls.


// ==========================================================
// Space Complexity
// ==========================================================

// Space Complexity = O(n)

// Because recursive calls
// are stored in the Call Stack.



// ==========================================================
// Real-World Use Cases
// ==========================================================

// ✔ Learning recursion
// ✔ Dynamic Programming
// ✔ Algorithm optimization
// ✔ Mathematical modeling
// ✔ Interview practice



// ==========================================================
// Interview Questions
// ==========================================================

/*

Q1. What is the Fibonacci Series?

Answer:
A sequence in which every number
is the sum of the previous two numbers.


------------------------------------------------------


Q2. What are the base cases?

Answer:

F(0) = 0

F(1) = 1


------------------------------------------------------


Q3. Why is recursive Fibonacci slow?

Answer:

Because it solves the same
subproblems multiple times.

Example:

fib(3)

is calculated repeatedly.


------------------------------------------------------


Q4. Time Complexity?

Answer:

O(2ⁿ)


------------------------------------------------------


Q5. Space Complexity?

Answer:

O(n)


------------------------------------------------------


Q6. How can Fibonacci be optimized?

Answer:

Using Memoization or Dynamic Programming,
which reduces the time complexity to O(n).


Q: Why don't companies use the simple recursive Fibonacci in production?

Tum confidently bolo:

The recursive solution has many overlapping subproblems. For example, fib(3) and fib(2) are computed multiple times, which makes the algorithm exponential with a time complexity of O(2ⁿ). In practice, we optimize it using Memoization or Dynamic Programming, reducing the time complexity to O(n).

*/
