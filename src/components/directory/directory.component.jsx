import React from "react";
import "./directory.styles.scss";
import "../menu-item/menu-item.component";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";
function Directory({ sections }) {
  const sectionsElements = sections.map(({ id, ...otherValues }) => (
    <MenuItem key={id} {...otherValues} />
  ));
  return <div className="directory-menu">{sectionsElements}</div>;
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});
export default connect(mapStateToProps)(Directory);
