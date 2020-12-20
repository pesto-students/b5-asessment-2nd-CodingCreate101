require("./arrayUtils.js");

let list;
beforeEach(() => {
  list = Array(1, 2, 3, 4, 5);
});

describe("forEach", () => {
  it("should be a function", () => {
    expect(typeof list.customForEach).toBe("function");
  });

  let counter = 0;
  it("should execute callback function on all elements", () => {
    list.customForEach(ele => (counter += ele));
    expect(counter).toBe(15);
  });
});

describe("map", () => {
  it("should be a function", () => {
    expect(typeof list.customMap).toBe("function");
  });

  it("should iterate through each element, apply the function and return an array", () => {
    const updatedArray = list.customMap(item => item + 1);
    expect(updatedArray).toEqual([2, 3, 4, 5, 6]);
  });
});

describe("filter", () => {
  it("should be a function", () => {
    expect(typeof list.customFilter).toBe("function");
  });

  it("should filter the array using a condition", () => {
    const updatedArray = list.customFilter(item => item > 3);
    expect(updatedArray).toEqual([4, 5]);
  });
});

describe("reduce", () => {
  it("should be a function", () => {
    expect(typeof list.customReduce).toBe("function");
  });

  it("should reduce the array items to one return value based on provided function, and accumulator", () => {
    const reducedValue = list.customReduce((acc, item) => acc + item);
    expect(reducedValue).toBe(15);
  });
});
