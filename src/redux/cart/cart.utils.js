export const addItem = (cartItems, CartItemToAdd) => {
  const existingCartITem = cartItems.find(
    (cartItem) => cartItem.id === CartItemToAdd.id
  );
  if (existingCartITem) {
    return cartItems.map((cartItem) =>
      cartItem.id === CartItemToAdd.id
        ? { ...cartItem, quantitiy: cartItem.quantitiy + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...CartItemToAdd, quantitiy: 1 }];
};
