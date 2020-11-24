function quickSort(segArray) {
	if (segArray.length <= 1) { 
		return segArray;
	} else {
		let esqrd = [];
		let dir = [];
		let array1 = [];
		let pivot = segArray.pop();

		for (let i = 0; i < segArray.length; i++) {
			if (segArray[i] <= pivot) {
				esqrd.push(segArray[i]);
			} else {
				dir.push(segArray[i]);
			}
		}
		return array1.concat(quickSort(esqrd), pivot, quickSort(dir));
	}

}
module.exports = {
    quickSort
}