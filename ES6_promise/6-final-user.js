import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

/**
 * Calls signUpUser and uploadPhoto, waiting for all to settle.
 * 
 * @param {String} firstName - The user's first name.
 * @param {String} lastName - The user's last name.
 * @param {String} fileName - The name of the file being uploaded.
 * @returns {Promise<Array>} An array containing the status and value/error of each promise.
 */
export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((results) =>
    results.map((result) => ({
      status: result.status,
      // For rejected promises, the native key is 'reason', but the prompt requires 'value'.
      // We also cast the error to a String to ensure the exact required output format.
      value: result.status === 'fulfilled' ? result.value : String(result.reason),
    }))
  );
}
