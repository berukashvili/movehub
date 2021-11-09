const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1300px",
  laptopL: "1540px",
  desktopL: "1750px",
};

export const devices = {
  mobileS: `(max-width: ${sizes.mobileS})`,
  mobileM: `(max-width: ${sizes.mobileM})`,
  mobileL: `(max-width: ${sizes.mobileL})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptop: `(max-width: ${sizes.laptop})`,
  laptopL: `(max-width: ${sizes.laptopL})`,
  desktopL: `(max-width: ${sizes.desktopL})`,
};
