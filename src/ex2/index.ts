import { sendOrderEmail } from './lib/email';

export type Order = {
  id: string;
  isSubmitted: boolean;
};

export function submitOrder(order: Order): Order {
  if (order.isSubmitted) {
    throw new Error("Order has already been submitted");
  }

  order.isSubmitted = true;
  sendOrderEmail(order.id);

  return order;
}

