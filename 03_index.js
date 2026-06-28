// ==========================================================
// Arrays - Basics + Interview Notes
// ==========================================================



// ==========================================================
// What is an Array?
// ==========================================================

// An Array is a linear data structure that stores
// multiple values in a single variable.

// Arrays store elements in contiguous memory locations
// (conceptually; in JavaScript the implementation is optimized internally).

// Example:

let numbers = [10, 20, 30, 40, 50];

console.log(numbers);



// ==========================================================
// Why are Arrays Used?
// ==========================================================

// Arrays are used to:
//
// ✔ Store multiple values together
// ✔ Access data quickly using an index
// ✔ Traverse data easily
// ✔ Search, sort, and manipulate data
// ✔ Solve many DSA problems

// Example:

let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits);



// ==========================================================
// Indexing in Arrays
// ==========================================================

// Arrays use Zero-Based Indexing.

// Example:

let colors = ["Red", "Blue", "Green", "Black"];

// Index:
// Red   -> 0
// Blue  -> 1
// Green -> 2
// Black -> 3

console.log(colors[0]); // Red
console.log(colors[2]); // Green



// ==========================================================
// Array Size (Length)
// ==========================================================

// The length property returns
// the total number of elements.

let nums = [10, 20, 30, 40];

console.log(nums.length); // 4



// ==========================================================
// Accessing Elements
// ==========================================================

// Syntax:

// array[index]

// Example:

let names = ["Ali", "Ahmed", "Suleman"];

console.log(names[1]); // Ahmed

// Time Complexity = O(1)


// ==========================================================
// Time Complexity Basics
// ==========================================================

/*

Operation             Time Complexity

Access by Index           O(1)

Update by Index           O(1)

Traverse                  O(n)

Search                    O(n)

Insert at End             O(1) Average

Delete from End           O(1)

Insert at Beginning       O(n)

Delete from Beginning     O(n)

*/


// ==========================================================
// Traversing an Array
// ==========================================================

// Visiting every element one by one
// is called Traversing.

// Example:

let arr = [10, 20, 30, 40, 50];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Output:
// 10
// 20
// 30
// 40
// 50

// Time Complexity = O(n)



// ==========================================================
// Find Maximum Element
// ==========================================================

// Problem:
// Find the largest number in an array.

let array1 = [15, 8, 22, 50, 31];

let max = array1[0];

for (let i = 1; i < array1.length; i++) {

    if (array1[i] > max) {
        max = array1[i];
    }

}

console.log("Maximum =", max);

// Output:
// Maximum = 50

// Time Complexity = O(n)
// Space Complexity = O(1)



// ==========================================================
// Find Minimum Element
// ==========================================================

// Problem:
// Find the smallest number in an array.

let array2 = [15, 8, 22, 50, 31];

let min = array2[0];

for (let i = 1; i < array2.length; i++) {

    if (array2[i] < min) {
        min = array2[i];
    }

}

console.log("Minimum =", min);

// Output:
// Minimum = 8

// Time Complexity = O(n)
// Space Complexity = O(1)



// ==========================================================
// Dry Run (Maximum Element)
// ==========================================================

/*

Array = [15, 8, 22, 50, 31]

Initial:
max = 15

i = 1
8 > 15 ❌
max = 15

i = 2
22 > 15 ✅
max = 22

i = 3
50 > 22 ✅
max = 50

i = 4
31 > 50 ❌
max = 50

Answer = 50

*/



// ==========================================================
// Real-World Use Cases
// ==========================================================

// Arrays are used in:

// ✔ Student Records
// ✔ Product Lists
// ✔ Shopping Cart
// ✔ User Lists
// ✔ Playlist
// ✔ Images Gallery
// ✔ Game Scores
// ✔ Search Results



// ==========================================================
// Interview Questions
// ==========================================================

/*

Q1. What is an Array?

Answer:
An Array is a linear data structure that stores
multiple elements in a single variable.


------------------------------------------------------

Q2. Why do we use Arrays?

Answer:
To store multiple values together and access
them efficiently using indexes.


------------------------------------------------------

Q3. Does Array start from 0 or 1?

Answer:
Array indexing starts from 0.


------------------------------------------------------

Q4. How do you get the size of an array?

Answer:

array.length


------------------------------------------------------

Q5. What is the time complexity of accessing
an element by index?

Answer:

O(1)


------------------------------------------------------

Q6. What is Array Traversal?

Answer:

Visiting every element of an array one by one.


------------------------------------------------------

Q7. What is the time complexity of traversal?

Answer:

O(n)


------------------------------------------------------

Q8. How do you find the maximum element?

Answer:

Initialize max with the first element,
then compare every element with max.

If current element is larger,
update max.


------------------------------------------------------

Q9. How do you find the minimum element?

Answer:

Initialize min with the first element,
then compare every element with min.

If current element is smaller,
update min.

*/