const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
};

export const Price = (rate) => {
  let valuePrice = 0;
  if (rate < 4) {
    valuePrice = 3500;
  } else if (rate < 7) {
    valuePrice = 8250;
  } else if (rate < 9) {
    valuePrice = 16350;
  } else if (rate <= 10) {
    valuePrice = 21250;
  } else {
    valuePrice = 0;
  }
  return valuePrice;
};
