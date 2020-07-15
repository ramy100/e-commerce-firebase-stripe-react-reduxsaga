import React, { useEffect, useState } from "react";

import CollectionOverView from "../../components/collection-overview/collection-overview.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import { updateCollections } from "../../redux/shop/shop.actions";
import {
  firestore,
  convertCollectionsSnaphotToMap,
} from "../../firebase/firebase.utils";
import { connect } from "react-redux";
const CollectionsOverViewWithSpinner = WithSpinner(CollectionOverView);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);
function Shop({ match, updateCollections }) {
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    const collectionRef = firestore.collection("collections");
    const unsubscribeFromSnapShot = collectionRef.onSnapshot(
      async (snapshot) => {
        updateCollections(convertCollectionsSnaphotToMap(snapshot));
        setLoading(false);
      }
    );
    return () => {
      unsubscribeFromSnapShot();
    };
  }, []);
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionsOverViewWithSpinner isLoading={Loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionsPageWithSpinner isLoading={Loading} {...props} />
        )}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collections) => dispatch(updateCollections(collections)),
});

export default connect(null, mapDispatchToProps)(Shop);
