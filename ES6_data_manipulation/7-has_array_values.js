/**
 * Checks if all elements in an array exist within a set.
 * 
 * @param {Set} set - The set to check against.
 * @param {Array} array - The array containing the elements to check.
 * @returns {boolean} True if all elements in the array exist in the set, false otherwise.
 */
export default function hasValuesFromArray(set, array) {
  // Use the 'every' method to check if every element in the array passes the condition
  return array.every((element) => set.has(element));
}
