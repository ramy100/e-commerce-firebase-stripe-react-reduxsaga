import React, { useEffect } from "react";

import CollectionOverView from "../../components/collection-overview/collection-overview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import { updateCollections } from "../../redux/shop/shop.actions";
import {
  firestore,
  convertCollectionsSnaphotToMap,
} from "../../firebase/firebase.utils";
import { connect } from "react-redux";
function Shop({ match, updateCollections }) {
  useEffect(() => {
    const collectionRef = firestore.collection("collections");
    const unsubscribeFromSnapShot = collectionRef.onSnapshot(
      async (snapshot) => {
        updateCollections(convertCollectionsSnaphotToMap(snapshot));
      }
    );
    return () => {
      unsubscribeFromSnapShot();
    };
  }, []);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverView} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collections) => dispatch(updateCollections(collections)),
});

export default connect(null, mapDispatchToProps)(Shop);
