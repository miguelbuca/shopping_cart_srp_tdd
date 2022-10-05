import { IItemInput } from "../interfaces/Item";
import { IShoppingCart } from "../interfaces/ShoppingCart";

export class ShoppingCart implements IShoppingCart {
  itens: IItemInput[] = [];

  getItens(): IItemInput[] {
    return this.itens;
  }
  addItem(item: IItemInput): void {
    this.itens.push(item);
  }
  isValid(): boolean {
    if (this.itens.length > 0) return true;
    else return false;
  }
}