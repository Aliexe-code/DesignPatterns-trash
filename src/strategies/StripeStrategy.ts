import type { PaymentStrategy } from "./PaymentStrategy";

export class StripeStrategy implements PaymentStrategy {
    pay(amount: number): string {
        return `Paid ${amount}$ using Stripe`;
    }
}