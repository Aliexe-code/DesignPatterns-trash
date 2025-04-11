import type { PaymentStrategy } from "./PaymentStrategy"

export class BankTransferStrategy implements PaymentStrategy {
    constructor(private readonly bankAccountNumber: string) { }
    pay(amount: number): string {
        return `Transferred ${amount}$ via Bank Transfer to account: ${this.bankAccountNumber}`;
    }
}
