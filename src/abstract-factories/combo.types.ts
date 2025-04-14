import type { Pizza } from "../types/pizza.types";

export interface Side {
  name: string;
  serve(): void;
}

export interface Drink {
  name: string;
  pour(): void;
}

export interface MealCombo {
  pizza: Pizza;
  side: Side;
  drink: Drink;
}

export interface MealFactory {
  createPizza(): Pizza;
  createSide(): Side;
  createDrink(): Drink;
}
