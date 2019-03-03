/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
 
 /* arr[index1]  arr[el1]   arr[el2]
                >          > 
      el1          el2       index1
  */  
preferences.unshift("start");                  

  let triangles = 0;
  for(let i = 1; i < preferences.length; i++) {
  	let b, j;
  	 b = preferences[ preferences[i]];
     j = preferences[ preferences[ preferences[i]]];
  
     if(i === j && i !== b) {
     	triangles++;
     }
  	}
  	return triangles / 3;
};
