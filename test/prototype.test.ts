import { PizzaRegistry } from '../src/prototypes/pizza.registry';
import { describe, expect, test } from 'bun:test';

describe('Prototype Pattern', () => {
  test('should clone pizza', () => {
    const registry = new PizzaRegistry();
    const original = registry.get('margherita');
    const clone = original.clone();
    
    expect(clone.type).toBe(original.type);
    expect(clone).not.toBe(original); // Different instances
  });
});
