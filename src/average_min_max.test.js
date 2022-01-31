const averageMinMax = require("./average_min_max");

test("Average Min Max - 1", () => {
  expect(averageMinMax([-42, 0, 42])).toBe(
    "Hello this is dog."
  );
});

