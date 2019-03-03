/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  // 0  1  2  3   
  //[8, 3, 2, 1]

  //
 /* arr[index1]  arr[el1]   arr[el2]
                >          > 
      el1          el2       index1

  */  
preferences.unshift("start");                  

// console.log(preferences);
  let triangles = 0;
  for(let i = 1; i < preferences.length; i++) {
  	let b, j;
  	 b = preferences[ preferences[i]];
     j = preferences[ preferences[ preferences[i]]];
  
     if(i === j && i !== b) {
     	// console.log(`index - ${i}`);
     	// console.log(preferences[i])
     	// console.log(b);
     	// console.log(j);
     	triangles++;
     }
  	}
  	//console.log(`${triangles / 3} loves triangles is/are here`); // We need only count of unique love triangle, without repeatable combinations ...count / 3;
  	return triangles / 3;
};
