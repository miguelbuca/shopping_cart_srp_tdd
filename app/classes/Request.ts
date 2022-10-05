import { IResquest, StatusType } from "../interfaces/Resquest";
import { IShoppingCart } from "../interfaces/ShoppingCart";
import { ShoppingCart } from "./ShoppingCart";

export class Request implements IResquest {
    status: StatusType = 'open';
    requestValue = 0;
    shoppingCart = new ShoppingCart();
    getShoppingCart(): IShoppingCart {
        return this.shoppingCart
    }
    getStatus(): string {
        return this.status
    }
    setStatus(status: StatusType): void {
        this.status = status
    }
    confirm(): boolean {
        if(this.shoppingCart.isValid()){
            this.status = 'confirmed'
            return true
        }else return false
    }

}