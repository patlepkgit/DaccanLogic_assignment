const partitionArray = (arr) => {
	let set1 = []
	let set2 = []
	function isPrime(arr) {
		if (arr < 2) return false;
		for (let k = 2; k < arr; k++) {
			if (arr % k == 0) return false;
		}
		return true;
	}
	arr.forEach(function (element) {
		const item = isPrime(element);
		if (item) set1.push(element);
		else set2.push(element);
	});

	console.log("set1: " + set1)
	console.log("set2: " + set2)

	let n = arr.length;
	let sum = 0;
	for (let i = 0; i < n; i++)
		sum += arr[i];
	let setSum = parseInt(sum / 2) + 1;
	console.log("Sum of each set: " + setSum)

	let matrixDump = Array(setSum).fill(false);
	let matrixDump1 = Array(setSum).fill(false);
	for (let i = 0; i < setSum; i++) {
		matrixDump[i] = matrixDump1[i] = false;
	}

	matrixDump1[0] = true;

	for (let i = 0; i < n; i++) {
		for (let j = 0; j + arr[i] < setSum; j++) {
			if (matrixDump[j]) matrixDump1[j + arr[i]] = true;
		}
		for (let j = 0; j < setSum; j++) {
			if (matrixDump1[j]) matrixDump[j] = true;
			matrixDump1[j] = false;
		}
	}

	for (let i = setSum - 1; i >= 0; i--) {
		if (matrixDump[i])
			return (sum - 2 * i);
	}
	return 0;
}

let arr = [3, 4, 5, 3, 100, 1, 83, 54, 23, 20];
console.log("Min diff of 2 sets is " + partitionArray(arr));