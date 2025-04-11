import { CryptoStrategy } from '../../src/strategies/CryptoStrategy';
import { test, expect } from 'bun:test';

test('CryptoStrategy processes payment correctly', () => {
    const crypto = new CryptoStrategy();
    const result = crypto.pay(200);
    expect(result).toBe('Paid 200$ using Crypto');
});
