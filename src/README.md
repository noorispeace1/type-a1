TypeScript Core Concepts & Utility Library

A comprehensive collection of TypeScript implementations demonstrating fundamental to advanced programming patterns, including Type Safety, Generics, OOP, and Algorithm Optimization.

##  Overview

This repository contains a curated set of TypeScript functions and class structures. The goal was to implement clean, reusable, and highly performant code while leveraging TypeScript's static typing to prevent runtime errors.

---

##  Key Implementations

### 1. Data Manipulation (Arrays & Strings)
Focuses on essential data transformation logic using modern ES6+ methods.
* **`filterEvenNumbers`**: Utilizes the `.filter()` method with a modulo check (`% 2 === 0`) to extract even integers.
* **`reverseString`**: Implements a robust string reversal pattern by chaining `.split('')`, `.reverse()`, and `.join('')`.

### 2. Type Safety & Guarding
Demonstrates how to handle multiple data types gracefully.
* **Union Types**: Created `StringOrNumber` to allow flexible input.
* **Type Guards**: Implemented `checkType` using `typeof` checks to return specific literal types (`"String" | "Number"`), ensuring the compiler tracks variable types accurately through different logic branches.

### 3. Advanced Generics
Showcases high-level abstraction for object property access.
* **`getProperty<T, K extends keyof T>`**: A type-safe way to access object properties. By using generic constraints, this function prevents developers from requesting keys that do not exist on a specific object, providing full Intellisense support.

### 4. Object-Oriented Programming (OOP) & Interfaces
Focuses on data modeling and structural inheritance.
* **Interface Extension**: Demonstrates how to expand data models (e.g., extending a `Book` to a `ReadBook`) while maintaining immutability using the **Spread Operator (`...`)**.
* **Class Inheritance**: Implements a `Person` base class and a `Student` derived class. This showcases the use of Access Modifiers (`public`), `super()` calls, and method overriding.

### 5. Algorithmic Efficiency
* **`getIntersection`**: An optimized approach to find common elements between two arrays. By converting the second array into a **Set**, the lookup complexity is reduced from $O(n)$ to $O(1)$, making the function significantly faster for large datasets.

---

##  Tech Stack
* **Language:** TypeScript
* **Environment:** Node.js / Browser
* **Patterns:** Functional Programming, OOP, Generics

---

##  Summary Statement
"In this project, I prioritized **Type Safety** and **Performance**. Every function is designed to be self-documenting through TypeScript's type system, ensuring that errors are caught at compile-time rather than runtime. From optimizing array intersections to building scalable class hierarchies, these snippets represent a modern approach to robust software development."