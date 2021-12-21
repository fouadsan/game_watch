export const TEST = "TEST";

export const test = (images) => {
  // get products from api here
  return { type: TEST, payload: { images } };
};
