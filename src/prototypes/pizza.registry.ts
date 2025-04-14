import { MargheritaPizza, BBQChickenPizza } from "./pizza.prototype.ts";

export class PizzaRegistry {
  private pizzas: Record<string, any> = {};

  constructor() {
    this.pizzas["margherita"] = new MargheritaPizza();
    this.pizzas["bbqChicken"] = new BBQChickenPizza();
  }

  get(pizzaType: string) {
    return this.pizzas[pizzaType];
  }
}
