# Pizzaverse: Design Patterns Demo

This project demonstrates common software design patterns using a pizza restaurant simulation.

## 🍕 What's This About?
This code simulates a pizza restaurant that uses different software patterns to:
- Create pizzas
- Manage orders
- Track inventory
- Serve customers

## 🧩 Design Patterns Explained

### 1. Factory Pattern (`/factories`)
- **What it does**: Creates different types of pizzas (like a pizza factory)
- **Simple terms**: Think of it like a pizza menu - you ask for "cheese pizza" and get exactly that
- **Example in code**: `PizzaFactory.create("cheese")` makes a cheese pizza

### 2. Abstract Factory Pattern (`/abstract-factories`)
- **What it does**: Creates complete meal combos (pizza + side + drink)
- **Simple terms**: Like a combo meal at a restaurant - you get everything together
- **Example**: `MealComboFactory.create("italian")` gives you Margherita pizza + garlic bread + soda

### 3. Prototype Pattern (`/prototypes`)
- **What it does**: Lets you clone existing pizzas to make new ones
- **Simple terms**: Like photocopying your favorite pizza order
- **Example**: `pizzaRegistry.get("margherita").clone()` makes a copy of a Margherita pizza

### 4. Singleton Pattern (`/singletons`)
- **What it does**: Ensures there's only one kitchen manager in the restaurant
- **Simple terms**: There should only be one head chef managing the kitchen
- **Example**: `KitchenManager.getInstance()` always returns the same kitchen manager

### 5. Builder Pattern (`/builders`)
- **What it does**: Lets you construct complex pizzas step-by-step
- **Simple terms**: Like ordering a custom pizza where you specify each detail
- **Example**: 
```typescript
const pizza = new CustomPizzaBuilder()
  .setName('My Special Pizza')
  .setSize('large')
  .addTopping('pepperoni')
  .addTopping('mushrooms')
  .setCrust('thin')
  .build();
```

## How to Run
1. Install Bun (if you haven't):
```bash
curl -fsSL https://bun.sh/install | bash
```
2. Run the demo:
```bash
bun src/index.ts
```
3. Run tests
```bash
bun test
```
## 📝 Sample Output
When you run the program, you'll see:
```
🍽️ Welcome to Pizzaverse!
🧀 Baking medium Cheese Pizza with cheese
...
```

##  Why Use Design Patterns?
- Makes code easier to understand and maintain
- Solves common programming problems
- Helps avoid reinventing the wheel

## 📂 Project Structure
```
src/
├── abstract-factories/  # Meal combos
├── builders/            # Custom pizzas
├── factories/           # Pizza creation
├── prototypes/          # Pizza cloning
└── singletons/          # Kitchen management
```

Happy coding! 👨‍💻