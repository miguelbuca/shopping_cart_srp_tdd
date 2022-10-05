import { IShoppingCart } from "./ShoppingCart";

export type StatusType = "open" | "confirmed";

export interface IResquestInput {
  /** Current status */
  status: StatusType;
  /** Request amount */
  requestValue: number;
  /** ShoppingCart */
  shoppingCart: IShoppingCart;
}

export interface IResquest extends IResquestInput{
    /** Get the a shopping cart */
    getShoppingCart(): IShoppingCart
    /** Get the status  */
    getStatus(): string

    /** Set a new status value */
    setStatus(status: StatusType): void

    /** Confirm request status */
    confirm():boolean
}