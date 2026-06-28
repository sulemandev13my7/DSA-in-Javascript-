// ==========================================================
// DSA (Data Structures and Algorithms)
// ==========================================================

// ==========================================================
// What is DSA?
// ==========================================================

// Data Structure
// A Data Structure is a way to organize and store data
// so that it can be accessed and modified efficiently.

// Algorithm
// An Algorithm is a step-by-step procedure or process
// used to solve a problem.

// Example:
// Data = 10, 20, 30
// Data Structure = [10, 20, 30] (organized data)
// Algorithm = Steps to search, sort, insert, or delete data.

// ==========================================================
// Why is DSA Important?
// ==========================================================

// 1. DSA improves problem-solving skills.
//    It teaches you how to solve problems efficiently.

// 2. Most technical interviews focus on logic,
//    not just programming syntax.

// 3. DSA concepts are language-independent.
//    Once you learn DSA, you can apply it in
//    JavaScript, C++, Java, Python, etc.

// 4. DSA is used in real-world applications such as:
//    - Google Search
//    - Facebook Feed
//    - Instagram Reels
//    - Navigation (Google Maps)
//    - Banking Systems
//    - E-commerce Websites
//    - AI and Machine Learning



// ==========================================================
// Problem Solving Approach
// ==========================================================

// Step 1 : Understand the Problem
//--------------------------------

// Read the question carefully.
// Understand what is being asked.

// Example:
//
// Question:
// Find the largest number in an array.


// ----------------------------------------------------------

// Step 2 : Analyze Input and Output
//----------------------------------

// Input:
// [4, 8, 2, 10, 6]

// Output:
// 10

// Another Example:
//
// Input:
// "madam"
//
// Output:
// Palindrome


// ----------------------------------------------------------

// Step 3 : Think of a Brute Force Solution
//-----------------------------------------

// First, think of the easiest solution,
// even if it is not the fastest.

// Example:

let arr = [4, 8, 2, 10, 6];

let largest = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}

console.log(largest); // 10

// Time Complexity = O(n)


// ----------------------------------------------------------

// Step 4 : Optimize the Solution
//--------------------------------

// Can we make it faster?
// Can we use less memory?
// Can we reduce unnecessary operations?

// Example:
//
// Finding an element
//
// Method 1:
// Linear Search
// Time Complexity = O(n)
//
// Method 2:
// Binary Search (Array must be sorted)
// Time Complexity = O(log n)


// ----------------------------------------------------------

// Step 5 : Write Clean Code
//--------------------------------

// Good Example

function add(a, b) {
    return a + b;
}

// Bad Example

function x(q, w) {
    return q + w;
}

// Use meaningful variable names.
// Keep code simple and readable.


// ----------------------------------------------------------

// Step 6 : Analyze Time and Space Complexity
//-------------------------------------------

// Example

function printNumbers(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

printNumbers(5);

// Time Complexity = O(n)
// Space Complexity = O(1)



// ==========================================================
// Interview Questions
// ==========================================================

/*

Q1. Why is DSA important?

Answer:
DSA improves problem-solving skills,
helps crack coding interviews,
writes efficient code,
and is used in real-world software development.


-------------------------------------------------------

Q2. What is a brute force solution?

Answer:
A brute force solution is the simplest
and most straightforward approach
to solving a problem, even if it is
not the most efficient.


-------------------------------------------------------

Q3. What is optimization?

Answer:
Optimization means improving an algorithm
to reduce execution time or memory usage.


-------------------------------------------------------

Q4. What should you do before writing code?

Answer:

1. Understand the problem.
2. Analyze input and output.
3. Think of a brute force solution.
4. Optimize the solution.
5. Write clean code.
6. Analyze time and space complexity.

*/
