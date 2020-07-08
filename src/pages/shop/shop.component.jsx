import React, { useState } from "react";
import shopData from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
function Shop() {
  const [shop, setShop] = useState(shopData);
  const collections = shop.map(({ id, ...otherValues }) => (
    <CollectionPreview key={id} {...otherValues} />
  ));
  return <div>{collections}</div>;
}

export default Shop;
