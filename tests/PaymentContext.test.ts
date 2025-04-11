import { PaymentContext } from '../src/PaymentContext'
import { StripeStrategy } from '../src/strategies/StripeStrategy'
import { PaypalStrategy } from '../src/strategies/PaypalStrategy'
import { CryptoStrategy } from '../src/strategies/CryptoStrategy'
import { BankTransferStrategy } from '../src/strategies/BankTransferStrategy'
import { test, expect } from 'bun:test'


test('PaymentContext processes payment correctly', () => {
    const payment = new PaymentContext(new StripeStrategy());
    expect(payment.processPayment(100)).toBe('Paid 100$ using Stripe');

    payment.setStrategy(new PaypalStrategy());
    expect(payment.processPayment(75)).toBe('Paid 75$ using PayPal');

    payment.setStrategy(new CryptoStrategy());
    expect(payment.processPayment(200)).toBe('Paid 200$ using Crypto');

    payment.setStrategy(new BankTransferStrategy('123456789'));
    expect(payment.processPayment(150)).toBe('Transferred 150$ via Bank Transfer to account: 123456789');
});
