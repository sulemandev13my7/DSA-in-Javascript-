// ==========================================================
// Phase 1 - Recursion Basics
// ==========================================================



// ==========================================================
// What is Recursion?
// ==========================================================

// Recursion is a programming technique
// in which a function calls itself
// to solve a smaller version of the same problem.

// Example:
//
// print(5)
//
// ↓
//
// print(4)
//
// ↓
//
// print(3)
//
// ↓
//
// print(2)
//
// ↓
//
// print(1)


// ==========================================================
// What is a Base Case?
// ==========================================================

// A Base Case is the stopping condition
// of a recursive function.

// Without a Base Case,
// the function keeps calling itself
// forever and causes a Stack Overflow.

// Example:
//
// if (n === 0)
//     return;



// ==========================================================
// How to Make a Recursive Call
// ==========================================================

// A recursive function has two parts:
//
// 1. Base Case
// 2. Recursive Call



// ==========================================================
// Example
// Print Numbers from 1 to N
// ==========================================================

function printNumbers(n) {

    // Base Case
    if (n === 0) {
        return;
    }

    // Recursive Call
    printNumbers(n - 1);

    console.log(n);

}

printNumbers(5);

// Output
//
// 1
// 2
// 3
// 4
// 5



// ==========================================================
// Logic
// ==========================================================

// Step 1
// Function receives n.
//
// Step 2
// Check Base Case.
//
// Step 3
// Call itself with a smaller value.
//
// Step 4
// Continue until Base Case.
//
// Step 5
// Return back through the Call Stack.



// ==========================================================
// Dry Run (Call Stack)
// ==========================================================

/*

Function Call

printNumbers(5)

↓

printNumbers(4)

↓

printNumbers(3)

↓

printNumbers(2)

↓

printNumbers(1)

↓

printNumbers(0)

↓

Base Case Reached

Return



Now Printing Starts


printNumbers(1)

Output:
1

↑

printNumbers(2)

Output:
2

↑

printNumbers(3)

Output:
3

↑

printNumbers(4)

Output:
4

↑

printNumbers(5)

Output:
5

*/



// ==========================================================
// Visual Call Stack
// ==========================================================

/*

Top of Stack

printNumbers(0)

printNumbers(1)

printNumbers(2)

printNumbers(3)

printNumbers(4)

printNumbers(5)

Bottom of Stack


Base Case

↓

Stack Starts Removing

↓

5

↓

4

↓

3

↓

2

↓

1

*/



// ==========================================================
// Time Complexity
// ==========================================================

// Function is called once for each value.
//
// Time Complexity = O(n)



// ==========================================================
// Space Complexity
// ==========================================================

// Every recursive call is stored
// in the Call Stack.
//
// Space Complexity = O(n)



// ==========================================================
// Advantages
// ==========================================================

// ✔ Cleaner Code
// ✔ Easier to solve recursive problems
// ✔ Useful for Trees and Graphs
// ✔ Useful in Divide & Conquer Algorithms



// ==========================================================
// Disadvantages
// ==========================================================

// ✘ Extra Memory (Call Stack)
// ✘ Can cause Stack Overflow
// ✘ Sometimes slower than loops



// ==========================================================
// Real-World Use Cases
// ==========================================================

// ✔ File System Traversal
// ✔ Folder Navigation
// ✔ Binary Trees
// ✔ Graph Traversal (DFS)
// ✔ Fibonacci
// ✔ Factorial
// ✔ Merge Sort
// ✔ Quick Sort
// ✔ Backtracking Problems



// ==========================================================
// Interview Questions
// ==========================================================

/*

Q1. What is Recursion?

Answer:
Recursion is a technique where
a function calls itself
to solve a smaller version
of the same problem.


---------------------------------------------------


Q2. What is a Base Case?

Answer:
A Base Case is the stopping condition
that prevents infinite recursive calls.


---------------------------------------------------


Q3. What happens if there is no Base Case?

Answer:
The function keeps calling itself
until a Stack Overflow occurs.


---------------------------------------------------


Q4. What is the Call Stack?

Answer:
The Call Stack stores
all active function calls.

When the Base Case is reached,
functions return one by one.


---------------------------------------------------


Q5. Time Complexity?

Answer:

O(n)


---------------------------------------------------


Q6. Space Complexity?

Answer:

O(n)

because every recursive call
occupies stack memory.

*/
function demo(n) {
    if (n === 0) return;
    console.log(n);
    demo(n - 1);
}

demo(3);

function demo(n) {
    if (n === 0) return;
    demo(n - 1);
    console.log(n);
}

demo(3);


// ==========================================================
// 1. File System Traversal
// ==========================================================

// Example Folder Structure

const files = {
    name: "Project",
    children: [
        {
            name: "src",
            children: [
                { name: "index.js", children: [] },
                { name: "app.js", children: [] }
            ]
        },
        {
            name: "images",
            children: [
                { name: "logo.png", children: [] }
            ]
        }
    ]
};

function showFiles(folder) {

    console.log(folder.name);

    for (let child of folder.children) {
        showFiles(child);
    }

}

showFiles(files);



// ==========================================================
// 2. Folder Navigation
// ==========================================================

const folders = {
    name: "C:",
    children: [
        {
            name: "Users",
            children: [
                {
                    name: "Suleman",
                    children: []
                }
            ]
        }
    ]
};

function openFolder(folder) {

    console.log(folder.name);

    folder.children.forEach(openFolder);

}

openFolder(folders);



// ==========================================================
// 3. Binary Tree Traversal
// ==========================================================

const tree = {

    value: 10,

    left: {
        value: 5,
        left: null,
        right: null
    },

    right: {
        value: 20,
        left: null,
        right: null
    }

};

function inorder(node) {

    if (node === null) return;

    inorder(node.left);

    console.log(node.value);

    inorder(node.right);

}

inorder(tree);



// ==========================================================
// 4. Graph Traversal (DFS)
// ==========================================================

const graph = {

    A: ["B", "C"],

    B: ["D"],

    C: [],

    D: []

};

let visited = new Set();

function dfs(node) {

    if (visited.has(node)) return;

    visited.add(node);

    console.log(node);

    for (let neighbour of graph[node]) {
        dfs(neighbour);
    }

}

dfs("A");



// ==========================================================
// 5. Fibonacci
// ==========================================================

function fibonacci(n) {

    if (n <= 1) return n;

    return fibonacci(n - 1) + fibonacci(n - 2);

}

console.log(fibonacci(6));



// ==========================================================
// 6. Factorial
// ==========================================================

function factorial(n) {

    if (n === 0) return 1;

    return n * factorial(n - 1);

}

console.log(factorial(5));



// ==========================================================
// 7. Merge Sort
// ==========================================================

function mergeSort(arr) {

    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);

    let left = mergeSort(arr.slice(0, mid));

    let right = mergeSort(arr.slice(mid));

    return merge(left, right);

}

function merge(left, right) {

    let result = [];

    while (left.length && right.length) {

        if (left[0] < right[0]) {

            result.push(left.shift());

        } else {

            result.push(right.shift());

        }

    }

    return [...result, ...left, ...right];

}

console.log(mergeSort([8, 2, 5, 1]));



// ==========================================================
// 8. Quick Sort
// ==========================================================

function quickSort(arr) {

    if (arr.length <= 1) return arr;

    let pivot = arr[arr.length - 1];

    let left = [];

    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {

        if (arr[i] < pivot) {

            left.push(arr[i]);

        } else {

            right.push(arr[i]);

        }

    }

    return [...quickSort(left), pivot, ...quickSort(right)];

}

console.log(quickSort([7, 3, 9, 1]));



// ==========================================================
// 9. Backtracking
// ==========================================================

// Print all paths from 1 to n

function path(n, current = "") {

    if (n === 0) {

        console.log(current);

        return;

    }

    path(n - 1, current + "L");

    path(n - 1, current + "R");

}

path(2);