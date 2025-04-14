import { PizzaFactory } from "./factories/pizza.factory.ts";
import { MealComboFactory } from "./abstract-factories/combo.factory.ts";
import { PizzaRegistry } from "./prototypes/pizza.registry.ts";
import { KitchenManager } from "./singletons/kitchen.manager.ts";

console.log("🍽️ Welcome to Pizzaverse!");

// Factory 
const pizza1 = PizzaFactory.create("cheese");
pizza1.bake();

// Abstract Factory 
console.log("\n Ordering Italian Combo:");
const italianCombo = MealComboFactory.create("italian");
italianCombo.pizza.bake();
italianCombo.side.serve();
italianCombo.drink.pour();

// Prototype: Cloning pizza
console.log("\n🍕 Cloning a Margherita Pizza:");
const pizzaRegistry = new PizzaRegistry();
const clonedPizza = pizzaRegistry.get("margherita").clone();
clonedPizza.bake();

// Singleton: Kitchen Manager
const kitchen1 = KitchenManager.getInstance();
kitchen1.placeOrder("Margherita Pizza");
kitchen1.addInventory("cheese", 5);
kitchen1.displayInventory();
kitchen1.serveOrder();

// Ensuring the Singleton pattern: Trying to create another instance
const kitchen2 = KitchenManager.getInstance();
console.log(kitchen1 === kitchen2 ? "✅ Same instance" : "❌ Different instances");
