const topStudents = require("./hw10_2.js");

describe("Test top student", () => {
  it("Проверка на больше или равно ", () => {
    expect(studentsTop).toBeGreaterThanOrEqual(35);
  });
});
