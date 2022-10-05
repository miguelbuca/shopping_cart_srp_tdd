import { IItemInput } from "./Item";

export interface IShoppingCart {
  /** Itens in the cart  */
  itens: IItemInput[];

  /** Get all Itens */
  getItens(): IItemInput[];

  /** Add a new Item */
  addItem(item: IItemInput): void;

  /** Check if item list is valid */
  isValid(): boolean;
}