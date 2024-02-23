---
title: "Encapsulation in Object-Oriented Programming"
date: 2024-02-22
draft: false
author: "Walid"
tags:
  - OOP
  - Encapsulation
  - JavaScript
  - TypeScript
  - PHP
  - Python
  - Software Design
  - Backend
image: /images/space-capsule.webp
description: "Encapsulation in Object-Oriented Programming"
toc: true
---

## Introduction to Encapsulation

Encapsulation, a cornerstone of Object-Oriented Programming (OOP), encapsulates data and operations on data within objects, shielding the internal state from unauthorized access. This principle enhances modularity, maintainability, and data integrity within software applications.

## The Pillars of Encapsulation

Encapsulation intertwines with other OOP principles like abstraction, inheritance, and polymorphism, but it stands out by offering:

- **Data Hiding**: Restricting access to the internal state of an object.
- **Interface Exposure**: Exposing a controlled interface to interact with an object's data.

## Conceptual Overview

### Everyday Analogy

Consider a bank account. The account balance is private, accessible or modifiable not directly but through public methods like deposits or withdrawals, demonstrating encapsulation in everyday contexts.

## Encapsulation in Programming Languages

### JavaScript

JavaScript, traditionally not class-based, employs closures and recently, class syntax, to achieve encapsulation:

{{< highlight js >}}
class Car {
  #speed = 0; // Private property. The '#' prefix makes 'speed' accessible only within the class.

  accelerate(increment) {
    this.#speed += increment;
  }

  getSpeed() {
    return this.#speed;
  }
}

let myCar = new Car();
myCar.accelerate(20);
console.log(myCar.getSpeed()); // 20
{{< /highlight >}}

### TypeScript

TypeScript, enhancing JavaScript with types and access modifiers, offers a robust way to achieve encapsulation:

{{< highlight ts >}}
class SpaceCapsule {
  private oxygenLevel: number = 100; // Private property for internal management.
  private shieldStrength: number = 100; // Private property for external interactions.

  constructor() {
    // Constructor can initialize any necessary properties.
  }

  // External method: Simulates the capsule being hit by space debris.
  public hitByDebris(debrisImpact: number): void {
    this.shieldStrength -= debrisImpact;
    if (this.shieldStrength < 0) {
      this.shieldStrength = 0;
    }
    console.log(`Shield strength is now ${this.shieldStrength}.`);
  }

  // Internal method: Adjusts the oxygen level inside the capsule.
  private adjustOxygen(levelChange: number): void {
    this.oxygenLevel += levelChange;
    if (this.oxygenLevel > 100) {
      this.oxygenLevel = 100;
    } else if (this.oxygenLevel < 0) {
      this.oxygenLevel = 0;
    }
    console.log(`Oxygen level is now ${this.oxygenLevel}%.`);
  }

  // Public method: Allows external entities to request oxygen adjustment.
  public requestOxygenAdjustment(levelChange: number): void {
    this.adjustOxygen(levelChange);
  }

  // External method: Repairs the shield from outside.
  public repairShield(repairAmount: number): void {
    this.shieldStrength += repairAmount;
    if (this.shieldStrength > 100) {
      this.shieldStrength = 100;
    }
    console.log(`Shield repaired to ${this.shieldStrength} strength.`);
  }

  // Public method: Reports the status of the capsule, including shield strength and oxygen level.
  public reportStatus(): void {
    console.log(`Current shield strength: ${this.shieldStrength}.`);
    console.log(`Current oxygen level: ${this.oxygenLevel}%.`);
  }
}

// Example usage:
let myCapsule = new SpaceCapsule();
myCapsule.hitByDebris(20);
myCapsule.requestOxygenAdjustment(-10); // External request that internally adjusts oxygen.
myCapsule.reportStatus();
myCapsule.repairShield(15);

{{< /highlight >}}

### PHP

PHP uses visibility keywords (`public`, `private`, `protected`) to enforce encapsulation:

{{< highlight php >}}
class Account {
  private $balance = 0;

  public function deposit($amount) {
    $this->balance += $amount;
  }

  public function getBalance() {
    return $this->balance;
  }
}

$myAccount = new Account();
$myAccount->deposit(100);
echo $myAccount->getBalance(); // 100
{{< /highlight >}}

### Python

Python signifies private attributes using underscores (`_` or `__`) as a naming convention:

{{< highlight python >}}
class Account:
    def __init__(self, initial_balance=0):
        self.__balance = initial_balance  # Private attribute to store the account balance
        self.__minimum_balance = 100  # Private attribute to store the minimum required balance
        self.__annual_interest_rate = 0.05  # Private attribute for annual interest rate (5% example)

    def deposit(self, amount):
        """Public method to deposit money into the account."""
        if amount > 0:
            self.__balance += amount
            print(f"Deposited: {amount}. New balance: {self.__balance}.")
        else:
            print("Deposit amount must be positive.")

    def withdraw(self, amount):
        """Public method to withdraw money from the account."""
        if 0 < amount <= self.__balance - self.__minimum_balance:
            self.__balance -= amount
            print(f"Withdrew: {amount}. New balance: {self.__balance}.")
        else:
            print("Insufficient funds for this withdrawal or minimum balance requirement not met.")

    def get_balance(self):
        """Public method to check the current balance."""
        return self.__balance

    def apply_monthly_interest(self):
        """Public method to apply monthly interest to the account balance."""
        monthly_interest = self.__balance * (self.__annual_interest_rate / 12)
        self.__balance += monthly_interest
        print(f"Monthly interest applied. New balance: {self.__balance}.")

    def set_annual_interest_rate(self, rate):
        """Public method to update the annual interest rate."""
        if 0 <= rate <= 1:  # Ensuring the rate is a valid percentage.
            self.__annual_interest_rate = rate
            print(f"Annual interest rate updated to: {rate}.")
        else:
            print("Invalid interest rate. Please enter a rate between 0 and 1.")

    # Additional method to demonstrate accessing and modifying a private attribute safely
    def update_minimum_balance(self, new_minimum):
        """Public method to update the minimum balance requirement."""
        if new_minimum >= 0:
            self.__minimum_balance = new_minimum
            print(f"Minimum balance requirement updated to: {new_minimum}.")
        else:
            print("Minimum balance must be a non-negative value.")

# Example usage:
acc = Account(50)
acc.deposit(50)
print(f"Account balance: {acc.get_balance()}")  # 100
acc.withdraw(20)
acc.apply_monthly_interest()
acc.set_annual_interest_rate(0.04)  # Update interest rate to 4%
acc.update_minimum_balance(200)

{{< /highlight >}}

## Encapsulation Best Practices

- **Minimal Interface**: Expose only what's necessary, keeping the rest private.
- **Validation**: Perform checks within setter methods to ensure data integrity.
- **Consistency**: Use consistent naming conventions for private and public components.

## Encapsulation's Role in Software Design

Encapsulation not only organizes code but also lays the groundwork for robust software architecture, making systems easier to debug, extend, and maintain.

## Conclusion

Encapsulation in OOP offers a strategic approach to managing software complexity by safeguarding an object's internal state and exposing a limited interface for interaction. Through careful design and adherence to OOP principles, developers can craft resilient, scalable, and maintainable applications.

For further reading and advanced techniques, the [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/2/classes.html) and [PHP Manual](https://www.php.net/manual/en/language.oop5.visibility.php) offer extensive insights into encapsulation.

