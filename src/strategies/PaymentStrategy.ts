// PaymentStrategy defines the common interface for all payment strategies.
export interface PaymentStrategy {
    pay(amount: number): string;
}