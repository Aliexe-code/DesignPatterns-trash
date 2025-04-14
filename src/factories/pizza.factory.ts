import type { Pizza, PizzaSize } from "../types/pizza.types";

class CheesePizza implements Pizza {
    name = "Cheese Pizza";
    size: PizzaSize = "medium";
    toppings = ["cheese"];
    bake() {
      console.log(`🧀 Baking ${this.size} ${this.name} with ${this.toppings.join(", ")}`);
    }
}

class PepperoniPizza implements Pizza{
    name="Pepperoni Pizza"
    size:PizzaSize='large'
    toppings = ["cheese", "pepperoni"]
    bake(){
        console.log(`🍕 Baking ${this.size} ${this.name} with ${this.toppings.join(", ")}`);
    }
}

export class PizzaFactory{
    static create(type:string):Pizza{
        switch (type.toLowerCase()) {
            case "cheese":
                return new CheesePizza();
            case "pepperoni":
                return new PepperoniPizza();
            default:
                throw new Error(`❌ Pizza type "${type}" is not supported.`);
        }
    }
}