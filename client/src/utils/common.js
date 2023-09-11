export const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 50,
  breakpoints: {
    // 480: { slidesPerView: 1 },
    600: { slidesPerView: 1 },
    750: { slidesPerView: 2 },
    1100: { slidesPerView: 4 },
  },
};

export const updateFavourites = (id, favourites) => {
  if (favourites.includes(id)) {
    return favourites.filter((favouriteId) => favouriteId !== id);
  } else {
    return [...favourites, id];
  }
};
