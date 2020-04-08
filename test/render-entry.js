console.groupCollapsed("Testing:  entries.renderEntry");

try {
  const assert = (assertion, message) => {
    if (assertion) {
      console.log("%cPASS: " + message, "color:green");
    } else {
      console.log("%cFAIL: " + message, "color:red");
    }
  };

  //console.log("write me!");

  entries.state = { 2: 1, 3: 2 };
  //this.renderEntry(2); //renderEntry: function (key)
  //`<text>${key}: <code>${entry[key]}</code></text>`
  const test0 = entries.renderEntry(2) === "<text>2: <code>1</code></text>";
  assert(test0, "Test 0");

  const test1 = entries.renderEntry(3) === "<text>3: <code>2</code></text>";
  assert(test1, "Test 1");

  entries.state = { a: 3, b: 4 };
  const test2 = entries.renderEntry("a") === "<text>a: <code>3</code></text>";
  assert(test2, "Test 2");

  const test3 = entries.renderEntry("b") === "<text>b: <code>4</code></text>";
  assert(test3, "Test 3");

  const test4 = entries.renderEntry(3) === "<text>no entry with key 3</text>";
  assert(test4, "Test 4");
} catch (err) {
  console.log(err);
}

console.groupEnd();
