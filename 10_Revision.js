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

Answer:
Recursion is a programming technique in which
a function calls itself to solve a smaller
version of the same problem.


--------------------------------------------------


Q2. What is a Base Case?

Answer:
A Base Case is the stopping condition of a
recursive function. It prevents infinite recursion.


--------------------------------------------------


Q3. What happens if there is no Base Case?

Answer:
The function keeps calling itself forever
until the Call Stack is full, causing a
Stack Overflow error.


--------------------------------------------------


Q4. What is the Call Stack?

Answer:
The Call Stack is a memory structure that
stores all active function calls.

Functions are removed from the stack
after they finish execution.


--------------------------------------------------


Q5. Difference between Iteration and Recursion?

Answer:

Iteration
✔ Uses loops
✔ Less memory
✔ Faster
✔ Space Complexity = O(1)

Recursion
✔ Uses function calls
✔ More readable for recursive problems
✔ Uses Call Stack
✔ Space Complexity = O(n)


--------------------------------------------------


Q6. Which is better: Iteration or Recursion?

Answer:
It depends on the problem.

Iteration is generally faster and uses less memory.

Recursion is better for naturally recursive
problems like Trees, Graphs, Divide & Conquer,
and Backtracking.


--------------------------------------------------


Q7. Why is Recursive Fibonacci slow?

Answer:
Because it solves the same subproblems
multiple times.

Example:
fib(3) is calculated repeatedly.

This repeated work makes it inefficient.


--------------------------------------------------


Q8. Time Complexity of Recursive Fibonacci?

Answer:

O(2ⁿ)

Because every function call creates
two more recursive calls.


--------------------------------------------------


Q9. Space Complexity of Recursive Fibonacci?

Answer:

O(n)

Because recursive calls are stored
in the Call Stack.


--------------------------------------------------


Q10. Why does Recursion use more memory?

Answer:
Each recursive function call is stored
in the Call Stack until it returns.

More function calls require more memory.


--------------------------------------------------


Q11. What is Stack Overflow?

Answer:
Stack Overflow occurs when the Call Stack
becomes full due to too many recursive
function calls, usually because the Base Case
is missing or never reached.


--------------------------------------------------


Q12. Explain Recursion using Factorial.

Answer:

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

Returns

120


--------------------------------------------------


Q13. Explain Recursion using Fibonacci.

Answer:

fib(5)

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

Then return upward.

Final Answer = 5


--------------------------------------------------


Q14. What are Overlapping Subproblems?

Answer:
Overlapping subproblems occur when the same
problem is solved multiple times.

Example:

fib(5)

calculates

fib(3)

more than once.

Dynamic Programming avoids this repetition.


--------------------------------------------------


Q15. How can Fibonacci be optimized?

Answer:

✔ Memoization

Store previously computed values
to avoid repeated calculations.

Time Complexity = O(n)

Space Complexity = O(n)


✔ Dynamic Programming (Tabulation)

Build the solution from smaller
subproblems iteratively.

Time Complexity = O(n)

Space Complexity = O(n)

Space can even be optimized to O(1).

*/