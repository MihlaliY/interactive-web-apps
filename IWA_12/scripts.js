// scripts.js

const STATUS_MAP = {
  shelf: {
    color: "green",
    canReserve: true,
    canCheckout: true,
    canCheckIn: false,
  },
  reserved: {
    color: "blue",
    canReserve: false,
    canCheckout: true,
    canCheckIn: false,
  },
  overdue: {
    color: "red",
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  },
  checkedOut: {
    color: "orange",
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  },
}

// Edit below line

/* Upadate overdue status */
const status0 = document.querySelector("#book1 .status")
const reserve0 = document.querySelector("#book1 .reserve")
const checkout0 = document.querySelector("#book1 .checkout")
const checkin0 = document.querySelector("#book1 .checkin")
status0.style.color = STATUS_MAP[status0.textContent].color
reserve0.disabled = !STATUS_MAP.overdue.canReserve
checkout0.disabled = !STATUS_MAP[status0.textContent].canCheckout
checkin0.disabled = !STATUS_MAP[status0.textContent].canCheckIn

/* Upadate reserved status */
const status1 = document.querySelector("#book2 .status")
const reserveButton1 = document.querySelector("#book2 .reserve")
const checkoutButton1 = document.querySelector("#book2 .checkout")
const checkinButton1 = document.querySelector("#book2 .checkin")
status1.style.color = STATUS_MAP[status1.textContent].color
reserveButton1.disabled = !STATUS_MAP[status1.textContent].canReserve
checkoutButton1.disabled = !STATUS_MAP[status1.textContent].canCheckout
checkinButton1.disabled = !STATUS_MAP[status1.textContent].canCheckIn

/* Upadate reserved status */
const status2 = document.querySelector("#book3 .status")
const reserveButton2 = document.querySelector("#book3 .reserve")
const checkoutButton2 = document.querySelector("#book3 .checkout")
const checkinButton2 = document.querySelector("#book3 .checkin")
status2.style.color = STATUS_MAP[status2.textContent].color
reserveButton2.disabled = !STATUS_MAP[status2.textContent].canReserve
checkoutButton2.disabled = !STATUS_MAP[status2.textContent].canCheckout
checkinButton2.disabled = !STATUS_MAP[status2.textContent].canCheckIn
