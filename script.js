/**
 * JAVASCRIPT ASSIGNMENT: OOP, REGEX, AND EXCEPTION HANDLING
 */

// =============================================================================
// PART A: OBJECT-ORIENTED PROGRAMMING (OOP)
// =============================================================================

/**
 * Q1. Student Class
 * Features: Properties (name, rollNo, marks) and Methods (displayDetails, checkResult)
 */
class Student {
    constructor(name, rollNo, marks) {
        this.name = name;
        this.rollNo = rollNo;
        this.marks = marks;
    }

    displayDetails() {
        console.log("--- Student Details ---");
        console.log(`Name: ${this.name}`);
        console.log(`Roll No: ${this.rollNo}`);
        console.log(`Marks: ${this.marks}`);
        this.checkResult();
    }

    checkResult() {
        // Condition: Pass if marks >= 40 else Fail
        const result = this.marks >= 40 ? "Pass" : "Fail";
        console.log(`Result: ${result}\n`);
    }
}

// Example usage Q1
const s1 = new Student("Deepak Kumar", 101, 78);
s1.displayDetails();


/**
 * Q2. Inheritance
 * Parent: Employee | Child: Manager
 */
class Employee {
    constructor(empId, empName, salary) {
        this.empId = empId;
        this.empName = empName;
        this.salary = salary;
    }

    displayEmployee() {
        console.log(`Employee ID: ${this.empId}, Name: ${this.empName}, Salary: ${this.salary}`);
    }
}

class Manager extends Employee {
    constructor(empId, empName, salary, department) {
        super(empId, empName, salary); // Inherit from Employee
        this.department = department;
    }

    displayManager() {
        console.log("--- Manager Profile ---");
        this.displayEmployee();
        console.log(`Department: ${this.department}\n`);
    }
}

// Example usage Q2
const manager1 = new Manager(5001, "Amit Sharma", 95000, "Operations");
manager1.displayManager();


/**
 * Q3. Encapsulation
 * BankAccount class with private balance using '#'
 */
class BankAccount {
    #balance; // Private variable

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Successfully deposited: ${amount}. Current Balance: ${this.#balance}`);
        }
    }

    withdraw(amount) {
        // Rule: Withdrawal amount cannot exceed balance
        if (amount > this.#balance) {
            console.log(`Transaction Failed: Insufficient funds for withdrawal of ${amount}.`);
        } else {
            this.#balance -= amount;
            console.log(`Successfully withdrawn: ${amount}. Remaining Balance: ${this.#balance}`);
        }
    }

    getBalance() {
        console.log(`Account Balance: ${this.#balance}`);
        return this.#balance;
    }
}

// Example usage Q3
const myAccount = new BankAccount(1000);
myAccount.deposit(500);
myAccount.withdraw(2000); // Should fail
myAccount.withdraw(300);
myAccount.getBalance();
console.log("");


/**
 * Q4. Constructor & Object Creation
 * Car class with 3 object instances
 */
class Car {
    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }

    displayCarInfo() {
        console.log(`Car: ${this.brand} ${this.model} | Price: ${this.price}`);
    }
}

const car1 = new Car("Tesla", "Model S", "$80,000");
const car2 = new Car("BMW", "X5", "$65,000");
const car3 = new Car("Audi", "A6", "$55,000");

console.log("--- Car Inventory ---");
car1.displayCarInfo();
car2.displayCarInfo();
car3.displayCarInfo();
console.log("");


// =============================================================================
// PART B: REGULAR EXPRESSIONS (RegEx)
// =============================================================================

// Q5. Validate Email Address
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
const testEmail = "example@gmail.com";
console.log(`Email Validation (${testEmail}): ${emailPattern.test(testEmail)}`);

// Q7. Password Validation (Min 8 chars, 1 Upper, 1 Lower, 1 Num, 1 Special)
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
const testPass = "Pass123!";
console.log(`Password Validation (${testPass}): ${passwordPattern.test(testPass)}`);

// Q7 (cont). Mobile Number Validation (Indian: 10 digits, starts with 6-9)
const mobilePattern = /^[6-9]\d{9}$/;
const testMobile = "9876543210";
console.log(`Mobile Validation (${testMobile}): ${mobilePattern.test(testMobile)}`);

// Q8. Extract Numbers from String
const dataStr = "Order123Amount450";
const extractedNumbers = dataStr.match(/\d+/g);
console.log(`Extracted Numbers: ${extractedNumbers}`); // Output: 123, 450

// Q9. Replace Spaces with *
const spaceStr = "JavaScript Regular Expression";
const replacedStr = spaceStr.replace(/\s+/g, "*");
console.log(`Replaced String: ${replacedStr}\n`);


// =============================================================================
// PART C: EXCEPTION HANDLING
// =============================================================================

/**
 * Q10. Divide by Zero Exception
 */
function safeDivision(num, den) {
    try {
        if (den === 0) {
            throw new Error("DivideByZeroError: Denominator cannot be zero.");
        }
        console.log(`Division Result: ${num / den}`);
    } catch (error) {
        console.log(`Error caught: ${error.message}`);
    } finally {
        console.log("Execution of division block finished.");
    }
}
safeDivision(10, 0);

/**
 * Q11. Invalid Age Exception
 */
function checkAge(age) {
    try {
        if (age < 18) {
            throw "Not Eligible";
        } else {
            console.log("Eligible to Vote");
        }
    } catch (error) {
        console.log(`Age Exception: ${error}`);
    }
}
checkAge(16);

/**
 * Q13. Custom Exception (Username)
 */
function validateUsername(username) {
    try {
        if (username.length < 5) {
            throw new Error("Username length must be >= 5 characters.");
        }
        console.log("Username is valid.");
    } catch (error) {
        console.log(`Custom Exception: ${error.message}`);
    }
}
validateUsername("abc");

/**
 * Q15. Multiple Catch Scenarios (Calculator)
 */
function calculator(action, val1, val2) {
    try {
        if (typeof val1 !== 'number' || typeof val2 !== 'number') {
            throw new TypeError("Invalid Input: Both arguments must be numbers.");
        }
        
        if (action === 'divide' && val2 === 0) {
            throw new RangeError("Math Error: Cannot divide by zero.");
        }

        if (action === 'add') console.log(`Sum: ${val1 + val2}`);
        if (action === 'divide') console.log(`Quotient: ${val1 / val2}`);
        
    } catch (error) {
        if (error instanceof TypeError) {
            console.log("Type Error handled: " + error.message);
        } else if (error instanceof RangeError) {
            console.log("Range/Math Error handled: " + error.message);
        } else {
            console.log("Unknown Error: " + error);
        }
    }
}

console.log("--- Multiple Exception Testing ---");
calculator('add', 10, "five"); // Trigger TypeError
calculator('divide', 10, 0);    // Trigger RangeError