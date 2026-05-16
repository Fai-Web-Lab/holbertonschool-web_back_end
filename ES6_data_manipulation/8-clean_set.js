/**
 * Returns a string of all set values that start with a specific string.
 * 
 * @param {Set} set - The set of strings to evaluate.
 * @param {String} startString - The starting string to filter and strip.
 * @returns {String} A string containing the rest of the matched values separated by '-'.
 */
export default function cleanSet(set, startString) {
  // Return an empty string if startString is undefined, not a string, or empty
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  const parts = [];

  // Iterate through the set
  for (const value of set) {
    // Ensure the value is a string and starts with the startString
    if (typeof value === 'string' && value.startsWith(startString)) {
      // Extract the rest of the string and add it to our array
      parts.push(value.slice(startString.length));
    }
  }

  // Join the extracted parts with a hyphen
  return parts.join('-');
}
