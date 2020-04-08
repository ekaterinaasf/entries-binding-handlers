console.groupCollapsed("Testing:  entries.find");

try {
  const assert = (assertion, message) => {
    if (assertion) {
      console.log("%cPASS: " + message, "color:green");
    } else {
      console.log("%cFAIL: " + message, "color:red");
    }
  };

  entries.state = {
    a: 1,
    b: 2,
    c: 3,
  };

  const test0 = JSON.stringify(entries.state) === '{"a":1,"b":2,"c":3}';
  assert(test0, "Test 0");

  entries.state = { 2: 1, 3: 2 };
  const test1 = JSON.stringify(entries.state) === '{"2":1,"3":2}';
  assert(test1, "Test 1");

  entries.state = { klm: "n", abc: "d" };
  const test2 = JSON.stringify(entries.state) === '{"klm":"n","abc":"d"}';
  assert(test2, "Test 2");

  entries.state = { c: 2, d: 4, k: 7 };
  const test3 = JSON.stringify(entries.state) === '{"c":2,"d":4,"k":7}';
  assert(test3, "Test 3");
  //console.log('write me!');

  entries.state = {};
  const test4 = JSON.stringify(entries.state) === "{}";
  assert(test4, "Test 4");
} catch (err) {
  console.log(err);
}

console.groupEnd();
