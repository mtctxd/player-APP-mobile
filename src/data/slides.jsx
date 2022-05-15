import assets from "./assets";

const slides = [
  {
    id: 1,
    content: (
      <img
        src={assets.cover}
        alt="unreleased"
        className="sliderItem"
        width="128xp"
        height="128xp"
      />
    ),
  },
  {
    id: 2,
    content: (
      <img
        src={assets.unreleased}
        alt="unreleased"
        className="sliderItem"
        width="320px"
        height="320px"
      />
    ),
  },
  {
    id: 3,
    content: (
      <img
        src={assets.cover_1}
        alt="unreleased"
        className="sliderItem"
        width="128xp"
        height="128xp"
      />
    ),
  },
];

export default slides;
