// ==========================================================
// Phase 1 - Math + Recursion
// Practice Day (Revision + Quiz)
// ==========================================================



// ==========================================================
// Topics to Revise
// ==========================================================

// ✔ Count Digits
// ✔ Reverse Number
// ✔ Palindrome Number
// ✔ Armstrong Number
// ✔ GCD (Euclidean Algorithm)
// ✔ LCM
// ✔ What is Recursion?
// ✔ Base Case
// ✔ Call Stack
// ✔ Factorial (Iterative)
// ✔ Factorial (Recursive)
// ✔ Fibonacci (Recursive)



// ==========================================================
// Dry Run Practice
// ==========================================================

// Dry Run these problems on paper
// before writing code.

// 1. Count Digits
//
// Input:
// 987654
//
// Expected Output:
// 6



// ----------------------------------------------------------

// 2. Reverse Number
//
// Input:
// 45678
//
// Expected Output:
// 87654



// ----------------------------------------------------------

// 3. Palindrome
//
// Input:
// 1221
//
// Expected Output:
// Palindrome



// ----------------------------------------------------------

// 4. Armstrong
//
// Input:
// 153
//
// Expected Output:
// Armstrong



// ----------------------------------------------------------

// 5. GCD
//
// Input:
// 48
// 18
//
// Expected Output:
// 6



// ----------------------------------------------------------

// 6. Factorial
//
// Input:
// 5
//
// Expected Output:
// 120



// ----------------------------------------------------------

// 7. Fibonacci
//
// Input:
// 6
//
// Expected Output:
// 8



// ==========================================================
// Recursion Dry Run Practice
// ==========================================================

/*

Dry Run

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

24


---------------------------------------


Dry Run

fibonacci(5)

↓

fib(4) + fib(3)

↓

fib(3)+fib(2)
+
fib(2)+fib(1)

↓

Continue until

fib(1)

fib(0)

*/




// ==========================================================
// Time and Space Complexity Revision
// ==========================================================

/*

Count Digits

Time  = O(log n)

Space = O(1)


--------------------------------


Reverse Number

Time  = O(log n)

Space = O(1)


--------------------------------


Palindrome

Time  = O(log n)

Space = O(1)


--------------------------------


Armstrong

Time  = O(log n)

Space = O(1)


--------------------------------


GCD (Euclidean)

Time  = O(log(min(a,b)))

Space = O(1)


--------------------------------


Factorial (Iterative)

Time  = O(n)

Space = O(1)


--------------------------------


Factorial (Recursive)

Time  = O(n)

Space = O(n)


--------------------------------


Fibonacci (Recursive)

Time  = O(2ⁿ)

Space = O(n)

*/




// ==========================================================
// Why Recursive Fibonacci is Slow?
// ==========================================================

// Because the same subproblems
// are solved multiple times.

// Example:
//
// fib(5)
//
// calculates
//
// fib(3)
//
// more than once.

// This repeated work causes
// exponential time complexity.


// ==========================================================
// Common Recursion Interview Questions
// ==========================================================

/*

Q1. What is Recursion?

--------------------------------------------------

Q2. What is a Base Case?

--------------------------------------------------

Q3. What happens if there is no Base Case?

--------------------------------------------------

Q4. What is the Call Stack?

--------------------------------------------------

Q5. Difference between Iteration and Recursion?

--------------------------------------------------

Q6. Which is better?
Iteration or Recursion?

--------------------------------------------------

Q7. Why is Recursive Fibonacci slow?

--------------------------------------------------

Q8. Time Complexity of Recursive Fibonacci?

--------------------------------------------------

Q9. Space Complexity of Recursive Fibonacci?

--------------------------------------------------

Q10. Why does recursion use more memory?

--------------------------------------------------

Q11. What is Stack Overflow?

--------------------------------------------------

Q12. Explain recursion using factorial.

--------------------------------------------------

Q13. Explain recursion using Fibonacci.

--------------------------------------------------

Q14. What are overlapping subproblems?

--------------------------------------------------

Q15. How can Fibonacci be optimized?

Answer:
Memoization
Dynamic Programming

*/




// ==========================================================
// Today's Practice Tasks
// ==========================================================

/*

Task 1

Write Count Digits
without looking at notes.

✔


Task 2

Write Reverse Number.

✔


Task 3

Write Palindrome Number.

✔


Task 4

Write Armstrong Number.

✔


Task 5

Write GCD using Euclidean Algorithm.

✔


Task 6

Write LCM.

✔


Task 7

Write Factorial

(a) Iterative

(b) Recursive

✔


Task 8

Write Recursive Fibonacci.

✔


Task 9

Dry Run

factorial(5)

✔


Task 10

Draw Fibonacci Recursion Tree

fib(5)

✔


Task 11

Revise all Time & Space Complexities.

✔


Task 12

Answer all Interview Questions
without looking at notes.

✔

*/




// ==========================================================
// Goal of Today
// ==========================================================

// ✔ Revise all Phase 1 concepts.
// ✔ Solve every problem without notes.
// ✔ Explain logic confidently.
// ✔ Remember Time & Space Complexity.
// ✔ Be able to answer interview questions.