import ShopActionTypes from "./shop.action.types";
import {
  firestore,
  convertCollectionsSnaphotToMap,
} from "../../firebase/firebase.utils";

const fetchCallStart = () => ({
  type: ShopActionTypes.FETCH_CALL_START,
});

const fetchCallFailuer = (message) => ({
  type: ShopActionTypes.FETCH_CALL_FAILUER,
  payload: message,
});

const fetchCallSuccess = (collections) => ({
  type: ShopActionTypes.FETCH_CALL_SUCCESS,
  payload: collections,
});

export const fetchCollectionsAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCallStart());
    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnaphotToMap(snapshot);
        dispatch(fetchCallSuccess(collectionsMap));
      })
      .catch((error) => dispatch(fetchCallFailuer(error.message)));
  };
};
