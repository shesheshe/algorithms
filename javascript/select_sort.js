var select_sort = function(arr, slow) {

	var arrLength = arr.length;
	var i = 0, j = 0;
	var tmp = 0;
	slow = slow || false;

	for(i; i<arrLength; i++) {
		for(j=i; j<arrLength; j++) {
			if(arr[i]>arr[j]) {
				tmp = arr[j];
				arr[j] = arr[i];
				arr[i] = tmp;
			}
			if(slow) {
				console.log(arr);
			}
		}
	}
	
	return arr;

}

var arr = [5, 4, 3, 2, 1];
var arr2 = [5, 4, 3, 2, 1];
var arr_sort = [];

console.log('=====排序前=====');
console.log(arr);

console.log('=====快進=====');
arr_sort = select_sort(arr);
console.log(arr_sort);

console.log('=====慢動作=====');
arr_sort = select_sort(arr2, true);
console.log(arr_sort);