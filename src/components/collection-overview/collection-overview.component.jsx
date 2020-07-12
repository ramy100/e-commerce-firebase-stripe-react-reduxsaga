import React from "react";
import "./collection-overview.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../collection-preview/collection-preview.component";

function CollectionOverView({ SHOP_DATA }) {
  const collections = SHOP_DATA.map(({ id, ...otherValues }) => (
    <CollectionPreview key={id} {...otherValues} />
  ));
  return <div className="collections-overview">{collections}</div>;
}
const mapStateToProps = createStructuredSelector({
  SHOP_DATA: selectShopCollections,
});
export default connect(mapStateToProps)(CollectionOverView);
