// Write a function that receives a list of non-negative numbers, and orders them in a way so when those numbers are written in a line they form the maximum possible number. For example, [50, 2, 1, 9], the largest number formed is 95021.
let bigInput = [50, 2, 1, 9, 3, 4, 6, 7]; //976504321
let input = [50, 2, 1, 9]; //95021

//Способ 1 рекурсивный
function getMaxPositiveNumber1(input) {
	let permArr = [],
		usedChars = [];
	return (function main() {
		for (let i = 0; i < input.length; i++) {
			let ch = input.splice(i, 1)[0];
			usedChars.push(ch);
			if (input.length == 0) {
				permArr.push(usedChars.slice());
			}
			main();
			input.splice(i, 0, ch);
			usedChars.pop();
		}
		return Math.max.apply(
			Math,
			permArr.map((i) => i.join(""))
		);
	})();
}

//Способ 2 рекурсивный (es6+)

function getMaxPositiveNumber2(arr) {
	let perm = (arr) =>
		arr.length
			? arr.reduce(
					(previousValue, currentValue, index) => [
						...previousValue,
						...perm([
							...arr.slice(0, index),
							...arr.slice(index + 1),
						]).map((x) => [currentValue, ...x].join("")),
					],
					[]
			  )
			: [[]];
	return Math.max(...perm(arr));
}

//Способ 3 циклический (самый быстрый для больших массивов вариаций)
function getMaxPositiveNumber3(permutation) {
	let length = permutation.length,
		result = [permutation.slice()],
		c = new Array(length).fill(0),
		i = 1,
		k,
		p;

	while (i < length) {
		if (c[i] < i) {
			k = i % 2 && c[i];
			p = permutation[i];
			permutation[i] = permutation[k];
			permutation[k] = p;
			++c[i];
			i = 1;
			result.push(permutation.slice());
		} else {
			c[i] = 0;
			++i;
		}
	}
	return Math.max(...result.map((i) => i.join("")));
}

console.log("Споcоб 1, самое большое значение:", getMaxPositiveNumber1(input));
console.log("Споcоб 2, самое большое значение:", getMaxPositiveNumber2(input));
console.log(
	"Споcоб 3, самое большое значение:",
	getMaxPositiveNumber3(bigInput)
);
