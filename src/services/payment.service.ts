import { AppDataSource } from '../config/database';
import { Payment, PaymentStatus } from '../entities/Payment';
import axios from 'axios';

export class PaymentService {
  private paymentRepository = AppDataSource.getRepository(Payment);

  async createPayment(orderId: string, amount: number, provider: string) {
    const payment = this.paymentRepository.create({
      orderId,
      amount,
      provider,
      status: PaymentStatus.PENDING,
    });
    return this.paymentRepository.save(payment);
  }

  async verifyEsewa(paymentId: string, transactionId: string) {
    // Simulate eSewa verification
    const payment = await this.paymentRepository.findOne({ where: { id: paymentId } });
    if (payment) {
      payment.status = PaymentStatus.SUCCESS;
      payment.transactionId = transactionId;
      return this.paymentRepository.save(payment);
    }
    throw new Error('Payment not found');
  }

  async verifyKhalti(paymentId: string, transactionId: string) {
    // Simulate Khalti verification
    const payment = await this.paymentRepository.findOne({ where: { id: paymentId } });
    if (payment) {
      payment.status = PaymentStatus.SUCCESS;
      payment.transactionId = transactionId;
      return this.paymentRepository.save(payment);
    }
    throw new Error('Payment not found');
  }
}
