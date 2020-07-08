import React, { useState } from "react";
import "./directory.styles.scss";
import "../menu-item/menu-item.component";
import MenuItem from "../menu-item/menu-item.component";
function Directory(props) {
  const [sections, setSections] = useState([
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 3,
      link: "hats",
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 4,
      link: "sneakers",
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 5,
      link: "jackets",
    },
    {
      title: "men",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      id: 1,
      size: "large",
      link: "men",
    },
    {
      title: "women",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      id: 2,
      size: "large",
      link: "women",
    },
  ]);
  const sectionsElements = sections.map(({ id, ...otherValues }) => (
    <MenuItem key={id} {...otherValues} />
  ));
  return <div className="directory-menu">{sectionsElements}</div>;
}

export default Directory;
