// import { toast } from "sonner";

export const rupiah = (number) => {
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

let wallet = 100000;

export const Purchase = (price) => {
  // if (wallet > price)
  console.log("test", price);
  if (wallet < price) {
    // toast.error("Insufficient Funds");
  } else {
    wallet = wallet - price;
    // toast.success("Transaction Successful");

    console.log(wallet);
  }

  return wallet;
};

export const Balance = () => {
  console.log(wallet);
  return wallet;
};
