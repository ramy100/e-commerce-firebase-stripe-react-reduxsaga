export const addItem = (cartItems, CartItemToAdd) => {
  const existingCartITem = cartItems.find(
    (cartItem) => cartItem.id === CartItemToAdd.id
  );
  if (existingCartITem) {
    return cartItems.map((cartItem) =>
      cartItem.id === CartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...CartItemToAdd, quantity: 1 }];
};
