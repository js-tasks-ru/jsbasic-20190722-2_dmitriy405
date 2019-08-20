/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
	let arr = str.split(' ').join(',').split(',');
		for (let i = 0; i < arr.length; i++) {
		  arr[i] = parseFloat(arr[i]);
		}
	let newArr = arr.filter(Boolean);
	let min = Math.min.apply(null, newArr);
	let max = Math.max.apply(null, newArr);
	let arrMinMax = [];
	return arrMinMax.push(min, max);	
}
