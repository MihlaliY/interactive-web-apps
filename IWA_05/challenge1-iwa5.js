const FREE_WARNING = "Free shipping only applies to single customer orders";
const BANNED_WARNIN =
  "Unfortunately we do not ship to your country of residence";
const NONE_SELECTED = "0";

let shipping = null;
let currency = "$";
const customers = "1";
const country = "RSA";

const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * NONE_SELECTED;
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED;

if (country === "RSA") {
  shipping = 400;
  currency = "R";

  country === "North Korea"
    ? console.log(BANNED_WARNIN)
    : console.log(
        "price",
        currency,
        shoes + batteries + pens + shirts + shipping + toys
      );
} else if (country === "NAM") {
  shipping = 600;
  currency = "$";
} else {
  shipping = 800;
}

if (
  shoes + batteries + pens + shirts + toys >= 1000 &&
  country === ("RSA" || "NAM") &&
  customers < 2
) {
  shipping = 0;
}

if ((shipping = 0 && customers !== 1)) {
  console.log(FREE_WARNING);
}
