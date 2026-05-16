/**
 * Updates the quantity of unique items in a map to 100.
 * 
 * @param {Map} map - The map containing grocery items and their quantities.
 * @returns {Map} The updated map.
 * @throws {Error} If the argument is not a Map.
 */
export default function updateUniqueItems(map) {
  // Check if the provided argument is an instance of a Map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate through the map entries
  for (const [item, quantity] of map) {
    // If the quantity is exactly 1, update it to 100
    if (quantity === 1) {
      map.set(item, 100);
    }
  }

  return map;
}
