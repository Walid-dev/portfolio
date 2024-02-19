---
title: "Design Patterns"
date: 2024-02-16T00:00:00+00:00
draft: false
author: "Walid"
tags:
  - Software Development
  - Design Patterns
  - Programming
  - PHP
  - JavaScript
  - Backend
  - Frontend
image: /images/design-patterns.webp
description: "Explore the world of software design patterns with JavaScript and PHP examples, providing solutions to common software design problems, enhancing code readability, reusability, and scalability."
toc: true
---

## Introduction

Software design patterns are typical solutions to common problems in software design. They serve as templates for solving recurring design issues, promoting more efficient and effective development practices. This guide focuses on JavaScript and PHP examples to explore significant design patterns.

### Creational Patterns

Creational patterns provide mechanisms for object creation, increasing flexibility and reuse of existing code.

#### Factory Method in JavaScript

The Factory Method pattern defines an interface for creating an object, letting subclasses alter the type of objects that will be created.

```javascript
class Creator {
  factoryMethod() {}

  someOperation() {
    const product = this.factoryMethod();
    return `Creator: The same creator's code has just worked with ${product.operation()}`;
  }
}

class ConcreteCreator1 extends Creator {
  factoryMethod() {
    return new ConcreteProduct1();
  }
}

class Product {
  operation() {}
}

class ConcreteProduct1 extends Product {
  operation() {
    return '{Result of the ConcreteProduct1}';
  }
}
```

### Structural Patterns

Structural patterns explain assembling objects and classes into larger structures, keeping these structures flexible and efficient.

#### Adapter in PHP

The Adapter pattern allows objects with incompatible interfaces to collaborate.

```php
class RoundHole {
  private $radius;

  public function __construct($radius) {
    $this->radius = $radius;
  }

  public function fits(RoundPeg $peg) {
    return $this->getRadius() >= $peg->getRadius();
  }

  public function getRadius() {
    return $this->radius;
  }
}

class SquarePegAdapter extends RoundPeg {
  private $peg;

  public function __construct(SquarePeg $peg) {
    $this->peg = $peg;
  }

  public function getRadius() {
    return sqrt((pow(($this->peg->getWidth() / 2), 2) * 2));
  }
}
```

<br><hr><br>

### 10 Design Patterns Explained in 10 Minutes

<br>
{{< youtube tv-_1er1mWI >}}
<br>

## Conclusion

Understanding design patterns is crucial for software engineers to solve common design problems efficiently. By mastering these patterns in JavaScript and PHP, developers can enhance their code's readability, reusability, and scalability.

For further exploration of design patterns, studying more patterns and applying them in your projects is recommended.

![Software Design Patterns](/images/software_design_patterns.png)

For a deeper dive into Design Patterns and their documentation, visit the [Refactoring.guru website](https://refactoring.guru/).


*Illustration: Abstract representation of various software design patterns in JavaScript and PHP.*