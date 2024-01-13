/**
 * Groups an array of objects by a specified key.
 * Nhóm một mảng các đối tượng theo một khóa được chỉ định.
 *
 * @param {Array} array - The array of objects to be grouped.
 * @param {string} key - The key to group the objects by.
 * @returns {Array} - The grouped array.
 */
function groupByValue(array, key) {
  const result = [];
  const map = new Map();
  for (const item of array) {
    if (!map.has(item[key])) {
      map.set(item[key], []);
    }
    map.get(item[key]).push(item);
  }
  map.forEach(value => result.push(value));
  return result;
}