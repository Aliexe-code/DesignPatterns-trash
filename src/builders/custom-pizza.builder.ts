import type { Pizza, PizzaSize } from "../types/pizza.types.ts";

class CustomPizza implements Pizza {
    constructor(
      public name: string,
      public size: PizzaSize,
      public toppings: string[],
      public crust?: string
    ) {}
  
    bake() {
      console.log(`🍕 Baking your custom ${this.size} "${this.name}" pizza with ${this.toppings.join(", ")}${this.crust ? ` on a ${this.crust} crust` : ''}`);
    }
  }
  

  export class CustomPizzaBuilder {
    private name: string = "Custom Pizza";
    private size: PizzaSize = "medium";
    private toppings: string[] = [];
    private crust?: string;
  
    setName(name: string): this {
      this.name = name;
      return this;
    }
  
    setSize(size: PizzaSize): this {
      this.size = size;
      return this;
    }
  
    addTopping(topping: string): this {
      this.toppings.push(topping);
      return this;
    }
  
    setCrust(crust: string): this {
      this.crust = crust;
      return this;
    }
  
    build(): CustomPizza {
      return new CustomPizza(this.name, this.size, this.toppings, this.crust);
    }
  }
