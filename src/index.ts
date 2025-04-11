import { PaymentContext } from './PaymentContext';
import { StripeStrategy } from './strategies/StripeStrategy';
import { PaypalStrategy } from './strategies/PaypalStrategy';
import { CryptoStrategy } from './strategies/CryptoStrategy';
import { BankTransferStrategy } from './strategies/BankTransferStrategy';

const payment = new PaymentContext(new StripeStrategy());
console.log(payment.processPayment(100));

payment.setStrategy(new PaypalStrategy());
console.log(payment.processPayment(75));

payment.setStrategy(new CryptoStrategy());
console.log(payment.processPayment(200));

payment.setStrategy(new BankTransferStrategy('123456789'));
console.log(payment.processPayment(150));