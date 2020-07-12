const INITIAL_STATE = {
  sections: [
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
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default directoryReducer;
