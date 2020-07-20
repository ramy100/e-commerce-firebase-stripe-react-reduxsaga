import React from "react";
import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";
function CollectionPreview({ title, items }) {
  const itemsElements = items
    .filter((item, idx) => idx < 4)
    .map((item) => <CollectionItem key={item.id} item={item}></CollectionItem>);
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">{itemsElements}</div>
    </div>
  );
}

export default CollectionPreview;
