import { uploadPhoto, createUser } from './utils.js';

/**
 * Resolves multiple promises collectively and logs the combined results.
 * Logs an error message if any of the promises reject.
 * 
 * @returns {Promise} The collective promise resolution.
 */
export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      // values[0] is the result of uploadPhoto()
      // values[1] is the result of createUser()
      const photo = values[0];
      const user = values[1];
      
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
