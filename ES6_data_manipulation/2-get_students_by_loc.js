/**
 * Returns an array of students located in a specific city.
 * 
 * @param {Array} students - An array of student objects.
 * @param {String} city - The city to filter the students by.
 * @returns {Array} An array of objects representing students in the specified city.
 */
export default function getStudentsByLocation(students, city) {
  // Check if the input is a valid array to prevent runtime errors
  if (!Array.isArray(students)) {
    return [];
  }

  // Use filter to keep only the students whose location exactly matches the city argument
  return students.filter((student) => student.location === city);
}
