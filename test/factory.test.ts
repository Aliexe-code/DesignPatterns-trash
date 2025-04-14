import { PizzaFactory } from '../src/factories/pizza.factory';
import { describe, expect, test } from 'bun:test';

describe('Factory Pattern', () => {
  test('should create cheese pizza', () => {
    const pizza = PizzaFactory.create('cheese');
    expect(pizza.name).toBe('Cheese Pizza');
    expect(pizza.size).toBe('medium');
  });

  test('should create pepperoni pizza', () => {
    const pizza = PizzaFactory.create('pepperoni');
    expect(pizza.name).toBe('Pepperoni Pizza');
    expect(pizza.size).toBe('large');
  });
});
