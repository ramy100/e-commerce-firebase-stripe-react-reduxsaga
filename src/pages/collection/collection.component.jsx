import React from "react";
import "./collection.styles.scss";
import { selectCollection } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";

function CollectionPage({ collection }) {
  const { items } = collection;
  const itemsElements = items.map((item) => (
    <CollectionItem key={item.id} item={item} />
  ));
  return (
    <div className="collection-page">
      <h2 className="title">
        <div className="items">{itemsElements}</div>
      </h2>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
