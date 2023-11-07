const root1 = document.querySelector('dl[data-key = "order1"]')
const biscuits1 = document.querySelector(
  'dl[data-key = "order1"] div.biscuits dd.count'
)
const donuts1 = document.querySelector(
  'dl[data-key = "order1"] div.donuts dd.count'
)
const pancakes1 = document.querySelector(
  'dl[data-key = "order1"] div.pancakes dd.count'
)
const status1 = document.querySelector('dl[data-key = "order1"] div.status dd')

const root2 = document.querySelector('dl[data-key = "order2"]')
const biscuits2 = document.querySelector(
  'dl[data-key = "order2"] div.biscuits dd.count'
)
const donuts2 = document.querySelector(
  'dl[data-key = "order2"] div.donuts dd.count'
)
const pancakes2 = document.querySelector(
  'dl[data-key = "order2"] div.pancakes dd.count'
)
const status2 = document.querySelector('dl[data-key = "order2"] div.status dd')

const root3 = document.querySelector('dl[data-key = "order3"]')
const biscuits3 = document.querySelector(
  'dl[data-key = "order3"] div.biscuits dd.count'
)
const donuts3 = document.querySelector(
  'dl[data-key = "order3"] div.donuts dd.count'
)
const pancakes3 = document.querySelector(
  'dl[data-key = "order3"] div.pancakes dd.count'
)
const status3 = document.querySelector('dl[data-key = "order3"] div.status dd')

biscuits1.innerText = root1.getAttribute("data-biscuits")
donuts1.innerText = root1.getAttribute("data-donuts")
pancakes1.innerText = root1.getAttribute("data-pancakes")
status1.innerText =
  root1.getAttribute("data-delivered") === "true" ? "Delivered" : "Pending"

biscuits2.innerText = root2.getAttribute("data-biscuits")
donuts2.innerText = root2.getAttribute("data-donuts")
pancakes2.innerText = root2.getAttribute("data-pancakes")
status2.innerText =
  root2.getAttribute("data-delivered") === "true" ? "Delivered" : "Pending"

biscuits3.innerText = root3.getAttribute("data-biscuits")
donuts3.innerText = root3.getAttribute("data-donuts")
pancakes3.innerText = root3.getAttribute("data-pancakes")
status3.innerText =
  root3.getAttribute("data-delivered") === "true" ? "Delivered" : "Pending"
