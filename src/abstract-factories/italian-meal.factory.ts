import type { MealFactory, Side, Drink, MealCombo } from "./combo.types.ts";
import type { Pizza, PizzaSize } from "../types/pizza.types";

class ItalianPizza implements Pizza {
  name = "Margherita";
  size: PizzaSize = "medium";
  toppings = ["basil", "mozzarella"];
  bake() {
    console.log(`🍕 Baking ${this.name} with ${this.toppings.join(", ")}`);
  }
}

class GarlicBread implements Side {
  name = "Garlic Bread";
  serve() {
    console.log(`🧄 Serving ${this.name}`);
  }
}

class Soda implements Drink {
  name = "Soda";
  pour() {
    console.log(`🥤 Pouring ${this.name}`);
  }
}

export class ItalianMealFactory implements MealFactory {
  createPizza(): Pizza {
    return new ItalianPizza();
  }

  createSide(): Side {
    return new GarlicBread();
  }

  createDrink(): Drink {
    return new Soda();
  }
}
