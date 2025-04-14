import type { MealFactory, Side, Drink, MealCombo } from "./combo.types.ts";
import type { Pizza, PizzaSize } from "../types/pizza.types.ts";

class AmericanPizza implements Pizza {
  name = "BBQ Chicken";
  size: PizzaSize = "large";
  toppings = ["chicken", "bbq sauce"];
  bake() {
    console.log(`🔥 Baking ${this.name} with ${this.toppings.join(", ")}`);
  }
}

class Fries implements Side {
  name = "French Fries";
  serve() {
    console.log(`🍟 Serving ${this.name}`);
  }
}

class Cola implements Drink {
  name = "Cola";
  pour() {
    console.log(`🥤 Pouring ${this.name}`);
  }
}

export class AmericanMealFactory implements MealFactory {
  createPizza(): Pizza {
    return new AmericanPizza();
  }

  createSide(): Side {
    return new Fries();
  }

  createDrink(): Drink {
    return new Cola();
  }
}
