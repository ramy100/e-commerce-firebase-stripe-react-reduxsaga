import React, { useState } from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";
function Shop({ SHOP_DATA }) {
  const collections = SHOP_DATA.map(({ id, ...otherValues }) => (
    <CollectionPreview key={id} {...otherValues} />
  ));
  return <div>{collections}</div>;
}

const mapStateToProps = createStructuredSelector({
  SHOP_DATA: selectShopCollections,
});
export default connect(mapStateToProps)(Shop);
