import { MealComboFactory } from '../src/abstract-factories/combo.factory';
import { describe, expect, test } from 'bun:test';

describe('Abstract Factory Pattern', () => {
  test('should create italian combo', () => {
    const combo = MealComboFactory.create('italian');
    expect(combo.pizza).toBeDefined();
    expect(combo.side.name).toBe('Garlic Bread');
    expect(combo.drink.name).toBe('Soda');
  });
});
