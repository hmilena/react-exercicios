const StudentGrade = ({ students }) => {
  return (
    <>
      <table className="mb-5">
        <thead>
          <tr>
            <th>Aluno</th>
            <th>Português</th>
            <th>Matemática</th>
            <th>História</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, i) => (
            <tr
              key={student.id}
              className={`rounded ${i % 2 === 0 ? "bg-amber-50" : ""}`}
            >
              <td>{student.name}</td>
              {student.grades.map((gradeObj) => (
                <td key={gradeObj.subject}>
                  <span
                    className={
                      gradeObj.grade >= 70 ? "text-green-600" : "text-red-600"
                    }
                  >
                    {gradeObj.grade}
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default StudentGrade;
