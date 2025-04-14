import { KitchenManager } from '../src/singletons/kitchen.manager';
import { describe, expect, test } from 'bun:test';

describe('Singleton Pattern', () => {
  test('should return same instance', () => {
    const instance1 = KitchenManager.getInstance();
    const instance2 = KitchenManager.getInstance();
    expect(instance1).toBe(instance2);
  });

  test('should manage inventory', () => {
    const kitchen = KitchenManager.getInstance();
    kitchen.addInventory('cheese', 5);
    expect(kitchen.checkInventory('cheese', 3)).toBeTrue();
    expect(kitchen.checkInventory('cheese', 6)).toBeTrue();
    expect(kitchen.checkInventory('cheese', 10)).toBeTrue();
  });
});
