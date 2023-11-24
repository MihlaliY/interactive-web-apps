import {
  createOrderHtml,
  html,
  updateDraggingHtml,
  moveToColumn,
} from "./view.js"

import {createOrderData, updateDragging, state, COLUMNS} from "./data.js"
console.log("test")
/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event
 */
const handleDragOver = (event) => {
  state.event.preventDefault()
  const path = event.path || event.composedPath()
  let column = null

  for (const element of path) {
    const {area} = element.dataset
    if (area) {
      column = area
      break
    }
  }

  if (!column) return
  updateDragging({over: column})
  updateDraggingHtml({over: column})
}

const handleDragEnd = (event) => {
  moveToColumn(event.target.dataset.id, column)
  console.log(event.target.dataset)
  // const id = event.target
}
const handleHelpToggle = (event) => {
  let open = html.help.overlay
  open.showModal()
  if (open && event.target === html.help.cancel) {
    return open.close()
  }
}
const handleAddToggle = (event) => {
  let dialog = html.add.overlay
  dialog.showModal()
  if (dialog.showModal && event.target === html.add.cancel) {
    return dialog.close()
  }
}

const handleAddSubmit = (event) => {
  event.preventDefault()
  let data = new FormData(event.target)
  // data = {...data, column: "ordered"}
  const orderData = createOrderData(data)
  const orderHtml = createOrderHtml(orderData)
  html.columns["ordered"].appendChild(orderHtml)
  console.log(orderData.column)
  state.ordered = {...state.ordered, orderData}
  moveToColumn(orderData.id, "ordered")
}

const handleEditToggle = (event) => {
  html.edit.overlay.showModal()
}
const handleEditSubmit = (event) => {}
const handleDelete = (event) => {}

html.add.cancel.addEventListener("click", handleAddToggle)
html.other.add.addEventListener("click", handleAddToggle)
html.add.form.addEventListener("submit", handleAddSubmit)

html.other.grid.addEventListener("click", handleEditToggle)
html.edit.cancel.addEventListener("click", handleEditToggle)
html.edit.form.addEventListener("submit", handleEditSubmit)
html.edit.delete.addEventListener("click", handleDelete)

html.help.cancel.addEventListener("click", handleHelpToggle)
html.other.help.addEventListener("click", handleHelpToggle)

for (const htmlColumn of Object.values(html.columns)) {
  htmlColumn.addEventListener("dragstart", handleDragStart)
  htmlColumn.addEventListener("dragend", handleDragEnd)
}

for (const htmlArea of Object.values(html.area)) {
  htmlArea.addEventListener("dragover", handleDragOver)
}
