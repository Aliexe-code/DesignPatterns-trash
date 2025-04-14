import type { Pizza, PizzaSize } from "../types/pizza.types.ts";


 interface PizzaPrototype extends Pizza {
  clone(): PizzaPrototype;
}

class MargheritaPizza implements PizzaPrototype {
  name = "Margherita";
  size: PizzaSize = "medium";
  toppings = ["cheese", "basil"];

  bake() {
    console.log(`🍕 Baking ${this.name} with ${this.toppings.join(", ")}`);
  }

  clone(): PizzaPrototype {
    const clone = new MargheritaPizza();
    clone.name = this.name;
    clone.size = this.size;
    clone.toppings = [...this.toppings];
    return clone;
  }
}

class BBQChickenPizza implements PizzaPrototype {
  name = "BBQ Chicken";
  size: PizzaSize = "large";
  toppings = ["chicken", "bbq sauce"];

  bake() {
    console.log(`🔥 Baking ${this.name} with ${this.toppings.join(", ")}`);
  }

  clone(): PizzaPrototype {
    const clone = new BBQChickenPizza();
    clone.name = this.name;
    clone.size = this.size;
    clone.toppings = [...this.toppings];
    return clone;
  }
}

export { MargheritaPizza, BBQChickenPizza };
