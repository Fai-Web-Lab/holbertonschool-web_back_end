/**
 * A WeakMap to track the number of times an endpoint is queried.
 */
export const weakMap = new WeakMap();

/**
 * Queries an API endpoint and tracks the number of calls.
 * 
 * @param {Object} endpoint - The endpoint object containing protocol and name.
 * @throws {Error} If the endpoint is queried 5 or more times.
 */
export function queryAPI(endpoint) {
  // Retrieve the current count for the endpoint, defaulting to 0 if it doesn't exist
  let count = weakMap.get(endpoint) || 0;
  
  // Increment the count
  count += 1;
  
  // Update the count in the WeakMap
  weakMap.set(endpoint, count);

  // Check if the load is high
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
