/**
 * Divides a numerator by a denominator.
 * 
 * @param {Number} numerator - The number to be divided.
 * @param {Number} denominator - The number to divide by.
 * @returns {Number} The result of the division.
 * @throws {Error} If the denominator is exactly 0.
 */
export default function divideFunction(numerator, denominator) {
  // Check if the denominator is 0 to prevent division by zero
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }

  // Return the result of the division
  return numerator / denominator;
}
