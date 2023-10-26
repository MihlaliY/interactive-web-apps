const rent = 400;
const tax = "8%";
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = "00";
const minuteOfDay = "00";

// Only change below this line

if (
  hourOfDay &&
  minuteOfDay !== null &&
  hourOfDay == "00" &&
  minuteOfDay == "00"
) {
  const taxAsDecimal = parseInt(tax) / parseInt("100");
  const startingAfterTax = salary - salary * taxAsDecimal;
  const balance = startingAfterTax - transport - food - rent;

  console.log("R", balance.toFixed(2));
} else if (hourOfDay && minuteOfDay === undefined) {
  console.log("Balance cannot be calculated if time is not known.");
}
