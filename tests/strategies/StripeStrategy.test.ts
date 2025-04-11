import { StripeStrategy } from '../../src/strategies/StripeStrategy';
import { test, expect } from 'bun:test';

test('StripeStrategy processes payment correctly', () => {
    const stripe = new StripeStrategy();
    const result = stripe.pay(100);
    expect(result).toBe('Paid 100$ using Stripe');
});
