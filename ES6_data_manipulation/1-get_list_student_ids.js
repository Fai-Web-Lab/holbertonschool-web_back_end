/**
 * Retrieves an array of ids from an array of student objects.
 * 
 * @param {Array} getListStudents - An array of objects.
 * @returns {Array} An array of ids, or an empty array if the argument is not an array.
 */
export default function getListStudentIds(getListStudents) {
  // Check if the provided argument is an actual array
  if (!Array.isArray(getListStudents)) {
    return [];
  }

  // Use map to extract and return just the id property from each object
  return getListStudents.map((student) => student.id);
}
