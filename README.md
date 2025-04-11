1. Introduction  

Welcome to this repository! This project demonstrates the Strategy Design Pattern  using Bun  as the runtime and TypeScript  for type safety. The goal is to help you understand how to implement and use design patterns in modern JavaScript/TypeScript projects. 

2. What is the Strategy Design Pattern?  

The Strategy Pattern is a behavioral design pattern that enables selecting an algorithm's behavior at runtime. Instead of hardcoding different behaviors into a single class, the Strategy Pattern separates them into interchangeable classes. if you didn`t understand anything we're comming with example.

Imagine a navigation app (like Google Maps). It can suggest different strategies to get to a destination:

    🚗 By car

    🚶‍♂️ On foot

    🚴‍♂️ By bike

    🚆 By public transport

You (the app user) choose which strategy to use, but the core logic of the app (displaying the route, calculating ETA, etc.) stays the same.

In this project: 

    PaymentStrategy is the interface defining the common behavior (pay method).
    StripeStrategy, PaypalStrategy, CryptoStrategy and BankTransferStrategy are concrete implementations of the PaymentStrategy.
    PaymentContext uses a strategy to process payments dynamically.

    3. Why Use the Strategy Pattern?  

    Flexibility : You can change behaviors without modifying existing code.
    Open/Closed Principle : Easily add new strategies without breaking existing ones.
    Single Responsibility : Each strategy class focuses on one specific behavior.
     
    4. Project Structure  
    src/
    ├── PaymentContext.ts       # Context class that uses a payment strategy
    ├── strategies/
    │   ├── PaymentStrategy.ts  # Interface for payment strategies
    │   ├── StripeStrategy.ts   # Concrete strategy for Stripe payments
    │   ├── PaypalStrategy.ts   # Concrete strategy for PayPal payments
    │   └── CryptoStrategy.ts   # Concrete strategy for Crypto payments
    │   └── BankTransferStrategy.ts   # Concrete strategy for Bank Transfer payments
    tests/
    └── PaymentContext.test.ts  # Unit tests for the PaymentContext
    README.md                   # This file

    5-UML Diagram  
                    +-------------------+
                     |  PaymentContext   |
                     +-------------------+
                     | - strategy:       |
                     |   PaymentStrategy |
                     +-------------------+
                     | + setStrategy()   |
                     | + processPayment()|
                     +-------------------+
                             ▲
                             |
                             |
               +-------------------------+
               |  PaymentStrategy        |
               +-------------------------+
               | + pay(amount): string   |
               +-------------------------+
                    ▲           ▲           ▲            ▲
                    |            |            |            |
         +----------------+ +----------------+ +----------------+ +---------------------+
         | StripeStrategy | | PaypalStrategy | | CryptoStrategy | | BankTransferStrategy |
         +----------------+ +----------------+ +----------------+ +---------------------+
         | + pay(amount): | | + pay(amount): | | + pay(amount): | | + pay(amount):       |
         |   string       | |   string       | |   string       | |   string             |
         +----------------+ +----------------+ +----------------+ +---------------------+


6-Project Setup
 1. clone 
  ```bash
   git clone https://github.com/Aliexe-code/DesignPatterns-trash.git
   cd DesignPatterns-trash
   ```
   2. install dependencies
   ```bash
   bun install
   ```
   3. run tests
   ```bash
   bun test
   ```
   4. run application
   ```bash
   bun start    
   ```
   
