/**
 * Returns a resolved promise containing a user's first and last name.
 * 
 * @param {String} firstName - The user's first name.
 * @param {String} lastName - The user's last name.
 * @returns {Promise} A resolved promise with the user object.
 */
export default function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName,
    lastName,
  });
}
