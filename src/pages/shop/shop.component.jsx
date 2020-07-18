import React, { useEffect } from "react";

import { Route } from "react-router-dom";
import { fetchCallStart } from "../../redux/shop/shop.actions";

import { connect } from "react-redux";
import CollectionsOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionContainer from "../collection/collection.container";

function Shop({ match, getCollections }) {
  useEffect(() => {
    getCollections();
  }, []);
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionContainer}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  getCollections: () => dispatch(fetchCallStart()),
});

export default connect(null, mapDispatchToProps)(Shop);
