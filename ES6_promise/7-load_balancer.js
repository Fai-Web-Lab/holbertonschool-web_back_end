/**
 * Returns the value of the promise that settles first.
 * 
 * @param {Promise} chinaDownload - The first promise to race.
 * @param {Promise} USDownload - The second promise to race.
 * @returns {Promise} The value of the fastest resolving promise.
 */
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
