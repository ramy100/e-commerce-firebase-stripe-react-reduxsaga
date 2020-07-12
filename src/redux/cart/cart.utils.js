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

export const removeOne = (cartItems, CartItemToDecrease) => {
  const hasMoreThanOne = cartItems.find(
    (item) => item.id === CartItemToDecrease.id && item.quantity > 1
  );
  if (hasMoreThanOne) {
    return cartItems.map((item) =>
      item.id === CartItemToDecrease.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  }
  return cartItems.filter((item) => item.id !== CartItemToDecrease.id);
};
