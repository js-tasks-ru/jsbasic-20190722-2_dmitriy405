/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
let m = prompt('Введите m:');
let n = prompt('Введите n:');
	
	while (n == 0) {
		alert('n - не натуральное число, попробуйте еще раз');
		n = prompt('Введите n:')
	}

	function pow(m, n) {
		return Math.pow(m, n);
	}
