import { Item } from "../app/classes/Item";

describe("Item module", () => {

  const item = new Item();

  it("Set description", () => {
    item.setDescritpion("something");
    expect(item.description).toEqual("something");
  });
  it("Get description", () => {
    expect(item.getDescription()).toEqual("something");
  });
  it("Set value", () => {
    item.setValue(10);
    expect(item.value).toBe(10);
  });
  it("Get value", () => {
    expect(item.getValue()).toEqual(10);
  });
});
