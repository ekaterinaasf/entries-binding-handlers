console.groupCollapsed("Testing:  entries.read");

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

  entries.state = {
    a: 3,
    b: 2,
    c: 1,
  };

  const test1 = JSON.stringify(entries.state) === '{"a":3,"b":2,"c":1}';
  assert(test1, "Test 1");

  entries.state = {
    a: 1,
    b: 2,
    c: 3,
    d: 123,
  };

  const test2 = JSON.stringify(entries.state) === '{"a":1,"b":2,"c":3,"d":123}';
  assert(test2, "Test 2");

  entries.state = {
    k: 1,
    l: 2,
    m: 3,
  };

  const test3 = JSON.stringify(entries.state) === '{"k":1,"l":2,"m":3}';
  assert(test3, "Test 3");

  //console.log('write me!');

  entries.state = {};
  const test4 = JSON.stringify(entries.state) === "{}";
  assert(test4, "Test 4");
} catch (err) {
  console.log(err);
}

console.groupEnd();
