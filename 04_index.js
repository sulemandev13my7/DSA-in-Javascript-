// ==========================================================
// Phase 1 - Math Basics
// Topic: Count Digits & Reverse Number
// ==========================================================



// ==========================================================
// Count Digits in a Number
// ==========================================================

// Definition:
//
// Count how many digits are present
// in a given number.

// Example:
//
// Input  = 12345
// Output = 5



// ==========================================================
// Logic
// ==========================================================

// Step 1:
// Take the last digit using % 10.
//
// Step 2:
// Remove the last digit using Math.floor(num / 10).
//
// Step 3:
// Repeat until the number becomes 0.
//
// Count how many times the loop runs.


// ==========================================================
// Code
// ==========================================================

let num = 12345;

let count = 0;

while (num > 0) {

    count++;

    num = Math.floor(num / 10);

}

console.log(count);

// Output:
// 5



// ==========================================================
// Dry Run
// ==========================================================

/*

Number = 12345

Iteration      num      count

1             12345       1

2              1234       2

3               123       3

4                12       4

5                 1       5

6                 0

Answer = 5

*/



// ==========================================================
// Time & Space Complexity
// ==========================================================

// Time Complexity  = O(log₁₀ n)
//
// Space Complexity = O(1)



// ==========================================================
// Reverse a Number
// ==========================================================

// Definition:
//
// Reverse all digits of a number.

// Example:
//
// Input  = 12345
//
// Output = 54321



// ==========================================================
// Logic
// ==========================================================

// lastDigit = num % 10
//
// reverse = reverse * 10 + lastDigit
//
// Remove last digit
//
// num = Math.floor(num / 10)
//
// Repeat until num becomes 0.



// ==========================================================
// Code
// ==========================================================

let number = 12345;

let reverse = 0;

while (number > 0) {

    let digit = number % 10;

    reverse = reverse * 10 + digit;

    number = Math.floor(number / 10);

}

console.log(reverse);

// Output:
// 54321



// ==========================================================
// Dry Run
// ==========================================================

/*

Number = 12345

digit     reverse

5            5

4           54

3          543

2         5432

1        54321

Answer = 54321

*/



// ==========================================================
// Time & Space Complexity
// ==========================================================

// Time Complexity = O(log₁₀ n)
//
// Space Complexity = O(1)



// ==========================================================
// Interview Questions
// ==========================================================

/*

Q1. How do you count digits in a number?

Answer:

Repeatedly divide the number by 10
until it becomes 0.

Count the number of iterations.


---------------------------------------------------------

Q2. How do you reverse a number?

Answer:

Take the last digit using %10.

Append it to reverse.

Remove the last digit using Math.floor(num / 10).

Repeat until the number becomes 0.


---------------------------------------------------------

Q3. Why do we use %10?

Answer:

To extract the last digit.


---------------------------------------------------------

Q4. Why do we use Math.floor(num / 10)?

Answer:

To remove the last digit.


---------------------------------------------------------

Q5. Time complexity of both problems?

Answer:

O(log n)


---------------------------------------------------------

Q6. Space complexity?

Answer:

O(1)

*/



// ==========================================================
// Real-World Use Cases
// ==========================================================

// ✔ ATM PIN validation
// ✔ OTP processing
// ✔ Number manipulation
// ✔ Palindrome Number
// ✔ Armstrong Number
// ✔ Reverse Integer
// ✔ Integer to String conversions
// ==========================================================
// Real-World Use Cases
// ==========================================================

// 1. ATM PIN Validation
// Compare entered PIN digit by digit.

// 2. OTP Processing
// Verify OTP by checking individual digits.

// 3. Number Manipulation
// Extract, count, or modify digits of a number.

// 4. Palindrome Number
// Check whether a number reads the same
// from left to right and right to left.

// Example:
// 121 -> Palindrome
// 123 -> Not Palindrome

// 5. Armstrong Number
// Check whether a number is equal to the
// sum of its digits raised to the power
// of the total number of digits.

// Example:
// 153 = 1³ + 5³ + 3³ = 153

// 6. Reverse Integer
// Reverse the digits of an integer.

// Example:
// 12345 -> 54321

// 7. Integer to String Conversion
// Convert a number into text for display,
// printing, or storage.

// Example:
// 12345 -> "12345"

// 8. Digital Lock Systems
// Verify entered numeric passwords.

// 9. Banking Applications
// Validate account numbers and transaction IDs.

// 10. Mobile Applications
// Process PINs, OTPs, and verification codes.


// ==========================================================
// Real-World Use Cases (Code Examples)
// ==========================================================



// ==========================================================
// 1. ATM PIN Validation
// ==========================================================

let savedPIN = 1234;
let enteredPIN = 1234;

if (savedPIN === enteredPIN) {
    console.log("Access Granted");
} else {
    console.log("Invalid PIN");
}



// ==========================================================
// 2. OTP Processing
// ==========================================================

let generatedOTP = 567890;
let userOTP = 567890;

if (generatedOTP === userOTP) {
    console.log("OTP Verified");
} else {
    console.log("Invalid OTP");
}



// ==========================================================
// 3. Number Manipulation
// Count Digits
// ==========================================================

let number = 12345;
let count = 0;

while (number > 0) {
    count++;
    number = Math.floor(number / 10);
}

console.log("Digits =", count);



// ==========================================================
// 4. Palindrome Number
// ==========================================================

let num = 121;
let original = num;
let reverse = 0;

while (num > 0) {

    let digit = num % 10;

    reverse = reverse * 10 + digit;

    num = Math.floor(num / 10);

}

if (original === reverse) {
    console.log(original, "is Palindrome");
} else {
    console.log(original, "is Not Palindrome");
}



// ==========================================================
// 5. Armstrong Number
// ==========================================================

let arm = 153;
let temp = arm;
let sum = 0;

while (temp > 0) {

    let digit = temp % 10;

    sum += digit ** 3;

    temp = Math.floor(temp / 10);

}

if (sum === arm) {
    console.log(arm, "is Armstrong");
} else {
    console.log(arm, "is Not Armstrong");
}



// ==========================================================
// 6. Reverse Integer
// ==========================================================

let value = 98765;
let rev = 0;

while (value > 0) {

    let digit = value % 10;

    rev = rev * 10 + digit;

    value = Math.floor(value / 10);

}

console.log("Reverse =", rev);



// ==========================================================
// 7. Integer to String Conversion
// ==========================================================

let marks = 95;

let text = marks.toString();

console.log(text);

console.log(typeof text);



// ==========================================================
// 8. Digital Lock System
// ==========================================================

let password = 9876;
let enteredPassword = 9876;

console.log(password === enteredPassword ? "Door Open" : "Access Denied");



// ==========================================================
// 9. Banking Transaction ID
// ==========================================================

let transactionID = 123456789;

console.log("Transaction ID:", transactionID);



// ==========================================================
// 10. Mobile Verification Code
// ==========================================================

let verificationCode = 4521;

console.log("Your Verification Code is:", verificationCode);