import React from "react";
import { connect } from "react-redux";
import {
  selectIsCollectionsLoaded,
  selectIsFetching,
} from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import { createStructuredSelector } from "reselect";
import collectionOverview from "./collection-overview.component";
import { compose } from "redux";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching,
});

const CollectionsOverviewCOntainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(collectionOverview);

export default CollectionsOverviewCOntainer;
