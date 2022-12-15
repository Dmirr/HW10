const studentsScore = [
  [
    { name: "Ivan", score: 35, date: "2022-10-11" },
    { name: "Maria", score: 5, date: "2022-10-10" },
    { name: "Olga", score: 0, date: "" },
    { name: "Stepan", score: 35, date: "2022-10-12" },
    { name: "Oleg", score: 9, date: "2022-10-01" },
    { name: "Zanna", score: 15, date: "2022-10-11" },
  ],
  [
    { name: "Margo", score: 0, date: "2022-10-11" },
    { name: "Natalia", score: 25, date: "2022-10-10" },
    { name: "Marina", score: 25, date: "2022-10-01" },
    { name: "Dmitry", score: 25, date: "2022-10-12" },
    { name: "Denis", score: 0, date: "2022-10-02" },
    { name: "Vadimyr", score: 1, date: "2022-10-11" },
  ],
  [
    { name: "Irina", score: 0, date: "2022-10-11" },
    { name: "Vasily", score: 0, date: "2022-10-10" },
    { name: "David", score: 0, date: "2022-10-11" },
    { name: "Kristina", score: 0, date: "2022-10-12" },
    { name: "Varvara", score: 0, date: "2022-10-01" },
    { name: "Tanya", score: 0, date: "2022-10-11" },
  ],
];

function topStudents(studentsScore) {
  let newStudentScore = [];

  studentsScore.forEach(function (array) {
    array.forEach(function (students) {
      newStudentScore.push(students);
    });
  });

  let sortedArray = newStudentScore.sort((a, b) => {
    return b.score - a.score;
  });
  let i = 0;
  let studentsTop = [];
  studentsTop.push(sortedArray[i]);

  console.log(`Первый студент ${studentsTop[0].name} ${studentsTop[0].score}`);

  while (sortedArray[i].score == sortedArray[i + 1].score) {
    studentsTop.push(sortedArray[i + 1]);
    console.log(
      `Второй студент ${studentsTop[i + 1].name}  ${studentsTop[i + 1].score} `
    );
    i++;
  }
  return studentsTop;
}
topStudents(studentsScore);
