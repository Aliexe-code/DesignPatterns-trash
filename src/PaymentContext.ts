import type { PaymentStrategy } from "./strategies/PaymentStrategy";

export class PaymentContext {
    constructor(private strategy: PaymentStrategy) { }

    setStrategy(strategy: PaymentStrategy) {
        this.strategy = strategy;
    }

    processPayment(amount: number): string {
        if (amount <= 0) {
            throw new Error('Payment amount must be greater than zero.')
        }
        return this.strategy.pay(amount);
    }
}