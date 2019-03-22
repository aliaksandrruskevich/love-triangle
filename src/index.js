/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) { 
  preferences.unshift(0); 
  var j = 0, k = 0, sum = 0; 
  for( i = 1; i < preferences.length; i++) { 
  j = preferences[i]; 
  k = preferences[j]; 
  if ( j > i && k > i && preferences[k] == i) { 
  sum = sum + 1; 
  } 
  } 
  return sum; 
  };