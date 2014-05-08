//一維陣列排序
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

//二維陣列排序
var select_multisort = function(arr) {

	var arrLength = arr.length;
	var arrLengths = 0;
	var i = 0, j = 0, k = 0;
	var tmp = 0;

	//先排完第二維
	for(i; i<arrLength; i++) {
		arrLengths = arr[i].length;
		j = 0;
		for(j; j<arrLengths; j++) {
			for(k=j; k<arrLengths; k++) {
				if(arr[i][j]>arr[i][k]) {
					tmp = arr[i][k];
					arr[i][k] = arr[i][j];
					arr[i][j] = tmp;
				}
			}
		}
	}

	//在排第一維
	for(i=0; i<arrLength; i++) {
		for(j=i; j<arrLength; j++) {
			if(arr[i][0]>arr[j][0]) {
				tmp = arr[i];
				arr[i] = arr[j];
				arr[j] = tmp;
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

//console.log('=====慢動作=====');
//arr_sort = select_sort(arr2, true);
//console.log(arr_sort);

var arr_multi = [[15, 14, 13, 12, 11],
                 [10, 9, 8, 7, 6],
				 [5, 4, 3, 2, 1]];
var arr_multi2 = [[15, 14, 13, 12, 11],
                 [10, 9, 8, 7, 6],
				 [5, 4, 3, 2, 1]];
				 
console.log('=====排序前(二維)=====');
console.log(arr_multi);

console.log('=====快進(二維)=====');
arr_sort = select_multisort(arr_multi2);
console.log(arr_sort);
