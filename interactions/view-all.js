const viewAllHandler = entries.handleViewAll.bind(entries, "display");
document
  .getElementById("view-all-button")
  .addEventListener("click", viewAllHandler);
