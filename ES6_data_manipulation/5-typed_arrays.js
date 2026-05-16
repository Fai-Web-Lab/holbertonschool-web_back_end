/**
 * Creates a new ArrayBuffer with an Int8 value at a specific position.
 * 
 * @param {Number} length - The length of the new ArrayBuffer.
 * @param {Number} position - The position to modify.
 * @param {Number} value - The Int8 value to store at the position.
 * @returns {DataView} A DataView containing the updated ArrayBuffer.
 * @throws {Error} If the position is outside the bounds of the ArrayBuffer.
 */
export default function createInt8TypedArray(length, position, value) {
  // Check if the position is out of bounds
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Create a new ArrayBuffer of the specified length
  const buffer = new ArrayBuffer(length);
  
  // Create a DataView to manipulate the buffer
  const dataView = new DataView(buffer);

  // Set the Int8 value at the specified position
  dataView.setInt8(position, value);

  return dataView;
}
