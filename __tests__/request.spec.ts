import { Request } from "../app/classes/Request";
import { ShoppingCart } from "../app/classes/ShoppingCart";

describe("Shopping cart module", () => {
  const request = new Request();

  it("Check confirm", () => {
    expect(request.confirm()).toBeFalsy();
  });

  it("Set status", () => {
    request.setStatus('confirmed')
    expect(request.status).toEqual("confirmed");
  });

  it("Get status", () => {
    expect(request.getStatus()).toEqual("confirmed");
  });

  it("Get shopping cart", () => {
    expect(request.shoppingCart).toBeInstanceOf(ShoppingCart);
  });
});
