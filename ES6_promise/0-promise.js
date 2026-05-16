/**
 * Returns a new Promise object.
 * 
 * @returns {Promise} A Promise.
 */
export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // The prompt only requires returning an instance of a Promise,
    // so we can simply resolve it immediately or leave it pending.
    resolve();
  });
}
