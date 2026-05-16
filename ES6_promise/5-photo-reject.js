/**
 * Simulates uploading a photo and immediately rejects the promise.
 * 
 * @param {String} fileName - The name of the file to be processed.
 * @returns {Promise} A rejected Promise containing an Error.
 */
export default function uploadPhoto(fileName) {
  return Promise.reject(new Error(`${fileName} cannot be processed`));
}
