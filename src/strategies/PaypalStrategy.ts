import type { PaymentStrategy } from "./PaymentStrategy";

export class PaypalStrategy implements PaymentStrategy {
    pay(amount: number): string {
        return `Paid ${amount}$ using PayPal`;
    }
}   