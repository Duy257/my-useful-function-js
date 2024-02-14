/**
 * Groups an array of objects by a specified key.
 * Nhóm một mảng các đối tượng theo một khóa được chỉ định.
 *
 * @param {Array} array - The array of objects to be grouped.
 * @param {string} key - The key to group the objects by.
 * @returns {Array} - The grouped array.
 */
function groupByKey(array, key) {
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

// Example
// const data = [
//   { id: 1, category: 'A', value: 'apple' },
//   { id: 2, category: 'B', value: 'banana' },
//   { id: 3, category: 'A', value: 'apricot' },
//   { id: 4, category: 'C', value: 'cherry' },
//   { id: 5, category: 'B', value: 'blueberry' },
//   { id: 6, category: 'A', value: 'avocado' },
//   { id: 7, category: 'C', value: 'coconut' },
//   { id: 7, category: 'D', value: 'hehe' },
// ];

// const result = groupByValue(data, 'category');
// console.log(result);
