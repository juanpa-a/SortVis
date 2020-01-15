const array = [2, 1, 3, 4, 6, 5, 9, 8, 7, 0];

if (array.length === 1) {
  const merge = array => {
    return array;
  }
	// Slipt the array in halves!
	let leftHalf = array.splice(0, Math.floor(array.length / 2));
  let rightHalf = array;
  
  return merge()
	
};


merge(array);
