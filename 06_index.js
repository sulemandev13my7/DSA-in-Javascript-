// ==========================================================
// Phase 1 - Math Basics
// Topic: GCD (HCF) & LCM
// ==========================================================



// ==========================================================
// What is GCD (Greatest Common Divisor)?
// ==========================================================

// GCD (or HCF) is the largest positive number
// that divides both numbers exactly.

// Example:
//
// 12 Factors = 1, 2, 3, 4, 6, 12
// 18 Factors = 1, 2, 3, 6, 9, 18
//
// Common Factors = 1, 2, 3, 6
//
// GCD = 6



// ==========================================================
// What is LCM (Least Common Multiple)?
// ==========================================================

// LCM is the smallest positive number
// that is divisible by both numbers.

// Example:
//
// Multiples of 12
// 12, 24, 36, 48, 60...

// Multiples of 18
// 18, 36, 54...

// LCM = 36



// ==========================================================
// Best Logic - Euclidean Algorithm
// ==========================================================

// Rule:
//
// GCD(a, b)
//
// While b is not equal to 0:
//
// remainder = a % b
//
// a = b
//
// b = remainder
//
// When b becomes 0,
// a is the GCD.


// ==========================================================
// Code - GCD
// ==========================================================

let a = 12;
let b = 18;

while (b !== 0) {

    let remainder = a % b;

    a = b;

    b = remainder;

}

console.log("GCD =", a);

// Output:
// GCD = 6



// ==========================================================
// Dry Run
// ==========================================================

/*

Input

a = 12
b = 18


Iteration 1

remainder = 12 % 18 = 12

a = 18
b = 12


----------------------------


Iteration 2

remainder = 18 % 12 = 6

a = 12
b = 6


----------------------------


Iteration 3

remainder = 12 % 6 = 0

a = 6
b = 0


Loop Ends

Answer = 6

*/



// ==========================================================
// Time & Space Complexity (GCD)
// ==========================================================

// Time Complexity = O(log(min(a, b)))
//
// Space Complexity = O(1)



// ==========================================================
// Finding LCM
// ==========================================================

// Formula:
//
// LCM = (a × b) / GCD



// ==========================================================
// Code - LCM
// ==========================================================

let num1 = 12;
let num2 = 18;

let x = num1;
let y = num2;

// Find GCD

while (y !== 0) {

    let remainder = x % y;

    x = y;

    y = remainder;

}

let gcd = x;

let lcm = (num1 * num2) / gcd;

console.log("GCD =", gcd);
console.log("LCM =", lcm);

// Output
//
// GCD = 6
// LCM = 36



// ==========================================================
// Time & Space Complexity (LCM)
// ==========================================================

// Time Complexity = O(log(min(a, b)))
//
// Space Complexity = O(1)



// ==========================================================
// Real-World Use Cases
// ==========================================================

// ✔ Fraction Simplification
// ✔ Cryptography
// ✔ Task Scheduling
// ✔ Signal Synchronization
// ✔ Competitive Programming
// ✔ Number Theory Problems



// ==========================================================
// Interview Questions
// ==========================================================

/*

Q1. What is GCD?

Answer:
The largest positive integer
that divides both numbers exactly.


------------------------------------------------------


Q2. What is LCM?

Answer:
The smallest positive integer
that is divisible by both numbers.


------------------------------------------------------


Q3. Which algorithm is best for finding GCD?

Answer:

Euclidean Algorithm.


------------------------------------------------------


Q4. Why is the Euclidean Algorithm better?

Answer:

It is much faster than checking
all common factors one by one.


------------------------------------------------------


Q5. Formula for LCM?

Answer:

LCM = (a × b) / GCD


------------------------------------------------------


Q6. Time Complexity of Euclidean Algorithm?

Answer:

O(log(min(a, b)))


------------------------------------------------------


Q7. Space Complexity?

Answer:

O(1)

*/