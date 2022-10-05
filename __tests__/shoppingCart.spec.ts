import { IItemInput } from "../app/interfaces/Item";
import { ShoppingCart } from "../app/classes/ShoppingCart";

describe("Shopping cart module", () => {
  const item = new ShoppingCart();

  const value: IItemInput = {
    description: "something",
    value: 60,
  };

  it("Add Item", () => {
    item.addItem(value);
    expect(item.isValid()).toBe(true);
  });

  it("Is valid", () => {
    expect(item.isValid()).toBeTruthy();
  });

  it("Get Itens", () => {
    expect(item.getItens()).toMatchObject([value]);
  });
});
