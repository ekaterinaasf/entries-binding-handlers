const findHandler = entries.handleFind.bind(entries, "display", "value-input");
document.getElementById("find-button").addEventListener("click", findHandler);
