import { PaypalStrategy } from "../../src/strategies/PaypalStrategy";
import { test, expect } from "bun:test";

test('PaypalStrategy processes payment correctly', () => {
    const paypal = new PaypalStrategy();
    const result = paypal.pay(100);
    expect(result).toBe('Paid 100$ using PayPal');
});
