function quickSort(numArray) {
	if (numArray.length <= 1) { 
		return numArray;
	} else {
		let esqrd = [];
		let dir = [];
		let array1 = [];
		let pivot = numArray.pop();

		for (let i = 0; i < numArray.length; i++) {
			if (numArray[i] <= pivot) {
				esqrd.push(numArray[i]);
			} else {
				dir.push(numArray[i]);
			}
		}
		return array1.concat(quickSort(esqrd), pivot, quickSort(dir));
	}

}
module.exports = {
    quickSort
}