import { Request } from "./app/classes/Request";

const request = new Request();

request.shoppingCart.addItem({
    description: 'MacBook Pro',
    value: 135.20
});

request.shoppingCart.addItem({
  description: "IPhone 13",
  value: 899.9,
});