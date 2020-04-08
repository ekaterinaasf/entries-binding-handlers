const entries = {
  state: {},
  log: [],

  // logic methods (these all work, check the tests in console!)
  write: function (key, value) {
    this.state[key] = value;
    return { [key]: this.state[key] };
  },
  read: function (key) {
    if (!this.state.hasOwnProperty(key)) return null;

    return { [key]: this.state[key] };
  },
  find: function (value) {
    const valueIndex = Object.values(this.state).indexOf(value);
    if (valueIndex === -1) return null;

    const key = Object.keys(this.state).find(
      (nextKey) => this.state[nextKey] === value
    );
    return { [key]: value };
  },
  remove: function (key) {
    if (!this.state.hasOwnProperty(key)) return null;

    const oldValue = this.state[key];
    delete this.state[key];
    return { [key]: oldValue };
  },
  clear: function () {
    this.state = {};
    return true;
  },

  // view methods (these work!)
  renderEntry: function (key) {
    const entry = this.read(key);
    return entry === null
      ? `<text>no entry with key ${key}</text>`
      : `<text>${key}: <code>${entry[key]}</code></text>`;
  },
  renderEntries: function () {
    const liElements = Object.keys(this.state)
      .map((key) => `\n <li>${this.renderEntry(key)}</li>`)
      .reduce((allLis, liStr) => allLis + liStr, "");

    return "<ul>" + liElements + "\n</ul>";
  },

  // handler methods
  handleWrite: function (displayId, keyId, valueId) {
    //debugger; // this one works
    const key = document.getElementById(keyId).value;
    const value = document.getElementById(valueId).value;
    this.write(key, value);
    const newList = this.renderEntries();
    const displayEl = document.getElementById(displayId);
    displayEl.innerHTML = "";
    displayEl.innerHTML = newList;
    this.log.push({
      handler: "write",
      newList,
      newState: JSON.parse(JSON.stringify(this.state)),
    });
  },
  handleRead: function (displayId, keyId) {
    //debugger;
    // render only the entry with this key
    const key = document.getElementById(keyId).value;
    const displayEl = document.getElementById(displayId);
    this.read(key); //maybe redundant??
    const newEntry = this.renderEntry(key);
    //"<ul>" + liElements + "\n</ul>";
    displayEl.innerHTML = "";
    displayEl.innerHTML = "<ul>\n <li>" + newEntry + "\n</li>\n</ul>";
    this.log.push({
      handler: "read",
      newEntry,
      newState: JSON.parse(JSON.stringify(this.state)),
    });
  },
  handleFind: function (displayId, valueId) {
    debugger;
    // render only the first entry with the given value
    const value = document.getElementById(valueId).value;
    const displayEl = document.getElementById(displayId);
    //const newEntry = this.find(value); //return { [key]: this.state[key] }
    //const rez = this.renderEntry(newEntry[key]);
    //const key = Object.keys(this.entries.state)[Object.values(this.entries.state).indexOf(value)];
    //const found = this.state.find(value);
    const key = Object.keys(this.state).find(
      (key) => this.state[key] === value
    ); //find key name by its value
    const newEntry = this.renderEntry(key);
    displayEl.innerHTML = "";
    displayEl.innerHTML = "<ul>\n <li>" + newEntry + "\n</li>\n</ul>";
    this.log.push({
      handler: "find",
      newEntry,
      newState: JSON.parse(JSON.stringify(this.state)),
    });
  },
  handleRemove: function (displayId, keyId) {
    debugger;
    const key = document.getElementById(keyId).value;
    this.remove(key);
    const newList = this.renderEntries();
    const displayEl = document.getElementById(displayId);
    displayEl.innerHTML = "";
    displayEl.innerHTML = newList;
    this.log.push({
      handler: "remove",
      newList,
      newState: JSON.parse(JSON.stringify(this.state)),
    });
  },
  handleViewAll: function (displayId) {
    debugger; // render all entries
    const displayEl = document.getElementById(displayId);
    const newList = this.renderEntries();
    displayEl.innerHTML = "";
    displayEl.innerHTML = newList;
    this.log.push({
      handler: "display all",
      newList,
      newState: JSON.parse(JSON.stringify(this.state)),
    });
  },
  handleReset: function (displayId) {
    debugger; // this one works
    this.clear();
    const displayEl = document.getElementById(displayId);
    displayEl.innerHTML = "";
    this.log.push({
      handler: "reset",
      newState: JSON.parse(JSON.stringify(this.state)),
    });
  },

  // initialization method (it works!)
  init: function () {
    //debugger;
    this.log.push({
      initialState: JSON.parse(JSON.stringify(this.state)),
    });
  },
};
