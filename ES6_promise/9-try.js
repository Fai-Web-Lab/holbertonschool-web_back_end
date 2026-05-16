/**
 * Executes a math function and records the result or error in a queue.
 * 
 * @param {Function} mathFunction - The function to be executed.
 * @returns {Array} An array containing the result/error and a completion message.
 */
export default function guardrail(mathFunction) {
  const queue = [];

  try {
    // Attempt to execute the function and push its return value
    queue.push(mathFunction());
  } catch (error) {
    // If an error is thrown, push the string representation of the error
    queue.push(String(error));
  } finally {
    // This block runs no matter what happened in the try or catch blocks
    queue.push('Guardrail was processed');
  }

  return queue;
}
