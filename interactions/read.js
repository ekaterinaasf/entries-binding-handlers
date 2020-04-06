const readHandler = entries.handleRead.bind(entries, "display", "key-input");
document.getElementById("read-button").addEventListener("click", readHandler);
