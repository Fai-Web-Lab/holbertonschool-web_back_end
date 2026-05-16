/**
 * Appends handlers to a promise to return specific responses and log a message.
 * 
 * @param {Promise} promise - The promise to handle.
 * @returns {Promise} A promise with attached then, catch, and finally handlers.
 */
export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({
      status: 200,
      body: 'success',
    }))
    .catch(() => new Error())
    .finally(() => {
      console.log('Got a response from the API');
    });
}
