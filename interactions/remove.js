const removeHandler = entries.handleRemove.bind(
  entries,
  "display",
  "key-input"
);
document
  .getElementById("remove-button")
  .addEventListener("click", removeHandler);
