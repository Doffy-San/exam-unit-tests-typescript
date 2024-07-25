import { submitOrder, Order } from './index';
import { sendOrderEmail } from './lib/email';

jest.mock('./lib/email', () => ({
  sendOrderEmail: jest.fn(), //Création du Mock afin de pas appeler sendOrderEmail
}));

describe("submitOrder", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Réinitialise l'état des mocks avant chaque test
  });

  it("should submit the order if it has not been submitted", () => {
    const order: Order = { id: '123', isSubmitted: false };
    
    const updatedOrder = submitOrder(order);
    
    expect(updatedOrder.isSubmitted).toBe(true);
    expect(sendOrderEmail).toHaveBeenCalledWith('123');
    expect(sendOrderEmail).toHaveBeenCalledTimes(1);
  });

  it("should throw an error if the order has already been submitted", () => {
    const order: Order = { id: '123', isSubmitted: true };

    expect(() => submitOrder(order)).toThrow("Order has already been submitted");
    expect(sendOrderEmail).not.toHaveBeenCalled();
  });
});
