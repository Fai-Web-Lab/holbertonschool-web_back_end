/**
 * Returns an array of students for a specific city with their updated grades.
 * 
 * @param {Array} students - An array of student objects.
 * @param {String} city - The city to filter students by.
 * @param {Array} newGrades - An array of objects containing studentId and grade.
 * @returns {Array} An array of objects representing students in the specified city with grades.
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) {
    return [];
  }

  return students
    // 1. Filter out students not in the specified city
    .filter((student) => student.location === city)
    // 2. Map over the remaining students to add their grade
    .map((student) => {
      // Find the grade object for the current student
      const gradeRecord = newGrades.find((grade) => grade.studentId === student.id);
      
      return {
        ...student,
        grade: gradeRecord ? gradeRecord.grade : 'N/A',
      };
    });
}
