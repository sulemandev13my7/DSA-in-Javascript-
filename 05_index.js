// ==========================================================
// Phase 1 - Math Basics
// Topic: Palindrome Number
// ==========================================================



// ==========================================================
// What is a Palindrome Number?
// ==========================================================

// A Palindrome Number is a number that
// remains the same when read from left
// to right and right to left.

// Examples:

// 121   -> Palindrome
// 1331  -> Palindrome
// 12321 -> Palindrome

// 123   -> Not Palindrome
// 5678  -> Not Palindrome



// ==========================================================
// Interview Logic
// ==========================================================

// Step 1:
// Store the original number.

// Step 2:
// Reverse the number.

// Step 3:
// Compare the reversed number
// with the original number.

// Step 4:
// If both are equal,
// then it is a Palindrome Number.



// ==========================================================
// Algorithm
// ==========================================================

/*

Input = 121

↓

Store original number

↓

Reverse the number

↓

Compare

↓

Equal ?

Yes → Palindrome

No → Not Palindrome

*/



// ==========================================================
// Code
// ==========================================================

let number = 121;

let original = number;

let reverse = 0;

while (number > 0) {

    let LastDigit = number % 10;

    reverse = reverse * 10 + LastDigit;

    number = Math.floor(number / 10);

}

if (original === reverse) {

    console.log(original + " is a Palindrome Number");

} else {

    console.log(original + " is Not a Palindrome Number");

}



// ==========================================================
// Dry Run
// ==========================================================

/*

Input = 121

original = 121

reverse = 0


Iteration 1

number = 121

digit = 1

reverse = 1

number = 12


-----------------------------------


Iteration 2

number = 12

digit = 2

reverse = 12

number = 1


-----------------------------------


Iteration 3

number = 1

digit = 1

reverse = 121

number = 0


-----------------------------------

Compare

original = 121

reverse = 121

Equal ✅

Answer:
Palindrome Number

*/



// ==========================================================
// Time and Space Complexity
// ==========================================================

// Time Complexity  = O(log₁₀ n)
//
// Space Complexity = O(1)



// ==========================================================
// Real-World Use Cases
// ==========================================================

// ✔ Coding Interviews
// ✔ Number Pattern Problems
// ✔ Digital Number Validation
// ✔ Mathematical Algorithms
// ✔ Competitive Programming



// ==========================================================
// Interview Questions
// ==========================================================

/*

Q1. What is a Palindrome Number?

Answer:
A number that reads the same
from left to right and right to left.


----------------------------------------------------


Q2. How do you check whether
a number is a palindrome?

Answer:

1. Store the original number.

2. Reverse the number.

3. Compare both numbers.

If equal,
it is a palindrome.


----------------------------------------------------


Q3. Why do we store the original number?

Answer:

Because while reversing,
the original number becomes 0.

We need the original value
for comparison.


----------------------------------------------------


Q4. Which operators are used?

Answer:

% operator
→ Extract the last digit.

/ operator with Math.floor()
→ Remove the last digit.


----------------------------------------------------


Q5. Time Complexity?

Answer:

O(log n)


----------------------------------------------------


Q6. Space Complexity?

Answer:

O(1)

*/