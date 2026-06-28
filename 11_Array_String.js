// ==========================================================
// Phase 2 - Arrays & Strings
// Topic: Array Basics + Reverse Array + Reverse String
// ==========================================================



// ==========================================================
// What is an Array?
// ==========================================================

// An Array is a linear data structure
// that stores multiple elements
// in a single variable.

// Example:

let numbers = [10, 20, 30, 40, 50];

console.log(numbers);



// ==========================================================
// Why do we use Arrays?
// ==========================================================

// ✔ Store multiple values together
// ✔ Fast access using index
// ✔ Easy traversal
// ✔ Used in searching and sorting
// ✔ Most DSA problems use arrays



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
// Traversing an Array
// ==========================================================

// Traversal means visiting every element
// of an array one by one.

let arr = [10, 20, 30, 40];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}



// ==========================================================
// Access and Update
// ==========================================================

// Access

let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits[1]);


// Update

fruits[1] = "Mango";

console.log(fruits);



// ==========================================================
// Reverse an Array
// ==========================================================

// Problem:
//
// Input:
// [10,20,30,40,50]
//
// Output:
// [50,40,30,20,10]



// ==========================================================
// Logic
// ==========================================================

// Step 1
// Create two pointers.
//
// left = 0
// right = last index
//
// Step 2
// Swap both elements.
//
// Step 3
// Move
//
// left++
//
// right--
//
// Step 4
// Repeat until
//
// left < right



// ==========================================================
// Code
// ==========================================================

let nums = [10, 20, 30, 40, 50];

let left = 0;
let right = nums.length - 1;

while (left < right) {

    let temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;

    left++;
    right--;

}

console.log(nums);



// ==========================================================
// Dry Run
// ==========================================================

/*

Array

[10,20,30,40,50]


left = 0
right = 4

Swap

10 ↔ 50

[50,20,30,40,10]


left = 1
right = 3

Swap

20 ↔ 40

[50,40,30,20,10]


left = 2
right = 2

Stop


Answer

[50,40,30,20,10]

*/



// ==========================================================
// Reverse a String
// ==========================================================

// Problem

// Input

// "Hello"

// Output

// "olleH"



// ==========================================================
// Logic
// ==========================================================

// Step 1

// Start from last character.

// Step 2

// Append every character
// into a new string.

// Step 3

// Return reversed string.



// ==========================================================
// Code
// ==========================================================

let str = "Hello";

let reverse = "";

for (let i = str.length - 1; i >= 0; i--) {

    reverse += str[i];

}

console.log(reverse);



// ==========================================================
// Dry Run
// ==========================================================

/*

String

Hello

i = 4

reverse = o

----------------

i = 3

reverse = ol

----------------

i = 2

reverse = oll

----------------

i = 1

reverse = olle

----------------

i = 0

reverse = olleH

Answer

olleH

*/



// ==========================================================
// Time & Space Complexity
// ==========================================================

/*

Array Traversal

Time = O(n)

Space = O(1)


------------------------------------


Access by Index

Time = O(1)

Space = O(1)


------------------------------------


Update by Index

Time = O(1)

Space = O(1)


------------------------------------


Reverse Array (Two Pointers)

Time = O(n)

Space = O(1)


------------------------------------


Reverse String

Time = O(n)

Space = O(n)

(Extra string is created.)

*/



// ==========================================================
// Real-World Use Cases
// ==========================================================

// ✔ Reverse chat messages
// ✔ Reverse words in text editors
// ✔ Undo/Redo features
// ✔ Data processing
// ✔ Image and audio processing
// ✔ Search and sorting algorithms



// ==========================================================
// Interview Questions
// ==========================================================

/*

Q1. What is an Array?

Answer:
An Array is a linear data structure
that stores multiple elements
in a single variable.


------------------------------------------------


Q2. Does Array indexing start from 0?

Answer:
Yes.
Arrays use Zero-Based Indexing.


------------------------------------------------


Q3. What is Array Traversal?

Answer:
Visiting every element
one by one.


------------------------------------------------


Q4. Time Complexity of Traversal?

Answer:

O(n)


------------------------------------------------


Q5. Time Complexity of Access?

Answer:

O(1)


------------------------------------------------


Q6. Time Complexity of Update?

Answer:

O(1)


------------------------------------------------


Q7. How do you reverse an array?

Answer:

Using Two Pointers.

left = 0

right = last index

Swap both values.

Move pointers inward.

Repeat until left < right.


------------------------------------------------


Q8. Time Complexity of Reverse Array?

Answer:

O(n)


------------------------------------------------


Q9. Space Complexity of Reverse Array?

Answer:

O(1)

Because the reversal is done in place.


------------------------------------------------


Q10. How do you reverse a string?

Answer:

Start from the last character
and append each character
to a new string.


------------------------------------------------


Q11. Time Complexity of Reverse String?

Answer:

O(n)


------------------------------------------------


Q12. Space Complexity of Reverse String?

Answer:

O(n)

Because a new string is created.

*/

// ==========================================================
// Practice Day
// ==========================================================



// ==========================================================
// Task 1: Traverse an Array
// ==========================================================

// Input
let arr = [10, 20, 30, 40, 50];

// Expected Output
// 10
// 20
// 30
// 40
// 50

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}



// ==========================================================
// Task 2: Access First, Middle and Last Element
// ==========================================================

let numbers = [10, 20, 30, 40, 50];

console.log("First :", numbers[0]);

console.log("Middle :", numbers[Math.floor(numbers.length / 2)]);

console.log("Last :", numbers[numbers.length - 1]);



// ==========================================================
// Task 3: Update an Element
// ==========================================================

let fruits = ["Apple", "Banana", "Orange"];

fruits[1] = "Mango";

console.log(fruits);

// Output

// ["Apple","Mango","Orange"]



// ==========================================================
// Task 4: Reverse an Array
// ==========================================================

let nums = [10, 20, 30, 40, 50];

let left = 0;

let right = nums.length - 1;

while (left < right) {

    let temp = nums[left];

    nums[left] = nums[right];

    nums[right] = temp;

    left++;

    right--;

}

console.log(nums);



// ==========================================================
// Task 5: Reverse a String
// ==========================================================

let str = "Hello";

let reverse = "";

for (let i = str.length - 1; i >= 0; i--) {

    reverse += str[i];

}

console.log(reverse);



// ==========================================================
// Task 6: Dry Run (Reverse Array)
// ==========================================================

/*

Input

[10,20,30,40,50]


left = 0

right = 4

Swap

10 ↔ 50

[50,20,30,40,10]



left = 1

right = 3

Swap

20 ↔ 40

[50,40,30,20,10]



left = 2

right = 2

Stop

Answer

[50,40,30,20,10]

*/



// ==========================================================
// Task 7: Dry Run (Reverse String)
// ==========================================================

/*

Input

Hello

i = 4

reverse = o

-----------------

i = 3

reverse = ol

-----------------

i = 2

reverse = oll

-----------------

i = 1

reverse = olle

-----------------

i = 0

reverse = olleH

Answer

olleH

*/



// ==========================================================
// Task 8: Time & Space Complexity
// ==========================================================

/*

Traverse Array

Time  = O(n)

Space = O(1)



Access Element

Time  = O(1)

Space = O(1)



Update Element

Time  = O(1)

Space = O(1)



Reverse Array

Time  = O(n)

Space = O(1)



Reverse String

Time  = O(n)

Space = O(n)

*/




// ==========================================================
// Task 9: Interview Questions
// ==========================================================

/*

Q1. What is an Array?

Answer:
An Array is a linear data structure
that stores multiple values
in a single variable.



---------------------------------------------------


Q2. Why does Array indexing start from 0?

Answer:
Because arrays use Zero-Based Indexing,
where the first element is stored
at index 0.



---------------------------------------------------


Q3. What is Array Traversal?

Answer:
Visiting every element
one by one.



---------------------------------------------------


Q4. Time Complexity of Traversal?

Answer:

O(n)



---------------------------------------------------


Q5. Time Complexity of Access?

Answer:

O(1)



---------------------------------------------------


Q6. Time Complexity of Update?

Answer:

O(1)



---------------------------------------------------


Q7. Explain Reverse Array.

Answer:

Use Two Pointers.

left = 0

right = last index

Swap both values.

Move pointers.

Repeat until

left < right.



---------------------------------------------------


Q8. Time Complexity of Reverse Array?

Answer:

O(n)



---------------------------------------------------


Q9. Space Complexity of Reverse Array?

Answer:

O(1)



---------------------------------------------------


Q10. Explain Reverse String.

Answer:

Start from the last character.

Append each character
into a new string.



---------------------------------------------------


Q11. Time Complexity of Reverse String?

Answer:

O(n)



---------------------------------------------------


Q12. Space Complexity of Reverse String?

Answer:

O(n)

Because a new string is created.

*/