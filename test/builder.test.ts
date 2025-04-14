import { CustomPizzaBuilder } from '../src/builders/custom-pizza.builder';
import { describe, expect, test } from 'bun:test';

describe('Builder Pattern', () => {
  test('should build a custom pizza', () => {
    const pizza = new CustomPizzaBuilder()
      .setName('Pepperoni Blast')
      .setSize('large')
      .addTopping('pepperoni')
      .addTopping('mushroom')
      .build();

    expect(pizza.name).toBe('Pepperoni Blast');
    expect(pizza.size).toBe('large');
    expect(pizza.toppings).toEqual(['pepperoni', 'mushroom']);
  });

  test('should build a pizza with default values', () => {
    const pizza = new CustomPizzaBuilder().build();

    expect(pizza.name).toBe('Custom Pizza');
    expect(pizza.size).toBe('medium');
    expect(pizza.toppings).toEqual([]);
  });
});
