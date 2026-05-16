/**
 * Returns the sum of all student ids.
 * 
 * @param {Array} students - An array of student objects.
 * @returns {Number} The sum of all student ids.
 */
export default function getStudentIdsSum(students) {
  // Return 0 if the input is not a valid array
  if (!Array.isArray(students)) {
    return 0;
  }

  // Use reduce to accumulate the sum of the ids
  return students.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
}
