
// ==========================================================
// Classification of Data Structures
// ==========================================================

/*

1. Primitive Data Structures
--------------------------------
These store a single value.

- int
- char
- bool
- float
- double
- pointer


2. Non-Primitive Data Structures
--------------------------------

A) Linear Data Structures
(Data is arranged sequentially.)

- Array
- Linked List
- Stack
- Queue

B) Non-Linear Data Structures
(Data is not arranged sequentially.)

- Tree
- Graph
- Heap
- Hash Table


3. Abstract Data Types (ADTs)
--------------------------------
ADTs define WHAT operations are performed,
not HOW they are implemented.

Examples:

- List
- Stack
- Queue
- Set
- Map
- Dictionary
- Priority Queue

*/


// ==========================================================
// Input and Output
// ==========================================================

// Input:
// Data given to the program.

// Output:
// Result produced after processing the input.

// Example:

function square(num) {
    return num * num;
}

console.log(square(5));

// Input  = 5
// Output = 25



// ==========================================================
// Time Complexity
// ==========================================================

// Definition:
//
// Time Complexity measures how the execution time
// of an algorithm grows as the input size (n) increases.

// Example:

let n = 10;

for (let i = 1; i <= n; i++) {
    console.log(i);
}

// Time Complexity = O(n)


// ==========================================================
// Why do we measure Time Complexity?
// ==========================================================

// We measure time complexity to:
//
// ✔ Compare algorithms
// ✔ Choose the fastest solution
// ✔ Handle large amounts of data efficiently
// ✔ Improve application performance



// ==========================================================
// Big-O Notation
// ==========================================================

// Big-O Notation describes the worst-case
// time complexity of an algorithm.

// It tells us how an algorithm grows
// as input size increases.


// ==========================================================
// Common Big-O Complexities
// ==========================================================

/*

O(1)        Constant Time
O(log n)    Logarithmic Time
O(n)        Linear Time
O(n log n)  Linearithmic Time
O(n²)       Quadratic Time
O(n³)       Cubic Time
O(2ⁿ)       Exponential Time
O(n!)       Factorial Time

*/


// ==========================================================
// Space Complexity
// ==========================================================

// Space Complexity measures how much
// extra memory an algorithm uses
// as the input size increases.

function sum(arr) {

    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    return total;
}

console.log(sum([1, 23, 34, 4]));

// Time Complexity  = O(n)
// Space Complexity = O(1)


// ==========================================================
// Time vs Space Trade-Off
// ==========================================================

// Sometimes we use more memory
// to make the program faster.
//
// Sometimes we use less memory
// but the program becomes slower.


// ==========================================================
// Interview Questions
// ==========================================================

/*

Q1. What is Data Structure?

A:
A Data Structure is a way to organize and store
data so that it can be accessed and modified efficiently.


-----------------------------------------------------------

Q2. What is an Algorithm?

A:
An Algorithm is a step-by-step procedure
used to solve a problem.


-----------------------------------------------------------

Q3. Difference between Data Structure and Algorithm?

A:

Data Structure
- Organizes data.

Algorithm
- Processes data.

-----------------------------------------------------------

Q4. What is Time Complexity?

A:
Time Complexity measures how the running
time of an algorithm grows as input size increases.


-----------------------------------------------------------

Q5. What is Space Complexity?

A:
Space Complexity measures how much memory
an algorithm uses as input size increases.


-----------------------------------------------------------

Q6. What is Big-O Notation?

A:
Big-O Notation represents the worst-case
time complexity of an algorithm.


-----------------------------------------------------------

Q7. Why do we use Big-O?

A:
To compare algorithms and choose
the most efficient solution.

*/


// ==========================================================
// Order of Efficiency (Best → Worst)
// ==========================================================

/*

O(1)
↓

O(log n)
↓

O(n)
↓

O(n log n)
↓

O(n²)
↓

O(n³)
↓

O(2ⁿ)
↓

O(n!)

*/


// ==========================================================
// Remember
// ==========================================================

/*

Data
↓
Raw Values

↓

Data Structure
↓
Organized Data

↓

Algorithm
↓
Step-by-Step Process

↓

Output

*/
