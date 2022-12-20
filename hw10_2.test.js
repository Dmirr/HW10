const topStudents = require("./hw10_2.js");

describe("Test top student", () => {
  it("Проверка на больше или равно ", () => {
    expect(topStudents(35)).toBeGreaterThanOrEqual(35);
  });
});
