import type { MealCombo } from "./combo.types.ts";
import { ItalianMealFactory } from "./italian-meal.factory.ts";
import { AmericanMealFactory } from "./american-meal.factory.ts";

export class MealComboFactory {
  static create(type: "italian" | "american"): MealCombo {
    let factory;

    switch (type) {
      case "italian":
        factory = new ItalianMealFactory();
        break;
      case "american":
        factory = new AmericanMealFactory();
        break;
      default:
        throw new Error("Unknown combo type");
    }

    return {
      pizza: factory.createPizza(),
      side: factory.createSide(),
      drink: factory.createDrink(),
    };
  }
}
