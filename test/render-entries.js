console.groupCollapsed("Testing:  entries.renderEntries");

try {
  const assert = (assertion, message) => {
    if (assertion) {
      console.log("%cPASS: " + message, "color:green");
    } else {
      console.log("%cFAIL: " + message, "color:red");
    }
  };

  //console.log('write me!');

  entries.state = { 2: 1, 3: 2 };
  const test0 =
    entries.renderEntries(entries.state) ===
    "<ul>\n <li><text>2: <code>1</code></text></li>\n <li><text>3: <code>2</code></text></li>\n</ul>";
  assert(test0, "Test 0");

  entries.state = { 2: 1 };
  const test1 =
    entries.renderEntries(entries.state) ===
    "<ul>\n <li><text>2: <code>1</code></text></li>\n</ul>";
  assert(test1, "Test 1");

  entries.state = {};
  const test2 = entries.renderEntries(entries.state) === "<ul>\n</ul>";
  assert(test2, "Test 2");

  entries.state = { k: "j", m: "kl" };
  const test3 =
    entries.renderEntries(entries.state) ===
    //"<ul>\n<li><text>k: <code>'j'</code></text></li>\n<li><text>m: <code>'kl'</code></text></li>\n</ul>";
    "<ul>\n <li><text>k: <code>j</code></text></li>\n <li><text>m: <code>kl</code></text></li>\n</ul>";
  assert(test3, "Test 3");
} catch (err) {
  console.log(err);
}

console.groupEnd();
