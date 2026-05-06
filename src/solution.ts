///filterEvenNumbers 

function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}

const input = [1, 2, 3, 4, 5, 6];
const result = filterEvenNumbers(input);

console.log(result); 


//reverseString

function reverseString(str: string): string {

  return str.split('').reverse().join('');
}

// Example Usage:
const TB = "typescript";
const rs = reverseString(TB);

console.log(rs);



type StringOrNumber = string | number;


function checkType(input: StringOrNumber): "String" | "Number" {
  if (typeof input === "string") {
   
    return "String";
  } else {
   
    return "Number";
  }
}


console.log(checkType("Hello")); 
console.log(checkType(42));      



function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 1, name: "John Doe", age: 21 };

const userName = getProperty(user, "name"); // Returns: "John Doe"
const userAge = getProperty(user, "age");   // Returns: 21

console.log(userName);
console.log(userAge);






interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

interface ReadBook extends Book {
  isRead: boolean;
}


function toggleReadStatus(book: Book): ReadBook {
  return {
    ...book,
    isRead: true
  };
}


const myBook: Book = { 
  title: "TypeScript Guide", 
  author: "Jane Doe", 
  publishedYear: 2024 
};

const updatedBook = toggleReadStatus(myBook);

console.log(updatedBook);










class Person {
  
  constructor(public name: string, public age: number) {}
}

class Student extends Person {
  public grade: string;

  constructor(name: string, age: number, grade: string) {

    super(name, age);
    this.grade = grade;
  }


  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");
console.log(student.getDetails()); 




function getIntersection(arr1: number[], arr2: number[]): number[] {
  // Convert the second array to a Set for O(1) lookup performance
  const set2 = new Set(arr2);

  // Filter the first array, keeping only items found in set2
  return arr1.filter((num) => set2.has(num));
}

// Example Usage:
const result3 = getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);

console.log(result3);
